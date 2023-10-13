import {
  BaggageClaim,
  Building2,
  HeartHandshake,
  MailQuestion,
  Palette,
  PieChart,
  Puzzle,
  Save,
  Slack,
  Wallet,
  Icon,
  Copy,
} from "lucide-react";
import { LucideIconName } from "./types/LucideIconName";

export const LucideIcons: Record<LucideIconName, Icon> = {
  "baggage-claim": BaggageClaim,
  "building-2": Building2,
  "heart-handshake": HeartHandshake,
  palette: Palette,
  slack: Slack,
  save: Save,
  "mail-question": MailQuestion,
  "pie-chart": PieChart,
  puzzle: Puzzle,
  wallet: Wallet,
  copy: Copy,
};
