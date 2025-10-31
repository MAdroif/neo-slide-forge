import { Sidebar } from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "sonner";
import { 
  Package, Layout, Calculator, Sparkles, Moon, Sun, 
  Loader2, User, LayoutTemplate, Volume2, Settings,
  Download, Eye, Trash2, Clock, LucideIcon 
} from "lucide-react";

// Dark Mode Toggle Component
const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") !== "false";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("darkMode", String(newIsDark));
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="rounded-full hover:bg-primary/10 transition-all duration-300"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </Button>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => {
  return (
    <div className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:neon-glow group cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-neon-blue-dark/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

// Generation Form Component
const GenerationForm = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [script, setScript] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  
  const WEBHOOK_URL = "https://your-n8n-instance.com/webhook/slides";

  const handleGenerate = async () => {
    if (!script.trim()) {
      toast.error("Please enter a script for your presentation");
      return;
    }

    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    toast.success("Slides generated successfully!");
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="script" className="text-base font-semibold">
          Your Presentation Script
        </Label>
        <Textarea
          id="script"
          placeholder="Tell us about your presentation..."
          value={script}
          onChange={(e) => setScript(e.target.value)}
          className="min-h-[200px] glass-panel border-white/20 focus:border-primary focus:neon-glow resize-none text-base"
        />
      </div>

      <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
          >
            <Settings className="w-4 h-4" />
            Advanced Options
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="creator" className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Creator Name
              </Label>
              <Input
                id="creator"
                placeholder="Your name"
                className="glass-panel border-white/20 focus:border-primary focus:neon-glow"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="template" className="flex items-center gap-2">
                <LayoutTemplate className="w-4 h-4 text-primary" />
                Template
              </Label>
              <Select>
                <SelectTrigger className="glass-panel border-white/20 focus:border-primary focus:neon-glow">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone" className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-primary" />
                Voice Tone
              </Label>
              <Select>
                <SelectTrigger className="glass-panel border-white/20 focus:border-primary focus:neon-glow">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-neon-blue-dark hover:from-neon-blue-dark hover:to-primary neon-glow-strong transition-all duration-300 hover:scale-[1.02]"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating Slides...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Slides
          </>
        )}
      </Button>
    </div>
  );
};

// History Grid Component
const mockResults = [
  {
    id: "1",
    title: "Marketing Strategy Q4 2024",
    timestamp: "2 hours ago",
    thumbnail: "bg-gradient-to-br from-purple-500 to-pink-500",
    slideCount: 12,
  },
  {
    id: "2",
    title: "Product Launch Presentation",
    timestamp: "5 hours ago",
    thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-500",
    slideCount: 18,
  },
  {
    id: "3",
    title: "Team Onboarding 2024",
    timestamp: "Yesterday",
    thumbnail: "bg-gradient-to-br from-green-500 to-teal-500",
    slideCount: 8,
  },
];

const HistoryGrid = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Recent Generations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResults.map((item) => (
          <div
            key={item.id}
            className="glass-panel rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className={`h-48 ${item.thumbnail} relative`}>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="icon" variant="secondary" className="glass-panel">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="secondary" className="glass-panel">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs font-medium">
                {item.slideCount} slides
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.title}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.timestamp}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-destructive/20 hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      
      <main className="flex-1 ml-0 lg:ml-72 transition-all duration-300">
        {/* Header */}
        <header className="border-b border-white/10 glass-panel sticky top-0 z-30 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-neon-blue-dark flex items-center justify-center neon-glow animate-glow-pulse">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <h1 className="text-xl font-bold lg:hidden">SlideGen AI</h1>
            </div>
            <DarkModeToggle />
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12 space-y-12">
          {/* Welcome Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Welcome back <span className="text-gradient">Alex!</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where imagination meets AI-powered design to craft your slides today!
            </p>
          </div>

          {/* Generation Form */}
          <div className="max-w-4xl mx-auto glass-panel p-8 rounded-3xl neon-glow animate-fade-in">
            <GenerationForm />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <FeatureCard
              icon={Package}
              title="Samples or Suppliers"
              description="Access a vast library of pre-designed templates and supplier resources to kickstart your presentation"
            />
            <FeatureCard
              icon={Layout}
              title="Select Materials"
              description="Choose from hundreds of design elements, layouts, and visual assets to customize your slides"
            />
            <FeatureCard
              icon={Calculator}
              title="Calculations"
              description="Automatic slide optimization and smart suggestions powered by advanced AI algorithms"
            />
          </div>

          {/* History Grid */}
          <HistoryGrid />
        </div>
      </main>
    </div>
  );
};

export default Index;
