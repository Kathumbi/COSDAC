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
    
    const activeItem = navItems.find(item => {
      if (item.href.startsWith('/#')) {
        return currentPath === '/' && currentHash === item.href.substring(1);
      } else if (item.href.startsWith('#')) {
        return currentPath === '/' && currentHash === item.href;
      } else {
        return currentPath === item.href;
      }
    });

    setActiveNav(activeItem?.href || "");
  }, [location]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      const hash = href.startsWith("/#") ? href.substring(1) : href;
      
      if (location.pathname !== "/") {
        navigate(`/${hash}`);
      } else {
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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div
          className="flex items-center gap-2 hover-scale cursor-pointer flex-shrink-0"
          onClick={() => navigate("/")}
        >
          <img
            src="/ImageUploads/Logo.png"
            alt="SDA Logo"
            className="size-7 sm:size-8"
          />
          <span className="font-display text-sm sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] sm:max-w-none">
            Cornerstone SDA
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`text-xs sm:text-sm transition-colors duration-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg whitespace-nowrap ${
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://advent.blissteq.com/self_service?i=1095"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="cta" size="sm" className="text-xs sm:text-sm">
              <HeartHandshake className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> 
              Give Now
            </Button>
          </a>
          <button onClick={() => handleNavClick("#sermons")}>
            <Button variant="hero" size="sm" className="text-xs sm:text-sm">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> 
              Watch Live
            </Button>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-60 h-9 w-9"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
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

        {/* Mobile Navigation Menu - FLEXIBLE FULL SCREEN */}
        <div className={`
          fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white h-16">
            <div className="flex items-center gap-2">
              <img
                src="/ImageUploads/Logo.png"
                alt="SDA Logo"
                className="size-7"
              />
              <span className="font-display text-base font-semibold text-gray-900">Cornerstone SDA</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:bg-gray-100 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Navigation Content - FLEXIBLE HEIGHT */}
          <div className="flex flex-col h-[calc(100vh-4rem)] bg-white">
            {/* Navigation Items - Flexible space distribution */}
            <div className="flex-1 p-4 space-y-1 bg-white overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left py-4 px-4 rounded-lg transition-all duration-200 text-base font-medium border-b border-gray-100 last:border-b-0 hover:shadow-sm hover:translate-x-1 active:bg-gray-50 bg-white ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary border-primary/20 font-semibold"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Buttons - Fixed at bottom */}
            <div className="p-4 space-y-3 border-t border-gray-200 bg-white flex-shrink-0">
              <a
                href="https://advent.blissteq.com/self_service?i=1095"
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <Button 
                  variant="cta" 
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-base h-12"
                >
                  <HeartHandshake className="mr-2 h-4 w-4" /> 
                  Give Now
                </Button>
              </a>
              <button 
                onClick={() => handleNavClick("#sermons")}
                className="w-full"
              >
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base h-12"
                >
                  <Play className="mr-2 h-4 w-4" /> 
                  Watch Live
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