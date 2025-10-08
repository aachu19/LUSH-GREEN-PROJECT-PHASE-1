import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Prices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allPrices = [
    { id: "1", crop_name: "Tomatoes / தக்காளி", category: "காய்கறிகள் / Vegetables", price: 35, unit: "kg", farmer: "முருகன்", location: "கோயம்புத்தூர் / Coimbatore" },
    { id: "2", crop_name: "Onions / வெங்காயம்", category: "காய்கறிகள் / Vegetables", price: 42, unit: "kg", farmer: "சுரேஷ்", location: "திண்டுக்கல் / Dindigul" },
    { id: "3", crop_name: "Banana / வாழைப்பழம்", category: "பழங்கள் / Fruits", price: 28, unit: "kg", farmer: "கார்த்திக்", location: "திருச்சி / Trichy" },
    { id: "4", crop_name: "Rice / அரிசி", category: "தானியங்கள் / Grains", price: 3200, unit: "quintal", farmer: "ராஜன்", location: "தஞ்சாவூர் / Thanjavur" },
    { id: "5", crop_name: "Brinjal / கத்தரிக்காய்", category: "காய்கறிகள் / Vegetables", price: 32, unit: "kg", farmer: "குமார்", location: "சேலம் / Salem" },
    { id: "6", crop_name: "Mango / மாம்பழம்", category: "பழங்கள் / Fruits", price: 85, unit: "kg", farmer: "வெங்கடேஷ்", location: "கிருஷ்ணகிரி / Krishnagiri" },
  ];

  const filteredPrices = allPrices.filter(price =>
    price.crop_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    price.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 font-tamil">இன்றைய பயிர் விலைகள்</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Today's Crop Prices</h2>
            <p className="text-muted-foreground">Direct prices from Tamil Nadu farmers, updated daily</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for crops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Prices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrices.map((price) => (
              <Card key={price.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{price.crop_name}</h3>
                    <p className="text-sm text-muted-foreground">{price.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">₹{price.price}</div>
                    <div className="text-xs text-muted-foreground">per {price.unit}</div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{price.farmer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">📍 {price.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prices;
