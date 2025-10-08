import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplet, TrendingUp, Users, MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";

interface Reservoir {
  id: string;
  name: string;
  capacity: number;
  current_level: number;
  percent_full: number;
  last_updated: string;
}

interface Price {
  id: string;
  crop_name: string;
  category: string;
  price_per_kg: number;
  unit: string;
  farmer_name: string;
  location: string;
  updated_at: string;
}

const Landing = () => {
  const navigate = useNavigate();
  const [reservoirs, setReservoirs] = useState<Reservoir[]>([]);
  const [prices, setPrices] = useState<Price[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - will be replaced with API calls
    setTimeout(() => {
      setReservoirs([
        {
          id: "1",
          name: "Bhakra Dam",
          capacity: 9340,
          current_level: 7850,
          percent_full: 84,
          last_updated: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Indira Sagar",
          capacity: 12220,
          current_level: 9800,
          percent_full: 80,
          last_updated: new Date().toISOString(),
        },
        {
          id: "3",
          name: "Sardar Sarovar",
          capacity: 9500,
          current_level: 7125,
          percent_full: 75,
          last_updated: new Date().toISOString(),
        },
      ]);

      setPrices([
        {
          id: "1",
          crop_name: "Tomatoes",
          category: "Vegetables",
          price_per_kg: 45,
          unit: "kg",
          farmer_name: "Ram Singh",
          location: "Ludhiana",
          updated_at: new Date().toISOString(),
        },
        {
          id: "2",
          crop_name: "Potatoes",
          category: "Vegetables",
          price_per_kg: 28,
          unit: "kg",
          farmer_name: "Priya Sharma",
          location: "Amritsar",
          updated_at: new Date().toISOString(),
        },
        {
          id: "3",
          crop_name: "Mangoes",
          category: "Fruits",
          price_per_kg: 120,
          unit: "kg",
          farmer_name: "Suresh Patel",
          location: "Jalandhar",
          updated_at: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Welcome to KrishiSandhai
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              Real-time crop prices and water resource information for farmers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" onClick={() => navigate("/signup")}>
                Join as Farmer
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" onClick={() => navigate("/prices")}>
                View Prices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why KrishiSandhai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Live Market Prices</h3>
              <p className="text-muted-foreground">
                Get real-time crop prices directly from farmers. No middlemen, fair prices.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Droplet className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Water Resources</h3>
              <p className="text-muted-foreground">
                Track reservoir levels and plan irrigation efficiently with updated data.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI Assistant</h3>
              <p className="text-muted-foreground">
                Get instant help and advice from our smart farming assistant 24/7.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservoir Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Today's Reservoir Levels</h2>
            <Button variant="link" onClick={() => navigate("/reservoirs")}>
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reservoirs.map((reservoir) => (
                <Card key={reservoir.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{reservoir.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Updated: {new Date(reservoir.last_updated).toLocaleDateString()}
                      </p>
                    </div>
                    <Droplet className="h-8 w-8 text-accent" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-semibold text-foreground">{reservoir.capacity} MCM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Current Level:</span>
                      <span className="font-semibold text-foreground">{reservoir.current_level} MCM</span>
                    </div>
                    
                    <div className="pt-2">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Fill Status:</span>
                        <span className="font-bold text-accent">{reservoir.percent_full}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-accent to-primary h-full rounded-full transition-all duration-500"
                          style={{ width: `${reservoir.percent_full}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Crop Prices */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Direct from Farmers - Today's Prices</h2>
            <Button variant="link" onClick={() => navigate("/prices")}>
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prices.map((price) => (
                <Card key={price.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{price.crop_name}</h3>
                      <p className="text-sm text-muted-foreground">{price.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">₹{price.price_per_kg}</div>
                      <div className="text-xs text-muted-foreground">per {price.unit}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{price.farmer_name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">📍 {price.location}</span>
                    </div>
                    <div className="text-xs text-muted-foreground pt-2">
                      Updated: {new Date(price.updated_at).toLocaleString()}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA for Farmers */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Are you a farmer?</h2>
          <p className="text-xl mb-8 opacity-90">
            Sign up today to list your crops and reach buyers directly!
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate("/signup")}>
            Create Farmer Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
