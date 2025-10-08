import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Droplets, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Mock login - will be replaced with actual API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Logged in successfully",
      });
      navigate("/dashboard");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/10 p-4">
      <Card className="w-full max-w-md p-8 shadow-xl">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Droplets className="h-12 w-12 text-accent mb-2" />
          <h1 className="text-2xl font-bold text-foreground">KrishiSandhai</h1>
          <p className="text-sm text-muted-foreground">कृषि संधाई</p>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Welcome Back</h2>
        <p className="text-center text-muted-foreground mb-6">Sign in to your farmer account</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email or Username</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-accent hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full h-12" variant="hero" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-6 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent hover:underline font-semibold">
            Sign up here
          </Link>
        </p>

        {/* Back to Home */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
            ← Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
