import { useState } from "react";
import { Menu, X, Clock, MoreVertical, Sparkles, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DarkModeToggle } from "./DarkModeToggle";

interface HistoryItem {
  id: string;
  timestamp: string;
  preview: string;
  category: string;
}

const mockHistory: HistoryItem[] = [
  { id: "1", timestamp: "2 hours ago", preview: "Marketing strategy presentation...", category: "Today" },
  { id: "2", timestamp: "5 hours ago", preview: "Q4 financial results...", category: "Today" },
  { id: "3", timestamp: "Yesterday at 3:20 PM", preview: "Product launch deck...", category: "Yesterday" },
  { id: "4", timestamp: "3 days ago", preview: "Team onboarding slides...", category: "3 days ago" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const categories = ["Today", "Yesterday", "3 days ago", "7 days ago", "Last 30 days"];

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden glass-panel neon-glow"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen glass-panel border-r border-white/10 transition-all duration-300 z-40",
          "flex flex-col",
          isOpen ? "w-72 translate-x-0" : "w-0 -translate-x-full lg:w-16 lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-neon-blue-dark flex items-center justify-center neon-glow">
              <Sparkles className="w-6 h-6 text-background" />
            </div>
            {isOpen && (
              <span className="text-xl font-bold text-gradient">SlideGen AI</span>
            )}
          </div>
        </div>

        {/* History Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {isOpen ? (
            categories.map((category) => (
              <div key={category} className="space-y-2">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
                  {category}
                </h3>
                {mockHistory
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <button
                      key={item.id}
                      className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground/80 truncate group-hover:text-foreground">
                            {item.preview}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.timestamp}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </button>
                  ))}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center gap-4 pt-4">
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-white/10 space-y-2">
          {isOpen ? (
            <>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Settings className="w-5 h-5" />
                Settings
              </Button>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-all">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-neon-blue-dark flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Alex</p>
                  <p className="text-xs text-muted-foreground">alex@example.com</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-neon-blue-dark flex items-center justify-center cursor-pointer">
                <User className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
