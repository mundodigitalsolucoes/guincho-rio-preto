import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { brand, telLink, images } from "@/lib/brand";
import { WhatsAppButton } from "./cta-buttons";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-secondary/95 backdrop-blur shadow-card" : "bg-secondary",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex min-w-0 items-center">
  <img
    src={images.logo}
    alt="Guincho Rio Preto"
    className="h-14 w-auto max-w-[180px] object-contain"
  />
</a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/90 transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink}
            data-event="call_click"
            className="hidden items-center gap-2 text-sm font-semibold text-white md:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {brand.phone}
          </a>
          <WhatsAppButton size="sm" label="WhatsApp" className="hidden sm:inline-flex" />
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-secondary lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <WhatsAppButton fullWidth />
              <a href={telLink} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" /> {brand.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
