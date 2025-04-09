import "./globals.css"

import RandomText from "@/components/randomText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>CT02</title>
        <meta property="og:title" content="CT02" />
        <meta property="og:description" content="Sou um desenvolvedor apaixonado por tecnologia e inovação. Atualmente sou um desenvolvedor fullstack, com foco em desenvolvimento web." />
        <meta property="og:image" content="/og.png" />
        <meta property="theme-color" content="#93c5fd" />
      </head>
      <body>
        {children}
        <footer>
        <div className="socials">
          <a href="https://github.com/ct02k" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
          <RandomText />
        </footer>
      </body>
    </html>
  );
}
