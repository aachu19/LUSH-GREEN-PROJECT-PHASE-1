import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Droplets className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground font-tamil">விவசாய சந்தை</span>
              <span className="text-xs text-muted-foreground">Vivasaya Santhai</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium">
              <span className="font-tamil">முகப்பு</span> / Home
            </Link>
            <Link to="/prices" className="text-foreground hover:text-accent transition-colors font-medium">
              <span className="font-tamil">விலை</span> / Prices
            </Link>
            <Link to="/reservoirs" className="text-foreground hover:text-accent transition-colors font-medium">
              <span className="font-tamil">அணைகள்</span> / Dams
            </Link>
            <Link to="/chat" className="text-foreground hover:text-accent transition-colors font-medium">
              <span className="font-tamil">உதவி</span> / Help
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant="hero" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium px-4 py-2">
                Home
              </Link>
              <Link to="/prices" className="text-foreground hover:text-accent transition-colors font-medium px-4 py-2">
                Prices
              </Link>
              <Link to="/reservoirs" className="text-foreground hover:text-accent transition-colors font-medium px-4 py-2">
                Reservoirs
              </Link>
              <Link to="/chat" className="text-foreground hover:text-accent transition-colors font-medium px-4 py-2">
                Chat
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Button variant="outline" onClick={() => navigate("/login")} className="w-full">
                  Login
                </Button>
                <Button variant="hero" onClick={() => navigate("/signup")} className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
