import "./globals.css"

import "@fortawesome/fontawesome-svg-core/styles.css";

import Footer from "@/components/footer"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CT02",
  description: "Sou um desenvolvedor apaixonado por tecnologia e inovação. Atualmente sou um desenvolvedor fullstack, com foco em desenvolvimento web.",
  keywords: ["CT02", "Desenvolvedor", "Fullstack", "Web", "Next.js", "React", "TypeScript", "Node.js", "PHP", "HTML", "CSS", "Git", "Figma"],
  authors: [{ name: "CT02", url: "https://ct02.work"}],
  creator: "CT02",
  applicationName: "CT02",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CT02",
    description: "Sou um desenvolvedor apaixonado por tecnologia e inovação. Atualmente sou um desenvolvedor fullstack, com foco em desenvolvimento web.",
    images: ["https://ct02.work/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#93c5fd" />
      </head>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
