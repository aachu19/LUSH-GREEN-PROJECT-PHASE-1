import { Card } from "@/components/ui/card";
import { Droplet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reservoirs = () => {
  const reservoirs = [
    { id: "1", name: "Mettur Dam / மேட்டூர் அணை", capacity: 2648, current: 2250, percent: 85, state: "Salem / சேலம்" },
    { id: "2", name: "Vaigai Dam / வைகை அணை", capacity: 194, current: 155, percent: 80, state: "Theni / தேனி" },
    { id: "3", name: "Papanasam Dam / பாபநாசம் அணை", capacity: 218, current: 163, percent: 75, state: "Tirunelveli / திருநெல்வேலி" },
    { id: "4", name: "Amaravathi Dam / அமராவதி அணை", capacity: 90, current: 72, percent: 80, state: "Tiruppur / திருப்பூர்" },
    { id: "5", name: "Sathanur Dam / சாத்தனூர் அணை", capacity: 241, current: 181, percent: 75, state: "Tiruvannamalai / திருவண்ணாமலை" },
    { id: "6", name: "Bhavanisagar Dam / பவானிசாகர் அணை", capacity: 1465, current: 1172, percent: 80, state: "Erode / ஈரோடு" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 font-tamil">அணை நீர் நிலைகள்</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Dam Water Levels</h2>
            <p className="text-muted-foreground">Current water storage across major Tamil Nadu dams</p>
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
            <h3 className="text-lg font-semibold text-foreground mb-2 font-tamil">நீர் சேமிப்பு குறிப்புகள்</h3>
            <h4 className="text-md font-medium text-foreground mb-3">Water Conservation Tips for Tamil Nadu</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• சொட்டு நீர் பாசனத்தைப் பயன்படுத்தவும் / Use drip irrigation to save water and improve yields</li>
              <li>• மண் ஈரப்பதத்தை தொடர்ந்து கண்காணிக்கவும் / Monitor soil moisture regularly</li>
              <li>• நீர் கிடைக்கும் தன்மையின் அடிப்படையில் பயிர் சுழற்சி திட்டமிடவும் / Plan crop rotation based on water availability</li>
              <li>• மழைக்காலத்தில் மழை நீரைச் சேகரிக்கவும் / Harvest rainwater during monsoon</li>
            </ul>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reservoirs;
