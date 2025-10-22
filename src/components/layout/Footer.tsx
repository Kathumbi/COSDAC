import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="border-t">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl mb-3">Cornerstone SDA Church Nairobi</h3>
          <p className="text-sm text-muted-foreground">
            Worship with us and be part of a vibrant, Christ-centered community.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4" /> 
              <a href="https://share.google.com/dnzgifnd9MSXoyvzJ" target="_blank" rel="noreferrer" className="hover:text-foreground">
                Nairobi, Kenya
              </a>
            </li>
            <li className="flex items-center gap-2"><Phone className="size-4" /> +254 000 000000</li>
            <li className="flex items-center gap-2"><Mail className="size-4" /> info@cornerstonesda.or.ke</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Follow</h4>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a aria-label="Facebook" href="https://www.facebook.com/cosdacnairobi" target="_blank" rel="noreferrer" className="hover:text-foreground hover-scale"><Facebook /></a>
            <a aria-label="X (Twitter)" href="https://x.com/sda_cornerstone" target="_blank" rel="noreferrer" className="hover:text-foreground hover-scale"><FaXTwitter /></a>
            <a aria-label="Instagram" href="#" className="hover:text-foreground hover-scale"><Instagram /></a>
            <a aria-label="YouTube" href="https://www.youtube.com/watch?v=5K0B37mhwRI" target="_blank" rel="noreferrer" className="hover:text-foreground hover-scale"><Youtube /></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Cornerstone SDA Church- Nairobi. All rights reserved.</span>
          <a href="#newsletter" className="story-link">Newsletter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
