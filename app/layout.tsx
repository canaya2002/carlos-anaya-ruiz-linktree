import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050508",
};

export const metadata: Metadata = {
  title: "Carlos Anaya Ruiz | Desarrollador Web & Consultor Digital",
  description:
    "Soy Carlos Anaya Ruiz — Desarrollador web profesional. Diseño y desarrollo sitios web de alto impacto. Solicita tu consulta gratuita y lleva tu presencia digital al siguiente nivel.",
  keywords: [
    "Carlos Anaya Ruiz", "desarrollador web", "diseño web profesional",
    "consultoría digital", "sitios web", "desarrollo frontend", "freelance developer",
  ],
  authors: [{ name: "Carlos Anaya Ruiz", url: "https://carlosanayaruiz.com" }],
  creator: "Carlos Anaya Ruiz",
  publisher: "Carlos Anaya Ruiz",
  metadataBase: new URL("https://carlosanayaruiz.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "es_MX",
    url: "https://links.carlosanayaruiz.com",
    siteName: "Carlos Anaya Ruiz — Links",
    title: "Carlos Anaya Ruiz | Desarrollador Web & Consultor Digital",
    description: "Desarrollador web profesional. Diseño y desarrollo sitios web de alto impacto.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Carlos Anaya Ruiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Anaya Ruiz | Desarrollador Web",
    description: "Desarrollador web profesional. Diseño y desarrollo sitios web de alto impacto.",
    creator: "@CarlosAnayaRuiz",
    images: ["/og-image.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon-16x16.png", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Carlos Anaya Ruiz",
              url: "https://carlosanayaruiz.com",
              image: "https://links.carlosanayaruiz.com/carlos-anaya-ruiz-linktree.png",
              jobTitle: "Desarrollador Web & Consultor Digital",
              sameAs: [
                "https://www.linkedin.com/in/carlos-anaya-ruiz-732abb249",
                "https://www.instagram.com/carlosanayadev/",
                "https://x.com/CarlosAnayaRuiz",
                "https://www.tiktok.com/@carlosanayaruiz",
                "https://carlosanayaweb.com",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
