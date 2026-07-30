import { Link } from "react-router-dom";
import { Mail, ExternalLink, Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4 md:col-span-1">
              <Link to="/" className="flex items-center gap-2">
                <img src="/images/brand/logo.png" alt="Buddhist Creators" className="h-9 w-auto" />
                <span className="font-display text-lg font-semibold">Buddhist Creators</span>
              </Link>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                A global sangha of creators bringing the Dharma to the digital age.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold">Explore</h3>
              <nav className="flex flex-col gap-2 text-sm text-secondary-foreground/80">
                <Link to="/about" className="hover:text-primary-light transition-colors">About</Link>
                <Link to="/programs" className="hover:text-primary-light transition-colors">Programs</Link>
                <Link to="/convention" className="hover:text-primary-light transition-colors">Convention</Link>
                <a href="/#newsletter" className="hover:text-primary-light transition-colors">Get Involved</a>
              </nav>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold">Contact</h3>
              <a href="mailto:hello@buddhistcreators.com" className="flex items-center gap-2 text-sm hover:text-primary-light transition-colors">
                <Mail className="w-4 h-4" />
                hello@buddhistcreators.com
              </a>
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://www.youtube.com/@BuddhistCreators" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <Youtube className="w-4 h-4" /> YouTube
                </a>
                <a href="https://www.instagram.com/buddhist_creators/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582543556233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
                <a href="https://www.linkedin.com/company/109359959/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold">Organiser</h3>
              <address className="not-italic text-sm text-secondary-foreground/80 leading-relaxed space-y-1">
                <p>Dharmaduta</p>
                <p>Trehan Cottage, H. No. 112, Ward No. 3</p>
                <p>Near Delek Hospital, Khara Danda Road</p>
                <p>Dharamshala, Distt Kangra, HP 176215</p>
              </address>
              <a href="https://dharmaduta.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary-light transition-colors">
                <ExternalLink className="w-4 h-4" /> dharmaduta.in
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
            <p>© {year} Buddhist Creators — Dharmaduta. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
