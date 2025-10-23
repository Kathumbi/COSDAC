import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, HeartHandshake, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "/Beliefs" },
  { label: "Sermons", href: "/#sermons" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/#contact" },
  { label: "Prayer Cells", href: "/prayer-cells" },
  { label: "Gallery", href: "/Gallery" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  // Set active navigation based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const currentHash = location.hash;
    
    // Find the active navigation item
    const activeItem = navItems.find(item => {
      if (item.href.startsWith('/#')) {
        // For hash links, check if we're on homepage with matching hash
        return currentPath === '/' && currentHash === item.href.substring(1);
      } else if (item.href.startsWith('#')) {
        // For hash-only links, check if we're on homepage with matching hash
        return currentPath === '/' && currentHash === item.href;
      } else {
        // For regular paths, check exact match
        return currentPath === item.href;
      }
    });

    setActiveNav(activeItem?.href || "");
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      const hash = href.startsWith("/#") ? href.substring(1) : href;
      
      if (location.pathname !== "/") {
        navigate(`/${hash}`); // Navigate to homepage with hash
      } else {
        // Already on homepage, just scroll
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setActiveNav(hash);
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return activeNav === href;
    } else if (href.startsWith('#')) {
      return activeNav === href;
    } else {
      return activeNav === href;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 hover-scale cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/ImageUploads/Logo.png"
            alt="SDA Logo"
            className="size-8"
          />
          <span className="font-display text-lg">Cornerstone SDA Church- Nairobi</span>
        </div>

        {/* Desktop Navigation - Reduced gap */}
        <ul className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`text-sm transition-colors duration-200 story-link px-3 py-2 rounded-lg ${
                  isActive(item.href)
                    ? "text-foreground font-semibold bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons - Reduced gap */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://advent.blissteq.com/self_service?i=1095"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="cta" size="sm">
              <HeartHandshake className="mr-2" /> Give Now
            </Button>
          </a>
          <button onClick={() => handleNavClick("#sermons")}>
            <Button variant="hero" size="sm">
              <Play className="mr-2" /> Watch Live
            </Button>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-60"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div className={`
          fixed top-0 right-0 h-full w-80 max-w-full bg-white border-l shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b bg-white">
            <div className="flex items-center gap-2">
              <img
                src="/ImageUploads/Logo.png"
                alt="SDA Logo"
                className="size-8"
              />
              <span className="font-display text-lg font-semibold text-gray-900">Cornerstone SDA</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation Items - Reduced spacing */}
          <div className="p-4 space-y-1 bg-white h-full overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 text-base font-medium border-b border-gray-100 last:border-b-0 hover:shadow-sm hover:translate-x-1 ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary border-primary/20 font-semibold"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Buttons */}
            <div className="pt-6 space-y-2 border-t border-gray-200 mt-4">
              <a
                href="https://advent.blissteq.com/self_service?i=1095"
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <Button variant="cta" size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <HeartHandshake className="mr-2 h-4 w-4" /> Give Now
                </Button>
              </a>
              <button 
                onClick={() => handleNavClick("#sermons")}
                className="w-full"
              >
                <Button variant="hero" size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="mr-2 h-4 w-4" /> Watch Live
                </Button>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;