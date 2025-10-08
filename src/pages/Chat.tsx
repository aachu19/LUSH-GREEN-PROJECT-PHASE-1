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
      content: "Namaste! I'm your KrishiSandhai assistant. How can I help you today? You can ask me about crop prices, reservoir levels, or farming tips.",
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

      if (lowerInput.includes("price") || lowerInput.includes("crop") || lowerInput.includes("rate")) {
        response = "You can view today's crop prices on the Prices page. Prices are updated daily by farmers directly. For specific crops, you can use the search feature on that page.";
      } else if (lowerInput.includes("reservoir") || lowerInput.includes("water") || lowerInput.includes("dam")) {
        response = "Check the Reservoirs page for current water levels. We update reservoir data daily. Good water availability helps with irrigation planning!";
      } else if (lowerInput.includes("upload") || lowerInput.includes("update") || lowerInput.includes("sell")) {
        response = "To upload or update crop prices, please sign in to your farmer account and go to the Dashboard. From there, you can add your crops and set prices.";
      } else if (lowerInput.includes("sign") || lowerInput.includes("account") || lowerInput.includes("register")) {
        response = "You can create a farmer account by clicking 'Sign Up' in the navigation. It's free and takes just a few minutes! You'll need your basic details and farm information.";
      } else {
        response = "I'm here to help! You can ask me about:\n• Current crop prices\n• Reservoir water levels\n• How to update your prices\n• Creating a farmer account\n• General farming tips";
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Chat Assistant</h1>
            <p className="text-muted-foreground">
              Ask me anything about prices, water resources, or farming advice
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
