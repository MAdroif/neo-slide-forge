import { Download, Eye, Trash2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HistoryItemData {
  id: string;
  title: string;
  timestamp: string;
  thumbnail: string;
  slideCount: number;
}

const mockResults: HistoryItemData[] = [
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

export const HistoryGrid = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Recent Generations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResults.map((item) => (
          <div
            key={item.id}
            className="glass-panel rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 hover:scale-[1.02] group"
          >
            {/* Thumbnail */}
            <div className={`h-48 ${item.thumbnail} relative`}>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="glass-panel"
                >
                  <Eye className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="glass-panel"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full text-xs font-medium">
                {item.slideCount} slides
              </div>
            </div>

            {/* Content */}
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
