import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, HeartHandshake } from "lucide-react";
import { useEffect } from "react";

const navItems = [
  { label: "Sermons", href: "#sermons" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
  { label: "Prayer Cells", href: "/prayer-cells" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scrolling to anchors after navigation
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href); // Navigate to homepage with hash
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
        <div
          className="flex items-center gap-2 hover-scale cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/Image uploads/Logo.png"
            alt="SDA Logo"
            className="size-8"
          />
          <span className="font-display text-lg">Cornerstone SDA Church- Nairobi</span>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground story-link"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
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
      </nav>
    </header>
  );
};

export default Header;
