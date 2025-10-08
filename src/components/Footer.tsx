import { Droplets, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">KrishiSandhai</span>
                <span className="text-xs text-muted-foreground">कृषि संधाई</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering farmers with real-time market prices and water resource information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/prices" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Today's Prices
                </Link>
              </li>
              <li>
                <Link to="/reservoirs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Reservoir Levels
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Chat Assistant
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Farmer Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">How to update prices</li>
              <li className="text-sm text-muted-foreground">Market guidelines</li>
              <li className="text-sm text-muted-foreground">Water conservation tips</li>
              <li className="text-sm text-muted-foreground">FAQ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>support@krishisandhai.in</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Agricultural Dept.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 KrishiSandhai. Supporting farmers with technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
