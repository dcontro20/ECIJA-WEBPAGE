import {
  Cpu,
  ShieldCheck,
  Lightbulb,
  Lock,
  Building2,
  Landmark,
  Scale,
  Users,
  Gavel,
  Rocket,
  Code2,
  Banknote,
  ShoppingBag,
  HeartPulse,
  Clapperboard,
  Leaf,
  Factory,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Cpu,
  ShieldCheck,
  Lightbulb,
  Lock,
  Building2,
  Landmark,
  Scale,
  Users,
  Gavel,
  Rocket,
  Code2,
  Banknote,
  ShoppingBag,
  HeartPulse,
  Clapperboard,
  Leaf,
  Factory,
};

export function PracticeIcon({
  name,
  className,
  strokeWidth = 1.25,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = icons[name] ?? Cpu;
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
