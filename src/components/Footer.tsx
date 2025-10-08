import { Mail, ExternalLink } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <a href="mailto:contact@dharmaduta.in" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                <Mail className="w-5 h-5" />
                contact@dharmaduta.in
              </a>
            </div>

            {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Address</h3>
            <address className="not-italic text-secondary-foreground/90 leading-relaxed">
              <p>Dharmaduta</p>
              <p>Trehan cottage, H. No. 112, Ward No. 3</p>
              <p>Near Delek Hospital, Khara Danda Road</p>
              <p>Dharamshala, Distt Kangra HP</p>
              <p>176215</p>
            </address>
          </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect</h3>
              <div className="space-y-2">
                <a href="https://dharmaduta.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Dharmaduta Website
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                    <path d="M23.5 6.2a4.8 4.8 0 0 0-3.4-3.4C18.3 2.2 12 2.2 12 2.2s-6.3 0-8.1.6A4.8 4.8 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a4.8 4.8 0 0 0 3.4 3.4c1.8.6 8.1.6 8.1.6s6.3 0 8.1-.6a4.8 4.8 0 0 0 3.4-3.4C24 16 24 12 24 12s0-4-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
                  </svg>
                  YouTube
                </a>
                <a href="https://www.instagram.com/dharmadutaservicesllp.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
                    <path d="M4 4l16 16" />
                    <path d="M20 4L4 20" />
                  </svg>
                  X
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
            <p>© 2025 Buddhist Content Creators Convention - Dharmaduta. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};