import {
  FilePlus2Icon,
  HeartHandshakeIcon,
  MailPlusIcon,
  PaletteIcon,
  PenLineIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react"

export type AddOn = { name: string; price: string; description: string; icon: LucideIcon }

export const addons: AddOn[] = [
  { name: "Extra page", price: "₹499", description: "Add another page to any website plan.", icon: FilePlus2Icon },
  { name: "Logo design", price: "₹1,499", description: "A clean, simple logo with 2 concepts and source files.", icon: PaletteIcon },
  { name: "Extra mailbox", price: "₹299/yr", description: "One more professional email address on your domain.", icon: MailPlusIcon },
  { name: "Content writing", price: "₹799/page", description: "We write clear, persuasive copy for your page.", icon: PenLineIcon },
  { name: "Monthly care plan", price: "₹999/mo", description: "Content updates, backups, uptime checks and priority support.", icon: HeartHandshakeIcon },
  { name: "Rush delivery", price: "₹1,999", description: "Get Business Pro delivered in 24 hours instead of 48.", icon: ZapIcon },
]
