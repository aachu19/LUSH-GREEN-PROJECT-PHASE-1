import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Prices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allPrices = [
    { id: "1", crop_name: "Tomatoes", category: "Vegetables", price: 45, unit: "kg", farmer: "Ram Singh", location: "Ludhiana" },
    { id: "2", crop_name: "Potatoes", category: "Vegetables", price: 28, unit: "kg", farmer: "Priya Sharma", location: "Amritsar" },
    { id: "3", crop_name: "Mangoes", category: "Fruits", price: 120, unit: "kg", farmer: "Suresh Patel", location: "Jalandhar" },
    { id: "4", crop_name: "Onions", category: "Vegetables", price: 35, unit: "kg", farmer: "Amit Kumar", location: "Patiala" },
    { id: "5", crop_name: "Apples", category: "Fruits", price: 150, unit: "kg", farmer: "Rajesh Verma", location: "Shimla" },
    { id: "6", crop_name: "Wheat", category: "Grains", price: 2500, unit: "quintal", farmer: "Gurpreet Singh", location: "Bathinda" },
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Today's Crop Prices</h1>
            <p className="text-muted-foreground">Direct prices from farmers, updated daily</p>
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
