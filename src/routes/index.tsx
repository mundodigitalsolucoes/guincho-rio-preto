import { createFileRoute } from "@tanstack/react-router";
import {
  Clock, Shield, MapPin, CreditCard, Bike, Car, Truck, AlertTriangle,
  Battery, Wrench, ChevronDown, Star, Phone, MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/site/header";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { WhatsAppButton, CallButton } from "@/components/site/cta-buttons";
import { brand, images, telLink, waLink } from "@/lib/brand";
import { cn } from "@/lib/utils";

const TITLE = "Guincho Rio Preto 24 Horas | Guincho para Carro e Moto em São José do Rio Preto";
const DESC = "Precisa de guincho em São José do Rio Preto? Atendimento 24 horas para carro e moto. Chame o Guincho Rio Preto pelo WhatsApp.";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://guincho-rio-preto/#business",
  name: "Guincho Rio Preto",
  image: images.logo,
  telephone: "+5517996238858",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São José do Rio Preto",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "São José do Rio Preto e região",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  description: DESC,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "guincho rio preto, guincho 24 horas, guincho são josé do rio preto, guincho para moto, guincho para carro, socorro automotivo, remoção de veículos" },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.logo },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: images.logo },
      { name: "theme-color", content: "#ee5a1f" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
  component: Page,
});

const trust = [
  { icon: Clock, title: "Atendimento 24h", desc: "Todos os dias, dia e noite." },
  { icon: Car, title: "Carro e moto", desc: "Estrutura completa para qualquer veículo." },
  { icon: Shield, title: "Transporte seguro", desc: "Cuidado total com seu veículo." },
  { icon: MapPin, title: "Rio Preto e região", desc: "Resposta rápida na sua localização." },
  { icon: CreditCard, title: "Pagamento facilitado", desc: "Pix, cartão e dinheiro." },
];

const services = [
  { icon: Car, title: "Guincho para carro", desc: "Remoção segura para qualquer modelo de carro." },
  { icon: Bike, title: "Guincho para moto", desc: "Transporte especializado para motos e scooters." },
  { icon: AlertTriangle, title: "Socorro 24 horas", desc: "Pane, acidente ou emergência a qualquer hora." },
  { icon: Wrench, title: "Remoção de veículos", desc: "Remoção rápida e organizada em qualquer local." },
];

const whenCall = [
  { icon: Wrench, title: "Pane mecânica", desc: "Carro parou no meio do caminho? A gente busca." },
  { icon: AlertTriangle, title: "Acidente", desc: "Remoção rápida e segura após colisão." },
  { icon: Car, title: "Pneu furado", desc: "Sem estepe ou sem condições? Acione o guincho." },
  { icon: Battery, title: "Bateria descarregada", desc: "Veículo não liga? Levamos até a oficina." },
  { icon: Bike, title: "Moto quebrada", desc: "Transporte com segurança e cuidado." },
  { icon: Truck, title: "Transporte de veículo", desc: "Mudança ou entrega de veículo na cidade ou estrada." },
];

const reviews = [
  { name: "Marcelo S.", text: "Chegou rápido e resolveu meu problema com muita atenção. Recomendo demais." },
  { name: "Patrícia A.", text: "Serviço seguro, preço justo e atendimento profissional. Salvaram meu dia." },
  { name: "Rodrigo L.", text: "Usei para transportar minha moto e recomendo. Cuidado total no transporte." },
  { name: "Camila R.", text: "Atendimento de madrugada, super educados. Em 20 minutos estavam aqui." },
  { name: "João P.", text: "Plataforma novinha, carro chegou intacto na oficina. Excelente serviço." },
  { name: "Ana C.", text: "Preço honesto e muita agilidade. Já é meu guincho de confiança em Rio Preto." },
];

const faqs = [
  { q: "O Guincho Rio Preto atende 24 horas?", a: "Sim. Atendemos 24 horas, todos os dias, inclusive feriados, em São José do Rio Preto e região." },
  { q: "Vocês guincham motos?", a: "Sim. Temos estrutura específica para transporte de motos com total segurança, de scooter a esportiva." },
  { q: "Atendem quais regiões?", a: "São José do Rio Preto e cidades da região. Também fazemos transporte intermunicipal sob consulta." },
  { q: "O atendimento é feito pelo WhatsApp?", a: "Sim. O canal mais rápido é o WhatsApp 17 99623-8858. Também atendemos por ligação." },
  { q: "Vocês atendem em rodovias?", a: "Sim. Atendemos rodovias da região com agilidade e segurança, 24h por dia." },
  { q: "Quanto tempo demora para chegar?", a: "Na cidade de Rio Preto, o tempo médio de chegada é entre 15 e 30 minutos, dependendo da localização." },
];

function Page() {
  return (
    <>
      <Header />
      <main id="inicio" className="pt-[72px]">
        <section className="relative overflow-hidden bg-gradient-hero text-white">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="animate-speed-line absolute h-[2px] rounded-full bg-white/70" style={{ top: `${10 + i * 11}%`, width: `${30 + (i % 4) * 15}%`, right: 0, animationDelay: `${(i * 0.15).toFixed(2)}s` }} />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-secondary/70 to-transparent" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:py-20 lg:grid-cols-2 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-card">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
                SOS 24 Horas — Online agora
              </div>
              <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Guincho 24 Horas em <span className="text-secondary drop-shadow">São José do Rio Preto</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/95 sm:text-xl">
                Atendimento rápido para carros e motos com segurança, confiança e suporte imediato.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton size="lg" label="Chamar no WhatsApp agora" event="cta_click" />
                <CallButton size="lg" label="Ligar agora" />
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/90">
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Resposta em minutos</span>
                <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Transporte seguro</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Rio Preto e região</span>
              </div>
            </div>
            <div className="relative -mx-4 mt-2 min-h-[180px] overflow-visible sm:mx-0 sm:min-h-[260px] lg:min-h-0">
              <img
                src={images.truck}
                alt="Caminhão guincho Rio Preto transportando veículo"
                className="animate-truck-drive relative z-10 w-[125%] max-w-none translate-x-[-10%] drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)] sm:w-full sm:max-w-full sm:translate-x-0"
              />
              <div className="animate-road-dash absolute bottom-8 left-0 right-0 h-1 rounded-full opacity-80 sm:bottom-6" />
              <div aria-hidden className="absolute bottom-10 left-0 h-16 w-32 -translate-x-4 rounded-full bg-white/20 blur-2xl sm:bottom-8" />
              <div className="absolute -bottom-2 left-4 z-20 rotate-[-4deg] rounded-2xl bg-secondary px-4 py-3 shadow-brand sm:-left-2 sm:px-6 sm:py-4">
                <div className="font-display text-2xl font-black leading-none text-primary sm:text-3xl">SOS</div>
                <div className="font-display text-xs font-bold text-white sm:text-sm">24 HORAS</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-14">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {trust.map((t) => (
                <div key={t.title} className="rounded-2xl border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-brand">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><t.icon className="h-6 w-6" /></div>
                  <h3 className="font-display text-lg font-bold uppercase">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <SectionTitle eyebrow="Nossos serviços" title="Soluções completas em guincho" desc="Cada serviço com atendimento 24h via WhatsApp." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="group flex flex-col rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary hover:shadow-brand">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-card"><s.icon className="h-6 w-6" /></div>
                  <h3 className="font-display text-2xl font-bold uppercase">{s.title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{s.desc}</p>
                  <WhatsAppButton size="sm" label="Solicitar no WhatsApp" className="mt-5 self-start" event="cta_click" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <SectionTitle dark eyebrow="Emergência?" title="Quando chamar o Guincho Rio Preto?" desc="Se você está em qualquer uma dessas situações, é hora de acionar." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whenCall.map((w) => (
                <div key={w.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-primary hover:bg-white/10">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"><w.icon className="h-6 w-6" /></div>
                  <div className="min-w-0"><h3 className="font-display text-xl font-bold uppercase">{w.title}</h3><p className="mt-1 text-sm text-white/70">{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
            <div>
              <SectionTitle align="left" eyebrow="Confiança e segurança" title="Atendimento rápido com cuidado no transporte" desc="A Guincho Rio Preto atua com atendimento rápido, seguro e profissional em São José do Rio Preto e região, oferecendo suporte 24 horas para carros e motos." />
              <WhatsAppButton label="Falar com o guincho" event="cta_click" />
            </div>
            <img src={images.service} alt="Guincho Rio Preto atendendo veículo" className="rounded-3xl shadow-brand" />
          </div>
        </section>

        <section id="avaliacoes" className="bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <SectionTitle eyebrow="Avaliações" title="Quem chamou, recomenda" desc="Prova social para reforçar confiança antes do contato." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <article key={r.name} className="rounded-2xl border bg-card p-6 shadow-card">
                  <div className="mb-3 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <p className="text-muted-foreground">“{r.text}”</p><div className="mt-4 font-bold">{r.name}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <SectionTitle title="Guincho em São José do Rio Preto 24 Horas" />
            <p className="text-lg text-muted-foreground">Se você precisa de guincho em São José do Rio Preto, guincho 24 horas Rio Preto, guincho para moto, guincho para carro, socorro automotivo, guincho plataforma ou remoção de veículos, fale com o Guincho Rio Preto pelo WhatsApp.</p>
          </div>
        </section>

        <section id="faq" className="bg-muted/40 py-20">
          <div className="mx-auto max-w-3xl px-4">
            <SectionTitle eyebrow="Dúvidas frequentes" title="Perguntas e respostas" />
            <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-gradient-hero py-20 text-white">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-display text-5xl font-black uppercase leading-none sm:text-6xl">Precisa de guincho agora?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-white/95">Chame no WhatsApp e receba atendimento rápido em Rio Preto e região.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={waLink} target="_blank" rel="noopener" data-event="cta_click" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-secondary px-10 text-lg font-bold text-white shadow-brand transition hover:scale-105"><MessageCircle className="h-6 w-6" /> Chamar no WhatsApp</a>
              <a href={telLink} data-event="call_click" className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-white/80 px-10 text-lg font-bold text-white transition hover:bg-white hover:text-primary"><Phone className="h-6 w-6" /> {brand.phone}</a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

function SectionTitle({ eyebrow, title, desc, align = "center", dark = false }: { eyebrow?: string; title: string; desc?: string; align?: "center" | "left"; dark?: boolean }) {
  return (
    <div className={cn("mb-12", align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {eyebrow && <div className={cn("mb-3 text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-primary" : "text-primary")}>{eyebrow}</div>}
      <h2 className={cn("font-display text-4xl font-black uppercase leading-tight sm:text-5xl text-balance", dark ? "text-white" : "text-foreground")}>{title}</h2>
      {desc && <p className={cn("mt-4 text-lg", dark ? "text-white/80" : "text-muted-foreground")}>{desc}</p>}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-card">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-bold uppercase">
        <span>{q}</span>
        <ChevronDown className={cn("h-5 w-5 shrink-0 text-primary transition-transform", open && "rotate-180")} />
      </button>
      <div className={cn("grid transition-all", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}><div className="overflow-hidden"><p className="px-5 pb-5 text-muted-foreground">{a}</p></div></div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center"><img src={images.logo} alt="Guincho Rio Preto" className="h-16 w-auto max-w-[220px] object-contain" /></div>
          <p className="mt-3 text-sm text-white/70">SOS 24 Horas — atendimento rápido e seguro.</p>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold uppercase text-primary">Contato</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href={telLink} data-event="call_click" className="inline-flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> {brand.phone}</a></li>
            <li><a href={waLink} target="_blank" rel="noopener" data-event="whatsapp_click" className="inline-flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
            <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {brand.city}</li>
            <li className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Atendimento 24 horas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold uppercase text-primary">Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li><li><a href="#sobre" className="hover:text-primary">Sobre</a></li><li><a href="#avaliacoes" className="hover:text-primary">Avaliações</a></li><li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>
        <div><h4 className="font-display text-lg font-bold uppercase text-primary">Atendemos</h4><p className="mt-3 text-sm text-white/80">São José do Rio Preto e toda a região. Guincho para carro e moto, socorro automotivo e remoção 24h.</p></div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/60">
        <div>© {new Date().getFullYear()} Guincho Rio Preto — Todos os direitos reservados.</div>
        <div className="mt-2">
          Criado por <a href="https://mundodigitalsolucoes.com.br/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary transition hover:text-white">Mundo Digital Soluções</a>
        </div>
      </div>
    </footer>
  );
}
