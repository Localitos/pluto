import {
  BaggageClaim,
  Building2,
  HeartHandshake,
  Palette,
  PieChart,
  Puzzle,
  Save,
  Slack,
  Wallet,
  Icon,
} from "lucide-react";
import { LucideIconName } from "./types/LucideIconName";

export const LucideIcons: Record<LucideIconName, Icon> = {
  "baggage-claim": BaggageClaim,
  "building-2": Building2,
  "heart-handshake": HeartHandshake,
  palette: Palette,
  slack: Slack,
  save: Save,
  "pie-chart": PieChart,
  puzzle: Puzzle,
  wallet: Wallet,
};
