import { useMemo } from "react";
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

const PHONE_MAIN = "+49 621 9999999";
const PHONE_EMERGENCY = "+49 162 0000000";
const WHATSAPP = "+49 162 0000000";
const EMAIL = "service@mannheim-ecu.de";

const services = [
  {
    icon: Cpu,
    title: "ECU Programming",
    desc:
      "Specialized ECU programming, optimization, and updates to boost performance and efficiency.",
  },
  {
    icon: Settings,
    title: "Control Unit Replacement",
    desc:
      "Professional replacement with original parts and correct programming.",
  },
  {
    icon: Filter,
    title: "DPF Regeneration",
    desc:
      "Forced regeneration, chemical cleaning, or deactivation for clogged DPFs.",
  },
  {
    icon: KeyRound,
    title: "Key Coding",
    desc:
      "Secure key coding and programming compatible with immobilizer systems.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc:
      "Custom tuning to increase power, torque, and overall efficiency.",
  },
  {
    icon: Activity,
    title: "Full Diagnostics",
    desc:
      "Latest diagnostic tools to detect and fix electronic and mechanical issues.",
  },
  {
    icon: Rocket,
    title: "Stage 1 Performance Software",
    desc:
      "Tailored Stage 1 remapping for more power and response while keeping reliability.",
  },
];

const faqs = [
  {
    q: "What is ECU programming and why is it important?",
    a: "ECU programming optimizes your truck's engine control software for better power, torque, and fuel efficiency while maintaining safety margins.",
  },
  {
    q: "Do you replace and program new control units?",
    a: "Yes. We source original ECUs and handle the complete programming and calibration process.",
  },
  {
    q: "Can you regenerate or clean DPFs?",
    a: "We provide forced regeneration, chemical cleaning, and if required, safe deactivation solutions where permitted.",
  },
  {
    q: "Do you offer 24/7 emergency support?",
    a: "Yes, we operate a round-the-clock emergency line for breakdowns and urgent issues in Mannheim and surrounding areas.",
  },
  {
    q: "Do your services include a guarantee?",
    a: "Yes, all work is backed by our workmanship warranty and best price guarantee.",
  },
];

export default function Index() {
  const telHref = useMemo(() => `tel:${PHONE_EMERGENCY.replace(/\s+/g, "")}`, []);
  const telMainHref = useMemo(() => `tel:${PHONE_MAIN.replace(/\s+/g, "")}`, []);
  const waHref = useMemo(
    () => `https://wa.me/${WHATSAPP.replace(/\s|\+/g, "")}`,
    []
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Simple client-side success feedback
    toast({
      title: "Request sent",
      description: `Thanks ${data.get("name") || "there"}, we will contact you shortly!`,
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
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#mobile" className="hover:text-primary transition-colors">Mobile Service</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href={telHref}>
              <Button className="gap-2">
                <Phone className="h-4 w-4" /> 24/7 {PHONE_EMERGENCY}
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Mercedes truck at night in Mannheim"
            className="w-full h-full object-cover opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/80 to-background" />
        </div>
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in">
              Advanced ECU Solutions for Mercedes Trucks
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Professional ECU programming, control unit replacement, DPF regeneration, key coding,
              and Stage 1 performance software for all Mercedes trucks in Mannheim.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={telHref}>
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" /> Emergency Support
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  <CalendarDays className="h-5 w-5" /> Book an Appointment
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our Expert Services</h2>
          <p className="mt-2 text-muted-foreground">Mercedes-Benz truck specialists in Mannheim.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card
                key={s.title}
                className="bg-card/70 border-border/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-14 md:py-20 bg-muted/10 border-t border-border/60">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold">What Clients Say</h2>
          <p className="mt-2 text-muted-foreground">Fast, reliable and specialized service.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[{
              img: avatar1, name: "Thomas K.", role: "Fleet Operator", text: "Emergency response was incredibly fast. Got our truck running within hours!"
            },{
              img: avatar2, name: "Sarah M.", role: "Logistics Manager", text: "DPF issue fixed same day. Transparent pricing and top communication."
            },{
              img: avatar3, name: "Jonas L.", role: "Owner-Driver", text: "Needed key coding on-site. Professional and quick – highly recommended."
            }].map((t) => (
              <Card key={t.name} className="bg-card/70 border-border/60">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={`${t.name} portrait`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">“{t.text}”</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold">About Mannheim ECU</h2>
            <p className="mt-4 text-muted-foreground">
              With over 20 years of experience, our team specializes in Mercedes-specific
              ECU software solutions. We operate with modern equipment, provide a best price
              guarantee, and offer 24/7 emergency support.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["20+ years experience","Mercedes-specific expertise","24/7 emergency support","Modern diagnostics & equipment","Best price guarantee"].map((pt) => (
                <li key={pt} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {pt}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <img src={teamImg} alt="Mannheim ECU team in workshop" className="w-full h-[320px] object-cover" loading="lazy" />
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-primary/10 border-y border-border/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Vehicle Breakdown? Call Us Now!</h2>
            <p className="text-muted-foreground">We’re available 24/7 for emergency assistance.</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold">24/7 Mobile Truck Breakdown Service</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            On-site support in Mannheim and surroundings: brake release, starting issues, key coding,
            ECU analysis, OBD diagnostics, electrical repairs, tire service, fuel and AdBlue problems.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Brake release",
              "Starting issues",
              "Key coding",
              "ECU analysis",
              "OBD diagnostics",
              "Electrical repairs",
              "Tire service",
              "Fuel problems",
              "AdBlue problems",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href={telHref}>
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-20 bg-muted/10 border-t border-border/60">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-6 max-w-3xl">
            {faqs.map((f, idx) => (
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
              <h2 className="font-display text-3xl md:text-4xl font-bold">Contact Us</h2>
              <p className="mt-2 text-muted-foreground">We’d love to help. Reach out or request an appointment.</p>
            </div>

            <Card className="bg-card/70 border-border/60">
              <CardContent className="p-6 space-y-4 text-sm">
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Mannheim, Germany</div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a href={telMainHref} className="hover:text-primary">{PHONE_MAIN}</a></div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a href={telHref} className="hover:text-primary">Emergency: {PHONE_EMERGENCY}</a></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a></div>
                <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> Mon–Sat: 08:00–18:00</div>
                <div className="flex items-center gap-4 pt-2">
                  <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
                  <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-card/70 border-border/60">
              <iframe
                title="Mannheim ECU Location Map"
                src="https://www.google.com/maps?q=Mannheim%2C+Germany&output=embed"
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
                    <label className="text-sm font-medium">Name</label>
                    <Input name="name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <Input name="phone" placeholder="e.g. +49 170 0000000" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" name="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Vehicle Info</label>
                  <Input name="vehicle" placeholder="Model, year, engine" />
                </div>
                <div>
                  <label className="text-sm font-medium">Service Type</label>
                  <Select name="service">
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea name="message" placeholder="Tell us more about your issue or request" rows={5} />
                </div>
                <div className="flex gap-3">
                  <Button type="submit" className="gap-2">
                    <CalendarDays className="h-4 w-4" /> Request Appointment
                  </Button>
                  <a href={waHref}>
                    <Button type="button" variant="secondary" className="gap-2">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
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
              Advanced ECU programming, diagnostics, and mobile truck service for Mercedes trucks in Mannheim.
            </p>
          </div>
          <div>
            <div className="font-medium">Quick Links</div>
            <ul className="mt-2 space-y-2 text-sm">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#mobile", label: "Mobile Service" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-primary">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-muted-foreground">
            <div>
              © {new Date().getFullYear()} Mannheim ECU. All rights reserved.
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
