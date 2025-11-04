import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, HeartHandshake, Menu, X, Church } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "/Beliefs" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Prayer Cells", href: "/prayer-cells" },
  { label: "Gallery", href: "/Gallery" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.4
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <header className={`
      sticky top-0 z-50 transition-all duration-300
      ${isScrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50" 
        : "bg-white/80 backdrop-blur-md border-b border-gray-200/30"
      }
    `}>
      <nav className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src="/ImageUploads/Logo.png"
              alt="SDA Logo"
              className="size-7 sm:size-8 transition-transform duration-300 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100"
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] sm:max-w-none text-gray-900">
              COSDAC
            </span>
            <span className="text-xs text-gray-500 hidden sm:block -mt-1">
              
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex items-center gap-1 lg:gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.button
                onClick={() => handleNavClick(item.href)}
                className={`
                  relative text-sm transition-all duration-300 px-3 py-2 rounded-lg whitespace-nowrap font-medium
                  ${isActive(item.href)
                    ? "text-blue-600 bg-blue-50 border border-blue-200 shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50/80"
                  }
                `}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full -translate-x-1/2"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Buttons */}
        <motion.div 
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="https://advent.blissteq.com/self_service?i=1095"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="cta" 
              size="sm" 
              className="text-sm bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg border-0"
            >
              <HeartHandshake className="w-4 h-4 mr-2" /> 
              Give Now
            </Button>
          </motion.a>
          <motion.button 
            onClick={() => handleNavClick("#sermons")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="hero" 
              size="sm" 
              className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg border-0"
            >
              <Play className="w-4 h-4 mr-2" /> 
              Watch Live
            </Button>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="flex md:hidden items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-60 h-9 w-9 hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-y-0 right-0 w-80 max-w-full bg-white z-50 md:hidden shadow-2xl"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <Church className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-lg font-bold text-gray-900">Cornerstone SDA</span>
                    <span className="text-sm text-gray-600">Nairobi Church</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:bg-white/50 h-8 w-8"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Navigation Content */}
              <div className="flex flex-col h-full bg-white">
                {/* Navigation Items */}
                <motion.div 
                  className="flex-1 p-6 space-y-2 bg-white overflow-y-auto"
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      variants={menuItemVariants}
                      onClick={() => handleNavClick(item.href)}
                      className={`
                        w-full text-left py-4 px-4 rounded-xl transition-all duration-200 text-base font-medium
                        border-2 border-transparent hover:border-blue-200 hover:shadow-md active:scale-95
                        ${isActive(item.href)
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-blue-200 shadow-sm font-semibold"
                          : "text-gray-700 hover:bg-gray-50/80"
                        }
                      `}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </motion.div>
                
                {/* Mobile Buttons */}
                <motion.div 
                  className="p-6 space-y-3 border-t border-gray-200 bg-white flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="https://advent.blissteq.com/self_service?i=1095"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="cta" 
                        size="lg"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl text-base h-12"
                      >
                        <HeartHandshake className="mr-3 h-5 w-5" /> 
                        Give Now
                      </Button>
                    </motion.div>
                  </a>
                  <button 
                    onClick={() => handleNavClick("#sermons")}
                    className="w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="hero" 
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl text-base h-12"
                      >
                        <Play className="mr-3 h-5 w-5" /> 
                        Watch Live
                      </Button>
                    </motion.div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;