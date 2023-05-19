import {
  BaggageClaim,
  Fingerprint,
  HeartHandshake,
  Palette,
  Slack,
  Icon,
} from "lucide-react";
import { LucideIconName } from "./types/LucideIconName";

export const LucideIcons: Record<LucideIconName, Icon> = {
  "baggage-claim": BaggageClaim,
  fingerprint: Fingerprint,
  "heart-handshake": HeartHandshake,
  palette: Palette,
  slack: Slack,
};
