import { Mail, ExternalLink, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <a 
                href="mailto:contact@dharmaduta.in"
                className="flex items-center gap-2 hover:text-primary-light transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@dharmaduta.in
              </a>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect</h3>
              <div className="space-y-2">
                <a 
                  href="https://dharmaduta.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-light transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Dharmaduta Website
                </a>
                <a 
                  href="https://www.instagram.com/dharmadutaservicesllp.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-light transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Event Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Event Details</h3>
              <div className="text-secondary-foreground/80 space-y-1">
                <p>January 31 - February 6, 2026</p>
                <p>Buddhist Thai-Bharat Society</p>
                <p>Bodhgaya, India</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
            <p>© 2025 Buddhist Creators Masterclass - Dharmaduta. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
