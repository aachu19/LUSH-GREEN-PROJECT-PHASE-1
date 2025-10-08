import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "வணக்கம்! Vanakkam! I'm your Tamil Nadu farming assistant. நான் உங்களுக்கு எப்படி உதவ முடியும்? How can I help you today? You can ask me about crop prices (விலைகள்), dam water levels (அணை நீர் நிலை), or farming tips in Tamil or English.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Mock AI response - will be replaced with actual API call
    setTimeout(() => {
      let response = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes("price") || lowerInput.includes("crop") || lowerInput.includes("rate") || lowerInput.includes("விலை")) {
        response = "விலைகள் பக்கத்தில் இன்றைய பயிர் விலைகளைப் பார்க்கலாம். Prices page shows today's Tamil Nadu crop prices updated by farmers directly. You can search for specific crops like tomato (தக்காளி), onion (வெங்காயம்), or banana (வாழைப்பழம்).";
      } else if (lowerInput.includes("reservoir") || lowerInput.includes("water") || lowerInput.includes("dam") || lowerInput.includes("அணை") || lowerInput.includes("நீர்")) {
        response = "அணைகள் பக்கத்தில் தற்போதைய நீர் நிலையைப் பார்க்கவும். Check Dams page for current water levels in Tamil Nadu dams like Mettur (மேட்டூர்), Vaigai (வைகை), and Papanasam (பாபநாசம்). Updated daily for irrigation planning!";
      } else if (lowerInput.includes("upload") || lowerInput.includes("update") || lowerInput.includes("sell")) {
        response = "உங்கள் பயிர் விலைகளைப் பதிவேற்ற, உள்நுழைந்து Dashboard-க்குச் செல்லவும். Sign in to your farmer account and go to Dashboard to add your crops and set prices for Tamil Nadu buyers.";
      } else if (lowerInput.includes("sign") || lowerInput.includes("account") || lowerInput.includes("register") || lowerInput.includes("கணக்கு")) {
        response = "விவசாயி கணக்கு உருவாக்க 'Sign Up' என்பதைக் கிளிக் செய்யவும். Create a Tamil Nadu farmer account - it's free! You need basic details, farm name, and your village/town location.";
      } else {
        response = "நான் உங்களுக்கு உதவ இங்கே இருக்கிறேன்! I'm here to help! You can ask about:\n\n• பயிர் விலைகள் / Current crop prices (தக்காளி, வெங்காயம், வாழை)\n• அணை நீர் நிலைகள் / Dam water levels (மேட்டூர், வைகை)\n• விலை பதிவேற்றம் / Price updates\n• கணக்கு உருவாக்குதல் / Account creation\n• விவசாய ஆலோசனைகள் / Farming tips for Tamil Nadu";
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2 font-tamil">உதவி சேவை / Chat Assistant</h1>
            <p className="text-muted-foreground">
              Ask in Tamil or English about prices, dam levels, or farming advice for Tamil Nadu
            </p>
          </div>

          <Card className="flex flex-col h-[600px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === "user"
                        ? "bg-accent text-white"
                        : "bg-primary text-white"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <Bot className="h-5 w-5" />
                    )}
                  </div>
                  <div
                    className={`flex-1 max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-accent text-white ml-auto"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p
                      className={`text-xs mt-2 ${
                        message.role === "user" ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="flex-1 max-w-[80%] p-4 rounded-lg bg-muted">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 h-12"
                  disabled={loading}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  size="lg"
                  variant="hero"
                  className="px-6"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chat;
