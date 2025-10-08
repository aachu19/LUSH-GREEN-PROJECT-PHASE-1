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
          name: "Mettur Dam / மேட்டூர் அணை",
          capacity: 2648,
          current_level: 2250,
          percent_full: 85,
          last_updated: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Vaigai Dam / வைகை அணை",
          capacity: 194,
          current_level: 155,
          percent_full: 80,
          last_updated: new Date().toISOString(),
        },
        {
          id: "3",
          name: "Papanasam Dam / பாபநாசம் அணை",
          capacity: 218,
          current_level: 163,
          percent_full: 75,
          last_updated: new Date().toISOString(),
        },
      ]);

      setPrices([
        {
          id: "1",
          crop_name: "Tomatoes / தக்காளி",
          category: "காய்கறிகள் / Vegetables",
          price_per_kg: 35,
          unit: "kg",
          farmer_name: "முருகன்",
          location: "கோயம்புத்தூர் / Coimbatore",
          updated_at: new Date().toISOString(),
        },
        {
          id: "2",
          crop_name: "Onions / வெங்காயம்",
          category: "காய்கறிகள் / Vegetables",
          price_per_kg: 42,
          unit: "kg",
          farmer_name: "சுரேஷ்",
          location: "திண்டுக்கல் / Dindigul",
          updated_at: new Date().toISOString(),
        },
        {
          id: "3",
          crop_name: "Banana / வாழைப்பழம்",
          category: "பழங்கள் / Fruits",
          price_per_kg: 28,
          unit: "kg",
          farmer_name: "கார்த்திக்",
          location: "திருச்சி / Trichy",
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
              <span className="font-tamil">விவசாய சந்தை</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow-lg">
              Tamil Nadu Farmers Market
            </h2>
            <p className="text-xl md:text-2xl mb-4 drop-shadow-md font-tamil">
              தமிழ்நாடு விவசாயிகளுக்கான நேரடி சந்தை விலைகள்
            </p>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              Real-time crop prices and dam water levels across Tamil Nadu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" onClick={() => navigate("/signup")}>
                <span className="font-tamil">விவசாயியாக சேரவும்</span> / Join as Farmer
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" onClick={() => navigate("/prices")}>
                <span className="font-tamil">விலைகள் பார்க்க</span> / View Prices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground font-tamil">ஏன் விவசாய சந்தை?</h2>
          <p className="text-center text-muted-foreground mb-12">Why Vivasaya Santhai?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground font-tamil">நேரடி சந்தை விலைகள்</h3>
              <h4 className="text-lg font-medium mb-3 text-foreground">Live Market Prices</h4>
              <p className="text-muted-foreground">
                Tamil Nadu farmers' direct prices. No middlemen, fair rates for your crops.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Droplet className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground font-tamil">நீர் வளங்கள்</h3>
              <h4 className="text-lg font-medium mb-3 text-foreground">Dam Water Levels</h4>
              <p className="text-muted-foreground">
                Track Tamil Nadu dam levels daily. Plan irrigation based on water availability.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground font-tamil">உதவி சேவை</h3>
              <h4 className="text-lg font-medium mb-3 text-foreground">Tamil Assistant</h4>
              <p className="text-muted-foreground">
                Get farming help in Tamil and English. Ask about prices, water, and tips.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservoir Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground font-tamil">இன்றைய அணை நீர் நிலை</h2>
              <p className="text-muted-foreground mt-1">Today's Dam Water Levels</p>
            </div>
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
            <div>
              <h2 className="text-3xl font-bold text-foreground font-tamil">இன்றைய விலைகள்</h2>
              <p className="text-muted-foreground mt-1">Direct from Tamil Nadu Farmers - Today's Prices</p>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-tamil">நீங்கள் விவசாயியா?</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Are you a Tamil Nadu farmer?</h3>
          <p className="text-xl mb-2 opacity-90 font-tamil">
            உங்கள் பயிர்களை பட்டியலிடவும், வாங்குபவர்களை நேரடியாக சென்றடையவும்!
          </p>
          <p className="text-lg mb-8 opacity-90">
            Sign up today to list your crops and reach buyers directly!
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate("/signup")}>
            <span className="font-tamil">கணக்கு துவங்க</span> / Create Farmer Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
