import { Card } from "@/components/ui/card";
import { Droplet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reservoirs = () => {
  const reservoirs = [
    { id: "1", name: "Bhakra Dam", capacity: 9340, current: 7850, percent: 84, state: "Punjab" },
    { id: "2", name: "Indira Sagar", capacity: 12220, current: 9800, percent: 80, state: "Madhya Pradesh" },
    { id: "3", name: "Sardar Sarovar", capacity: 9500, current: 7125, percent: 75, state: "Gujarat" },
    { id: "4", name: "Hirakud Dam", capacity: 8136, current: 6509, percent: 80, state: "Odisha" },
    { id: "5", name: "Nagarjuna Sagar", capacity: 11472, current: 8604, percent: 75, state: "Telangana" },
    { id: "6", name: "Krishnaraja Sagar", capacity: 1368, current: 1094, percent: 80, state: "Karnataka" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Reservoir Water Levels</h1>
            <p className="text-muted-foreground">Current water storage across major reservoirs</p>
          </div>

          {/* Reservoirs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservoirs.map((reservoir) => (
              <Card key={reservoir.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{reservoir.name}</h3>
                    <p className="text-sm text-muted-foreground">{reservoir.state}</p>
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
                    <span className="font-semibold text-foreground">{reservoir.current} MCM</span>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Fill Status:</span>
                      <span className="font-bold text-accent">{reservoir.percent}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-accent to-primary h-full rounded-full transition-all duration-500"
                        style={{ width: `${reservoir.percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <Card className="mt-8 p-6 bg-accent/5">
            <h3 className="text-lg font-semibold text-foreground mb-3">Water Conservation Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use drip irrigation to save water and improve crop yields</li>
              <li>• Monitor soil moisture regularly to avoid over-watering</li>
              <li>• Plan crop rotation based on water availability</li>
              <li>• Harvest rainwater during monsoon season</li>
            </ul>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reservoirs;
