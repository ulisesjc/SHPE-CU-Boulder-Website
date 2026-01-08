import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const shpeLogo = "/lovable-uploads/a934ef03-39ab-48d9-8377-7b2c8eefd8e2.png";
const cuBuffLogo = "/lovable-uploads/b2fe01b9-d075-4a21-8af7-219fededa41a.png";

const FlatironMountains = () => (
  <svg
    width="40"
    height="24"
    viewBox="0 0 40 24"
    fill="none"
    className="text-accent"
  >
    <path
      d="M2 22 L8 8 L12 14 L16 6 L20 12 L24 4 L28 10 L32 8 L36 14 L38 22"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 20 L10 12 L14 16 L18 10 L22 14 L26 8 L30 12 L34 10 L38 16"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Board", path: "/board" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="flex items-center space-x-3">
              {/* SHPE Logo */}
              <img 
                src={shpeLogo} 
                alt="SHPE Logo" 
                loading="eager"
                decoding="async"
                width="40"
                height="40"
                className="h-10 w-auto object-contain"
              />
              {/* Divider */}
              <div className="h-8 w-px bg-border"></div>
              {/* CU Buff Logo */}
              <img 
                src={cuBuffLogo} 
                alt="CU Boulder Logo" 
                loading="eager"
                decoding="async"
                width="40"
                height="40"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-slide-in-right" />
                )}
              </Link>
            ))}
            <Button variant="default" className="bg-accent hover:bg-accent-glow text-accent-foreground">
              Join SHPE
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground">
                  Join SHPE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;