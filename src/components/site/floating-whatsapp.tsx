import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/brand";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener"
      data-event="whatsapp_click"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 animate-pulse-ring items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-brand transition hover:scale-110 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
