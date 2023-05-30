import {
  BaggageClaim,
  HeartHandshake,
  Palette,
  Slack,
  Icon,
} from "lucide-react";
import { LucideIconName } from "./types/LucideIconName";

export const LucideIcons: Record<LucideIconName, Icon> = {
  "baggage-claim": BaggageClaim,
  "heart-handshake": HeartHandshake,
  palette: Palette,
  slack: Slack,
};
