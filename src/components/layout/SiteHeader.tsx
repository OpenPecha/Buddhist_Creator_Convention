import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Convention", to: "/convention" },
  { label: "Awards", to: "/awards" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page scrolling behind the open mobile drawer.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const showSolid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showSolid ? "bg-background/90 backdrop-blur-md border-b border-border shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-3">
        <Link to="/" aria-label="Buddhist Creators home" className="flex items-center gap-2 min-w-0 shrink">
          <img
            src={showSolid ? "/images/brand/logo-dark.png" : "/images/brand/logo.png"}
            alt="Buddhist Creators"
            className="h-9 md:h-11 w-auto shrink-0 transition-opacity"
          />
          <span
            className={cn(
              "font-display text-base sm:text-lg md:text-xl font-semibold tracking-tight truncate transition-colors",
              showSolid ? "text-foreground" : "text-white drop-shadow-sm"
            )}
          >
            Buddhist Creators
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 xl:px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                  showSolid
                    ? isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    : isActive
                    ? "bg-white/15 text-white"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Button
            className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elevated rounded-full px-6"
            asChild
          >
            <a href="/#newsletter">Get Involved</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            "lg:hidden -mr-2 shrink-0 p-3 rounded-md transition-colors",
            showSolid ? "text-foreground" : "text-white"
          )}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-background border-t border-border shadow-elevated md:max-h-[calc(100dvh-5rem)]">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              className="mt-2 bg-primary hover:bg-primary-light text-primary-foreground rounded-full"
              asChild
              onClick={() => setMenuOpen(false)}
            >
              <a href="/#newsletter">Get Involved</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
