import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface CropPrice {
  id: string;
  crop_name: string;
  category: string;
  price: number;
  unit: string;
  updated_at: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [myPrices, setMyPrices] = useState<CropPrice[]>([
    {
      id: "1",
      crop_name: "Tomatoes / தக்காளி",
      category: "காய்கறிகள் / Vegetables",
      price: 35,
      unit: "kg",
      updated_at: new Date().toISOString(),
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newPrice, setNewPrice] = useState({
    crop_name: "",
    category: "Vegetables",
    price: "",
    unit: "kg",
  });

  const handleAddPrice = () => {
    if (!newPrice.crop_name || !newPrice.price) {
      toast({
        title: "Missing information",
        description: "Please fill in crop name and price",
        variant: "destructive",
      });
      return;
    }

    const price: CropPrice = {
      id: Date.now().toString(),
      crop_name: newPrice.crop_name,
      category: newPrice.category,
      price: parseFloat(newPrice.price),
      unit: newPrice.unit,
      updated_at: new Date().toISOString(),
    };

    setMyPrices([...myPrices, price]);
    setNewPrice({ crop_name: "", category: "Vegetables", price: "", unit: "kg" });
    setShowAddForm(false);

    toast({
      title: "Price added!",
      description: "Your crop price has been published",
    });
  };

  const handleDelete = (id: string) => {
    setMyPrices(myPrices.filter((p) => p.id !== id));
    toast({
      title: "Price removed",
      description: "Crop price has been deleted",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 font-tamil">விவசாயி பலகை / Farmer Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your Tamil Nadu crop prices and reach buyers directly
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Active Listings</div>
              <div className="text-3xl font-bold text-foreground">{myPrices.length}</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Views This Week</div>
              <div className="text-3xl font-bold text-accent">234</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Inquiries</div>
              <div className="text-3xl font-bold text-accent">12</div>
            </Card>
          </div>

          {/* Add Price Button */}
          <div className="mb-6">
            <Button variant="hero" onClick={() => setShowAddForm(!showAddForm)}>
              <Plus className="h-5 w-5" />
              Add New Price
            </Button>
          </div>

          {/* Add Form */}
          {showAddForm && (
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Add Crop Price</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crop_name">Crop Name</Label>
                  <Input
                    id="crop_name"
                    placeholder="e.g., Tomatoes"
                    value={newPrice.crop_name}
                    onChange={(e) => setNewPrice({ ...newPrice, crop_name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    value={newPrice.category}
                    onChange={(e) => setNewPrice({ ...newPrice, category: e.target.value })}
                  >
                    <option value="காய்கறிகள் / Vegetables">காய்கறிகள் / Vegetables</option>
                    <option value="பழங்கள் / Fruits">பழங்கள் / Fruits</option>
                    <option value="தானியங்கள் / Grains">தானியங்கள் / Grains</option>
                    <option value="பருப்புகள் / Pulses">பருப்புகள் / Pulses</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="e.g., 45"
                    value={newPrice.price}
                    onChange={(e) => setNewPrice({ ...newPrice, price: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  <select
                    id="unit"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    value={newPrice.unit}
                    onChange={(e) => setNewPrice({ ...newPrice, unit: e.target.value })}
                  >
                    <option value="kg">Kilogram (kg)</option>
                    <option value="quintal">Quintal</option>
                    <option value="ton">Ton</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="hero" onClick={handleAddPrice}>
                  Add Price
                </Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </Card>
          )}

          {/* My Prices */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">My Crop Prices</h3>
            {myPrices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">You haven't added any prices yet</p>
                <Button variant="hero" onClick={() => setShowAddForm(true)}>
                  Add Your First Price
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {myPrices.map((price) => (
                  <div
                    key={price.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">{price.crop_name}</h4>
                      <p className="text-sm text-muted-foreground">{price.category}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Updated: {new Date(price.updated_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">₹{price.price}</div>
                        <div className="text-xs text-muted-foreground">per {price.unit}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(price.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
