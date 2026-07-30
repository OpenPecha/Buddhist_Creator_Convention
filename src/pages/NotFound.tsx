import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  const location = useLocation();
  usePageMeta({ title: "Page Not Found" });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-section px-4">
      <div className="text-center space-y-4">
        <p className="font-display text-6xl font-semibold text-primary">404</p>
        <h1 className="text-2xl font-semibold text-foreground">This page has wandered off the path</h1>
        <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block text-primary font-medium hover:text-primary-light underline underline-offset-4">
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
