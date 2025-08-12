export type Lang = "de" | "en" | "tr";

export const translations: Record<Lang, any> = {
  de: {
    meta: {
      title: "Mannheim ECU | Fortgeschrittene ECU-Lösungen für Mercedes-Lkw",
      description:
        "ECU-Programmierung, Diagnostik, DPF-Regeneration, Schlüsselcodierung & Stage-1-Software für Mercedes-Lkw in Mannheim. 24/7 Notdienst.",
    },
    nav: {
      services: "Leistungen",
      about: "Über uns",
      reviews: "Bewertungen",
      mobile: "Mobiler Service",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      title: "Fortgeschrittene ECU-Lösungen für Mercedes-Lkw",
      subtitle:
        "Professionelle ECU-Programmierung, Steuergerätetausch, DPF-Regeneration, Schlüsselcodierung und Stage‑1‑Performance-Software für alle Mercedes-Lkw in Mannheim.",
      ctaEmergency: "Notfall-Hilfe",
      ctaBook: "Termin buchen",
      alt: "Mercedes-Lkw bei Nacht in Mannheim",
    },
    services: [
      {
        title: "ECU-Programmierung",
        desc:
          "Spezialisierte ECU-Programmierung, Optimierung und Updates für mehr Leistung und Effizienz.",
      },
      { title: "Steuergerätetausch", desc: "Fachgerechter Tausch mit Originalteilen und korrekter Programmierung." },
      { title: "DPF-Regeneration", desc: "Zwangsregeneration, chemische Reinigung oder Deaktivierung bei verstopften DPFs." },
      { title: "Schlüsselcodierung", desc: "Sichere Codierung und Programmierung von Schlüsseln, kompatibel mit Wegfahrsperren." },
      { title: "Leistungsoptimierung", desc: "Individuelles Tuning für mehr Leistung, Drehmoment und Effizienz." },
      { title: "Vollständige Diagnose", desc: "Modernste Diagnosegeräte für elektronische und mechanische Probleme." },
      { title: "Stage‑1‑Performance-Software", desc: "Individuelles Stage‑1‑Remapping für mehr Leistung und Ansprechverhalten bei voller Zuverlässigkeit." },
    ],
    testimonials: {
      title: "Das sagen unsere Kunden",
      subtitle: "Schnell, zuverlässig und spezialisiert.",
      items: [
        {
          name: "Thomas K.",
          role: "Fuhrparkleiter",
          text: "Der Notfalleinsatz war extrem schnell. Unser Lkw lief nach wenigen Stunden wieder!",
          alt: "Porträt von Thomas K.",
        },
        {
          name: "Sarah M.",
          role: "Logistikmanagerin",
          text: "DPF-Problem am selben Tag behoben. Transparente Preise und top Kommunikation.",
          alt: "Porträt von Sarah M.",
        },
        {
          name: "Jonas L.",
          role: "Selbstfahrer",
          text: "Schlüsselcodierung vor Ort. Professionell und schnell – sehr zu empfehlen.",
          alt: "Porträt von Jonas L.",
        },
      ],
    },
    about: {
      title: "Über Mannheim ECU",
      p1:
        "Mit über 20 Jahren Erfahrung sind wir Experten für Mercedes-spezifische ECU-Softwarelösungen. Wir arbeiten mit modernster Ausrüstung, bieten eine Bestpreis-Garantie und 24/7-Notdienst.",
      bullets: [
        "20+ Jahre Erfahrung",
        "Mercedes-spezifische Expertise",
        "24/7 Notdienst",
        "Moderne Diagnose & Ausrüstung",
        "Bestpreis-Garantie",
      ],
      teamAlt: "Team von Mannheim ECU in der Werkstatt",
    },
    emergency: {
      title: "Fahrzeugpanne? Rufen Sie jetzt an!",
      subtitle: "Wir sind 24/7 für Sie da.",
    },
    mobile: {
      title: "24/7 Mobiler Lkw-Pannenservice",
      subtitle:
        "Vor-Ort-Hilfe in Mannheim und Umgebung: Bremsen lösen, Startprobleme, Schlüsselcodierung, ECU-Analyse, OBD-Diagnose, elektrische Reparaturen, Reifendienst, Kraftstoff- und AdBlue-Probleme.",
      list: [
        "Bremsen lösen",
        "Startprobleme",
        "Schlüsselcodierung",
        "ECU-Analyse",
        "OBD-Diagnose",
        "Elektrische Reparaturen",
        "Reifendienst",
        "Kraftstoffprobleme",
        "AdBlue-Probleme",
      ],
      callNow: "Jetzt anrufen",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      items: [
        {
          q: "Was ist ECU-Programmierung und warum ist sie wichtig?",
          a: "Die ECU-Programmierung optimiert die Motorsteuerung für mehr Leistung, Drehmoment und Kraftstoffeinsparung – bei sicheren Grenzen.",
        },
        { q: "Tauschen und programmieren Sie Steuergeräte?", a: "Ja. Wir besorgen Original-Steuergeräte und übernehmen Programmierung und Kalibrierung." },
        { q: "Können Sie DPFs regenerieren oder reinigen?", a: "Wir bieten Zwangsregeneration, chemische Reinigung und – wo zulässig – sichere Deaktivierungslösungen." },
        { q: "Bieten Sie einen 24/7-Notdienst an?", a: "Ja, unsere Notrufnummer ist rund um die Uhr für Mannheim und Umgebung erreichbar." },
        { q: "Gibt es eine Garantie auf Ihre Leistungen?", a: "Ja, wir geben Gewährleistung auf unsere Arbeit und eine Bestpreis-Garantie." },
      ],
    },
    contact: {
      title: "Kontakt",
      subtitle: "Wir helfen gern – melden Sie sich oder fordern Sie einen Termin an.",
      address: "Mannheim, Deutschland",
      emergencyLabel: "Notfall:",
      hours: "Mo–Sa: 08:00–18:00",
      mapTitle: "Karte – Standort Mannheim ECU",
      mapSrc: "https://www.google.com/maps?q=Mannheim%2C+Germany&output=embed",
      form: {
        name: "Name",
        namePh: "Ihr vollständiger Name",
        phone: "Telefon",
        phonePh: "z. B. +49 170 0000000",
        email: "E-Mail",
        emailPh: "sie@beispiel.de",
        vehicle: "Fahrzeugdaten",
        vehiclePh: "Modell, Baujahr, Motor",
        service: "Leistung",
        servicePh: "Leistung auswählen",
        message: "Nachricht",
        messagePh: "Beschreiben Sie Ihr Anliegen oder Ihren Wunsch",
        submit: "Termin anfragen",
        whatsapp: "WhatsApp",
      },
    },
    toast: {
      title: "Anfrage gesendet",
      desc: (name: string) => `Danke ${name || ""}! Wir melden uns in Kürze bei Ihnen.`,
    },
    footer: {
      desc:
        "Fortgeschrittene ECU-Programmierung, Diagnostik und mobiler Lkw-Service für Mercedes in Mannheim.",
      quick: "Schnellzugriff",
      links: {
        services: "Leistungen",
        about: "Über uns",
        reviews: "Bewertungen",
        mobile: "Mobiler Service",
        faq: "FAQ",
        contact: "Kontakt",
      },
      copyright: (year: number) => `© ${year} Mannheim ECU. Alle Rechte vorbehalten.`,
    },
  },
  en: {
    meta: {
      title: "Mannheim ECU | Advanced ECU Solutions for Mercedes Trucks",
      description:
        "ECU programming, diagnostics, DPF regeneration, key coding & Stage 1 software for Mercedes trucks in Mannheim. 24/7 emergency.",
    },
    nav: {
      services: "Services",
      about: "About",
      reviews: "Reviews",
      mobile: "Mobile Service",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title: "Advanced ECU Solutions for Mercedes Trucks",
      subtitle:
        "Professional ECU programming, control unit replacement, DPF regeneration, key coding, and Stage 1 performance software for all Mercedes trucks in Mannheim.",
      ctaEmergency: "Emergency Support",
      ctaBook: "Book an Appointment",
      alt: "Mercedes truck at night in Mannheim",
    },
    services: [
      { title: "ECU Programming", desc: "Specialized ECU programming, optimization, and updates to boost performance and efficiency." },
      { title: "Control Unit Replacement", desc: "Professional replacement with original parts and correct programming." },
      { title: "DPF Regeneration", desc: "Forced regeneration, chemical cleaning, or deactivation for clogged DPFs." },
      { title: "Key Coding", desc: "Secure key coding and programming compatible with immobilizer systems." },
      { title: "Performance Optimization", desc: "Custom tuning to increase power, torque, and overall efficiency." },
      { title: "Full Diagnostics", desc: "Latest diagnostic tools to detect and fix electronic and mechanical issues." },
      { title: "Stage 1 Performance Software", desc: "Tailored Stage 1 remapping for more power and response while keeping reliability." },
    ],
    testimonials: {
      title: "What Clients Say",
      subtitle: "Fast, reliable and specialized service.",
      items: [
        { name: "Thomas K.", role: "Fleet Operator", text: "Emergency response was incredibly fast. Got our truck running within hours!", alt: "Portrait of Thomas K." },
        { name: "Sarah M.", role: "Logistics Manager", text: "DPF issue fixed same day. Transparent pricing and top communication.", alt: "Portrait of Sarah M." },
        { name: "Jonas L.", role: "Owner-Driver", text: "Needed key coding on-site. Professional and quick – highly recommended.", alt: "Portrait of Jonas L." },
      ],
    },
    about: {
      title: "About Mannheim ECU",
      p1:
        "With over 20 years of experience, our team specializes in Mercedes-specific ECU software solutions. We use modern equipment, provide a best price guarantee and 24/7 emergency support.",
      bullets: [
        "20+ years experience",
        "Mercedes-specific expertise",
        "24/7 emergency support",
        "Modern diagnostics & equipment",
        "Best price guarantee",
      ],
      teamAlt: "Mannheim ECU team in workshop",
    },
    emergency: { title: "Vehicle Breakdown? Call Us Now!", subtitle: "We’re available 24/7 for emergency assistance." },
    mobile: {
      title: "24/7 Mobile Truck Breakdown Service",
      subtitle:
        "On-site support in Mannheim and surroundings: brake release, starting issues, key coding, ECU analysis, OBD diagnostics, electrical repairs, tire service, fuel and AdBlue problems.",
      list: [
        "Brake release",
        "Starting issues",
        "Key coding",
        "ECU analysis",
        "OBD diagnostics",
        "Electrical repairs",
        "Tire service",
        "Fuel problems",
        "AdBlue problems",
      ],
      callNow: "Call Now",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What is ECU programming and why is it important?", a: "ECU programming optimizes your truck's engine control software for better power, torque, and fuel efficiency while maintaining safety margins." },
        { q: "Do you replace and program new control units?", a: "Yes. We source original ECUs and handle the complete programming and calibration process." },
        { q: "Can you regenerate or clean DPFs?", a: "We provide forced regeneration, chemical cleaning, and if required, safe deactivation solutions where permitted." },
        { q: "Do you offer 24/7 emergency support?", a: "Yes, we operate a round-the-clock emergency line for breakdowns and urgent issues in Mannheim and surrounding areas." },
        { q: "Do your services include a guarantee?", a: "Yes, all work is backed by our workmanship warranty and best price guarantee." },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "We’d love to help. Reach out or request an appointment.",
      address: "Mannheim, Germany",
      emergencyLabel: "Emergency:",
      hours: "Mon–Sat: 08:00–18:00",
      mapTitle: "Mannheim ECU Location Map",
      mapSrc: "https://www.google.com/maps?q=Mannheim%2C+Germany&output=embed",
      form: {
        name: "Name",
        namePh: "Your full name",
        phone: "Phone",
        phonePh: "e.g. +49 170 0000000",
        email: "Email",
        emailPh: "you@example.com",
        vehicle: "Vehicle Info",
        vehiclePh: "Model, year, engine",
        service: "Service Type",
        servicePh: "Choose a service",
        message: "Message",
        messagePh: "Tell us more about your issue or request",
        submit: "Request Appointment",
        whatsapp: "WhatsApp",
      },
    },
    toast: {
      title: "Request sent",
      desc: (name: string) => `Thanks ${name || "there"}, we will contact you shortly!`,
    },
    footer: {
      desc:
        "Advanced ECU programming, diagnostics, and mobile truck service for Mercedes trucks in Mannheim.",
      quick: "Quick Links",
      links: {
        services: "Services",
        about: "About",
        reviews: "Reviews",
        mobile: "Mobile Service",
        faq: "FAQ",
        contact: "Contact",
      },
      copyright: (year: number) => `© ${year} Mannheim ECU. All rights reserved.`,
    },
  },
  tr: {
    meta: {
      title: "Mannheim ECU | Mercedes Kamyonlar için İleri ECU Çözümleri",
      description:
        "Mannheim'da Mercedes kamyonlar için ECU programlama, diagnostik, DPF rejenerasyon, anahtar kodlama ve Stage 1 yazılım. 7/24 acil destek.",
    },
    nav: {
      services: "Hizmetler",
      about: "Hakkımızda",
      reviews: "Yorumlar",
      mobile: "Mobil Servis",
      faq: "SSS",
      contact: "İletişim",
    },
    hero: {
      title: "Mercedes Kamyonlar için İleri ECU Çözümleri",
      subtitle:
        "Profesyonel ECU programlama, kontrol ünitesi değişimi, DPF rejenerasyonu, anahtar kodlama ve tüm Mercedes kamyonlar için Stage‑1 performans yazılımı.",
      ctaEmergency: "Acil Destek",
      ctaBook: "Randevu Al",
      alt: "Mannheim'da gece Mercedes kamyon",
    },
    services: [
      { title: "ECU Programlama", desc: "Performans ve verimliliği artırmak için uzman ECU programlama, optimizasyon ve güncellemeler." },
      { title: "Kontrol Ünitesi Değişimi", desc: "Orijinal parçalarla profesyonel değişim ve doğru programlama." },
      { title: "DPF Rejenerasyon", desc: "Tıkalı DPF'ler için zorla rejenerasyon, kimyasal temizlik veya devre dışı bırakma." },
      { title: "Anahtar Kodlama", desc: "Immobilizer uyumlu güvenli anahtar kodlama ve programlama." },
      { title: "Performans Optimizasyonu", desc: "Güç, tork ve verimliliği artırmak için özel ayar." },
      { title: "Tam Diagnostik", desc: "Elektronik ve mekanik sorunları tespit ve çözüm için en son diagnostik ekipman." },
      { title: "Stage‑1 Performans Yazılımı", desc: "Daha fazla güç ve tepki için güvenilir Stage‑1 yeniden haritalama." },
    ],
    testimonials: {
      title: "Müşteri Yorumları",
      subtitle: "Hızlı, güvenilir ve uzman hizmet.",
      items: [
        { name: "Thomas K.", role: "Filo Operatörü", text: "Acil müdahale inanılmaz hızlıydı. Kamyonumuz saatler içinde çalıştı!", alt: "Thomas K. portresi" },
        { name: "Sarah M.", role: "Lojistik Müdürü", text: "DPF sorunu aynı gün çözüldü. Şeffaf fiyat ve harika iletişim.", alt: "Sarah M. portresi" },
        { name: "Jonas L.", role: "Sürücü-İşletmeci", text: "Yerinde anahtar kodlama gerekti. Profesyonel ve hızlı – kesinlikle tavsiye ederim.", alt: "Jonas L. portresi" },
      ],
    },
    about: {
      title: "Mannheim ECU Hakkında",
      p1:
        "20+ yıllık tecrübemizle Mercedes'e özel ECU yazılım çözümlerinde uzmanız. Modern ekipman, en iyi fiyat garantisi ve 7/24 acil destek sunuyoruz.",
      bullets: [
        "20+ yıl deneyim",
        "Mercedes'e özel uzmanlık",
        "7/24 acil destek",
        "Modern diagnostik & ekipman",
        "En iyi fiyat garantisi",
      ],
      teamAlt: "Atölyede Mannheim ECU ekibi",
    },
    emergency: { title: "Araç Arızası mı? Hemen Arayın!", subtitle: "Acil yardım için 7/24 hizmetteyiz." },
    mobile: {
      title: "7/24 Mobil Kamyon Yol Yardım Hizmeti",
      subtitle:
        "Mannheim ve çevresinde yerinde destek: fren açma, çalışmama sorunları, anahtar kodlama, ECU analizi, OBD diagnostik, elektrik arızaları, lastik hizmeti, yakıt ve AdBlue sorunları.",
      list: [
        "Fren açma",
        "Çalışmama sorunları",
        "Anahtar kodlama",
        "ECU analizi",
        "OBD diagnostik",
        "Elektrik onarımları",
        "Lastik hizmeti",
        "Yakıt sorunları",
        "AdBlue sorunları",
      ],
      callNow: "Hemen Ara",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      items: [
        { q: "ECU programlama nedir, neden önemlidir?", a: "ECU programlama, güvenli sınırlar içinde daha iyi güç, tork ve yakıt ekonomisi için motor kontrol yazılımını optimize eder." },
        { q: "Kontrol ünitesi değişimi ve programlama yapıyor musunuz?", a: "Evet. Orijinal ECU temini ve programlama/kalibrasyon işlemlerinin tamamını yapıyoruz." },
        { q: "DPF rejenerasyon veya temizlik yapıyor musunuz?", a: "Zorla rejenerasyon, kimyasal temizlik ve gerekli durumlarda güvenli devre dışı bırakma çözümleri sunuyoruz." },
        { q: "7/24 acil destek sunuyor musunuz?", a: "Evet, Mannheim ve çevresinde arızalar için 7/24 acil hattımız hizmet vermektedir." },
        { q: "Hizmetleriniz garanti kapsamında mı?", a: "Evet, tüm işlerimiz işçilik garantisi ve en iyi fiyat garantisi altındadır." },
      ],
    },
    contact: {
      title: "İletişim",
      subtitle: "Yardımcı olmaktan memnuniyet duyarız. Bizimle iletişime geçin veya randevu isteyin.",
      address: "Mannheim, Almanya",
      emergencyLabel: "Acil:",
      hours: "Pzt–Cmt: 08:00–18:00",
      mapTitle: "Mannheim ECU Konum Haritası",
      mapSrc: "https://www.google.com/maps?q=Mannheim%2C+Germany&output=embed",
      form: {
        name: "İsim",
        namePh: "Tam adınız",
        phone: "Telefon",
        phonePh: "+49 170 0000000 ör.",
        email: "E-posta",
        emailPh: "siz@ornek.com",
        vehicle: "Araç Bilgisi",
        vehiclePh: "Model, yıl, motor",
        service: "Hizmet Türü",
        servicePh: "Bir hizmet seçin",
        message: "Mesaj",
        messagePh: "Sorununuzu veya talebinizi açıklayın",
        submit: "Randevu Talep Et",
        whatsapp: "WhatsApp",
      },
    },
    toast: {
      title: "Talep gönderildi",
      desc: (name: string) => `Teşekkürler ${name || ""}, kısa süre içinde sizinle iletişime geçeceğiz!`,
    },
    footer: {
      desc:
        "Mannheim'da Mercedes kamyonlar için ileri ECU programlama, diagnostik ve mobil servis.",
      quick: "Hızlı Bağlantılar",
      links: {
        services: "Hizmetler",
        about: "Hakkımızda",
        reviews: "Yorumlar",
        mobile: "Mobil Servis",
        faq: "SSS",
        contact: "İletişim",
      },
      copyright: (year: number) => `© ${year} Mannheim ECU. Tüm hakları saklıdır.`,
    },
  },
};
