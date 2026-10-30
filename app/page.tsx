import Image from "next/image";
import Particles from "@/components/Particles";
import TiltCard from "@/components/TiltCard";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const links = [
  {
    href: "https://wa.me/525569201203?text=Hola%20Carlos%2C%20vengo%20de%20Instagram",
    label: "Escríbeme por WhatsApp",
    variant: "whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    href: "https://www.carlosanayaruiz.com/es/automatizacion-ia?utm_source=instagram&utm_medium=social&utm_campaign=linkpage&utm_content=automatizacion",
    label: "Automatiza tu negocio",
    variant: "automatizacion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    href: "https://www.carlosanayaruiz.com/es/dashboards?utm_source=instagram&utm_medium=social&utm_campaign=linkpage&utm_content=software",
    label: "Software y dashboards a la medida",
    variant: "software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    href: "https://www.carlosanayaruiz.com/es/desarrollo-web?utm_source=instagram&utm_medium=social&utm_campaign=linkpage&utm_content=web",
    label: "Tu sitio web",
    variant: "web",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    href: "https://www.carlosanayaruiz.com/es/proyectos?utm_source=instagram&utm_medium=social&utm_campaign=linkpage&utm_content=casos",
    label: "Casos y proyectos",
    variant: "casos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    href: "https://www.carlosanayaruiz.com/es/sobre-mi?utm_source=instagram&utm_medium=social&utm_campaign=linkpage&utm_content=sobremi",
    label: "Sobre mí",
    variant: "sobremi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    href: "https://www.carlosanayaruiz.com/es/blog?utm_source=instagram&utm_medium=social&utm_campaign=linkpage&utm_content=blog",
    label: "Blog",
    variant: "blog",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249/",
    label: "LinkedIn",
    variant: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/CarlosAnayaRuiz",
    label: "X",
    variant: "x",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://medium.com/@canaya917",
    label: "Medium (en inglés)",
    variant: "medium",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/carlosanayaruiz",
    label: "GitHub",
    variant: "github",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@carlosanayaruiz",
    label: "TikTok",
    variant: "tiktok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.6z" />
      </svg>
    ),
  },
  {
    href: "https://www.carlosanayaruiz.com/es/seo-tecnico?utm_source=instagram&utm_medium=social&utm_campaign=linkpage&utm_content=seo",
    label: "SEO técnico y Google Maps",
    variant: "seo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Particles />
      <div className="ambient" aria-hidden="true">
        <div className="ambient__orb ambient__orb--1" />
        <div className="ambient__orb ambient__orb--2" />
      </div>
      <div className="grain" aria-hidden="true" />

      <main className="linktree">
        <header className="profile">
          <div className="avatar">
            <div className="avatar__glow" aria-hidden="true" />
            <div className="avatar__ring" aria-hidden="true" />
            <Image
              className="avatar__img"
              src="/carlos-anaya-ruiz-linktree.png"
              alt="Carlos Anaya Ruiz — Automatización, software y sitios web"
              width={150} height={150} priority quality={95}
            />
          </div>
          <h1 className="profile__name">Carlos Anaya Ruiz</h1>
          <p className="profile__tagline">Automatización, software a la medida y sitios web para negocios en todo México</p>
          <hr className="profile__line" />
          <div className="badge">
            <span className="badge__dot" aria-hidden="true" />
            <span className="badge__text">Disponible para proyectos</span>
          </div>
        </header>

        <nav className="links" aria-label="Enlaces principales">
          {links.map((link) => (
            <TiltCard key={link.variant} href={link.href} className={`card card--${link.variant}`}>
              <span className="card__icon">{link.icon}</span>
              <span className="card__label">{link.label}</span>
              <span className="card__arrow"><Arrow /></span>
            </TiltCard>
          ))}
        </nav>

        <footer className="footer">
          <p className="footer__text">&copy; 2026 <em>Carlos Anaya Ruiz</em></p>
        </footer>
      </main>
    </>
  );
}
