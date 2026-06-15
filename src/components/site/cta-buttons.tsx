import { Phone, MessageCircle } from "lucide-react";
import { waLink, telLink, brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "whatsapp" | "phone" | "outline";
  label?: string;
  event?: "whatsapp_click" | "call_click" | "cta_click";
  fullWidth?: boolean;
}

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export function WhatsAppButton({ className, size = "md", label = "Chamar no WhatsApp", event = "whatsapp_click", fullWidth }: Omit<Props, "variant">) {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener"
      data-event={event}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground shadow-card transition hover:brightness-110 hover:scale-[1.02] active:scale-100",
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </a>
  );
}

export function CallButton({ className, size = "md", label = `Ligar ${brand.phone}`, fullWidth }: Omit<Props, "variant" | "event">) {
  return (
    <a
      href={telLink}
      data-event="call_click"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary bg-secondary font-semibold text-secondary-foreground transition hover:bg-foreground hover:scale-[1.02]",
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
    >
      <Phone className="h-5 w-5" />
      {label}
    </a>
  );
}
