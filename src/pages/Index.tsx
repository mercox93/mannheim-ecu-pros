import { useEffect, useMemo, useState } from "react";
import heroImg from "@/assets/hero-truck.jpg";
import teamImg from "@/assets/team.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

import {
  Phone,
  CalendarDays,
  Cpu,
  Settings,
  Filter,
  KeyRound,
  Gauge,
  Activity,
  Rocket,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { translations, type Lang } from "@/i18n";

const PHONE_MAIN = "+49 621 9999999";
const PHONE_EMERGENCY = "+49 162 0000000";
const WHATSAPP = "+49 162 0000000";
const EMAIL = "service@mannheim-ecu.de";

const serviceIcons = [Cpu, Settings, Filter, KeyRound, Gauge, Activity, Rocket];

export default function Index() {
  // Language state with persistence
  const initialLang: Lang = (localStorage.getItem("lang") as Lang) || "de";
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    // SEO: dynamic title & description + OG tags
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t.meta.description);
  }, [lang, t.meta.description, t.meta.title]);

  const telHref = useMemo(() => `tel:${PHONE_EMERGENCY.replace(/\s+/g, "")}`, []);
  const telMainHref = useMemo(() => `tel:${PHONE_MAIN.replace(/\s+/g, "")}`, []);
  const waHref = useMemo(() => `https://wa.me/${WHATSAPP.replace(/\s|\+/g, "")}`, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    toast({
      title: t.toast.title,
      description: t.toast.desc(String(data.get("name") || "")),
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-xl font-extrabold font-display tracking-tight">
              Mannheim <span className="text-primary">ECU</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">{t.nav.reviews}</a>
            <a href="#mobile" className="hover:text-primary transition-colors">{t.nav.mobile}</a>
            <a href="#faq" className="hover:text-primary transition-colors">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <a href={telHref}>
                <Button className="gap-2">
                  <Phone className="h-4 w-4" /> 24/7 {PHONE_EMERGENCY}
                </Button>
              </a>
            </div>
            {/* Language switcher */}
            <Select value={lang} onValueChange={(v) => setLang(v as Lang)}>
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="Sprache" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="tr">Türkçe</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt={t.hero.alt}
            className="w-full h-full object-cover opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/80 to-background" />
        </div>
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={telHref}>
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" /> {t.hero.ctaEmergency}
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  <CalendarDays className="h-5 w-5" /> {t.hero.ctaBook}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t.nav.services}</h2>
          <p className="mt-2 text-muted-foreground">Mercedes-Benz • Mannheim</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((s: any, idx: number) => {
              const Icon = serviceIcons[idx];
              return (
                <Card
                  key={s.title}
                  className="bg-card/70 border-border/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10 text-primary">
                        {Icon ? <Icon className="h-6 w-6" /> : <Cpu className="h-6 w-6" />}
                      </div>
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-14 md:py-20 bg-muted/10 border-t border-border/60">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t.testimonials.title}</h2>
          <p className="mt-2 text-muted-foreground">{t.testimonials.subtitle}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((tt: any, i: number) => (
              <Card key={i} className="bg-card/70 border-border/60">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <img src={[avatar1, avatar2, avatar3][i]} alt={tt.alt} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <div className="font-medium">{tt.name}</div>
                      <div className="text-xs text-muted-foreground">{tt.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">“{tt.text}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 md:py-20">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">{t.about.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.about.p1}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {t.about.bullets.map((pt: string) => (
                <li key={pt} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {pt}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <img src={teamImg} alt={t.about.teamAlt} className="w-full h-[320px] object-cover" loading="lazy" />
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-primary/10 border-y border-border/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">{t.emergency.title}</h2>
            <p className="text-muted-foreground">{t.emergency.subtitle}</p>
          </div>
          <a href={telHref}>
            <Button size="lg" className="gap-2">
              <Phone className="h-5 w-5" /> {PHONE_EMERGENCY}
            </Button>
          </a>
        </div>
      </section>

      {/* Mobile Truck Service */}
      <section id="mobile" className="py-14 md:py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t.mobile.title}</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl">{t.mobile.subtitle}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.mobile.list.map((item: string) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href={telHref}>
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" /> {t.mobile.callNow}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-20 bg-muted/10 border-t border-border/60">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="mt-6 max-w-3xl">
            {t.faq.items.map((f: any, idx: number) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          {/* Details + Map */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">{t.contact.title}</h2>
              <p className="mt-2 text-muted-foreground">{t.contact.subtitle}</p>
            </div>

            <Card className="bg-card/70 border-border/60">
              <CardContent className="p-6 space-y-4 text-sm">
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> {t.contact.address}</div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a href={telMainHref} className="hover:text-primary">{PHONE_MAIN}</a></div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a href={telHref} className="hover:text-primary">{t.contact.emergencyLabel} {PHONE_EMERGENCY}</a></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a></div>
                <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> {t.contact.hours}</div>
                <div className="flex items-center gap-4 pt-2">
                  <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
                  <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-card/70 border-border/60">
              <iframe
                title={t.contact.mapTitle}
                src={t.contact.mapSrc}
                className="w-full h-[280px]"
                loading="lazy"
              />
            </Card>
          </div>

          {/* Form */}
          <Card className="bg-card/70 border-border/60">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">{t.contact.form.name}</label>
                    <Input name="name" placeholder={t.contact.form.namePh} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">{t.contact.form.phone}</label>
                    <Input name="phone" placeholder={t.contact.form.phonePh} required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">{t.contact.form.email}</label>
                  <Input type="email" name="email" placeholder={t.contact.form.emailPh} required />
                </div>
                <div>
                  <label className="text-sm font-medium">{t.contact.form.vehicle}</label>
                  <Input name="vehicle" placeholder={t.contact.form.vehiclePh} />
                </div>
                <div>
                  <label className="text-sm font-medium">{t.contact.form.service}</label>
                  <Select name="service">
                    <SelectTrigger>
                      <SelectValue placeholder={t.contact.form.servicePh} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.services.map((s: any) => (
                        <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">{t.contact.form.message}</label>
                  <Textarea name="message" placeholder={t.contact.form.messagePh} rows={5} />
                </div>
                <div className="flex gap-3">
                  <Button type="submit" className="gap-2">
                    <CalendarDays className="h-4 w-4" /> {t.contact.form.submit}
                  </Button>
                  <a href={waHref}>
                    <Button type="button" variant="secondary" className="gap-2">
                      <MessageCircle className="h-4 w-4" /> {t.contact.form.whatsapp}
                    </Button>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-10">
        <div className="container grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-display font-bold">Mannheim <span className="text-primary">ECU</span></div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <div className="font-medium">{t.footer.quick}</div>
            <ul className="mt-2 space-y-2 text-sm">
              {[
                { href: "#services", label: t.footer.links.services },
                { href: "#about", label: t.footer.links.about },
                { href: "#testimonials", label: t.footer.links.reviews },
                { href: "#mobile", label: t.footer.links.mobile },
                { href: "#faq", label: t.footer.links.faq },
                { href: "#contact", label: t.footer.links.contact },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-muted-foreground">
            <div>
              {t.footer.copyright(new Date().getFullYear())}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3">
        <a href={telHref} aria-label="Emergency Call" className="shadow-lg">
          <Button className="rounded-full h-12 w-12 p-0">
            <Phone className="h-5 w-5" />
          </Button>
        </a>
        <a href={waHref} aria-label="WhatsApp" className="shadow-lg">
          <Button className="rounded-full h-12 w-12 p-0" variant="secondary">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </a>
      </div>
    </div>
  );
}
