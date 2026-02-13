import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Carlos Anaya Ruiz — Links", short_name: "Carlos Links",
    description: "Enlaces de Carlos Anaya Ruiz — Desarrollador Web & Consultor Digital",
    start_url: "/", display: "standalone", background_color: "#050508", theme_color: "#050508",
    icons: [
      { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
