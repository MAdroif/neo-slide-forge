import { Sidebar } from "@/components/Sidebar";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { GenerationForm } from "@/components/GenerationForm";
import { FeatureCard } from "@/components/FeatureCard";
import { HistoryGrid } from "@/components/HistoryGrid";
import { Package, Layout, Calculator, Sparkles } from "lucide-react";

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
