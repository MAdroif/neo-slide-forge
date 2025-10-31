import { useState } from "react";
import { Loader2, User, LayoutTemplate, Volume2, Sparkles, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "sonner";

export const GenerationForm = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [script, setScript] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  
  // Hardcoded n8n webhook URL
  const WEBHOOK_URL = "https://your-n8n-instance.com/webhook/slides";

  const handleGenerate = async () => {
    if (!script.trim()) {
      toast.error("Please enter a script for your presentation");
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    toast.success("Slides generated successfully!");
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      {/* Main Script Input */}
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

      {/* Advanced Options */}
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
            {/* Creator Name */}
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

            {/* Template Selector */}
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

            {/* Voice Tone */}
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

      {/* Generate Button */}
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
