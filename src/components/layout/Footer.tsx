import { Facebook, Youtube, Mail, MapPin, Phone, Church } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="border-t bg-gradient-to-b from-gray-50 to-white">
      {/* Main Footer Content */}
      <div className="container py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Church className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Cornerstone SDA Church
              </h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-md">
              A vibrant, Christ-centered community in Nairobi, Kenya. Join us in worship, 
              fellowship, and service.
            </p>
            
            {/* Quick Links */}
            <div>
              <a 
                href="/church-bulletins" 
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium transition-colors text-sm"
              >
                Church Bulletins
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-base mb-3 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2 group">
                <MapPin className="size-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://share.google.com/dnzgifnd9MSXoyvzJ" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-foreground transition-colors"
                >
                  Nairobi, Kenya
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+254000000000" 
                  className="hover:text-foreground transition-colors"
                >
                  +254 000 000000
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@cornerstonesda.or.ke" 
                  className="hover:text-foreground transition-colors"
                >
                  info@cornerstonesda.or.ke
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Follow */}
          <div>
            <h4 className="font-semibold text-base mb-3 text-foreground">Follow Us</h4>
            <div className="flex items-center gap-2">
              <a 
                aria-label="Facebook" 
                href="https://www.facebook.com/cosdacnairobi" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="size-4" />
              </a>
              <a 
                aria-label="X (Twitter)" 
                href="https://x.com/sda_cornerstone" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter className="size-4" />
              </a>
              <a 
                aria-label="YouTube" 
                href="https://www.youtube.com/watch?v=5K0B37mhwRI" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-white/50">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} Cornerstone SDA Church Nairobi</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="/beliefs" className="hover:text-foreground transition-colors">
                Our Beliefs
              </a>
              <a href="/prayer-cells" className="hover:text-foreground transition-colors">
                Prayer Cells
              </a>
              <a href="/gallery" className="hover:text-foreground transition-colors">
                Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;