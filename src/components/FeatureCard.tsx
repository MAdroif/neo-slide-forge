import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
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
