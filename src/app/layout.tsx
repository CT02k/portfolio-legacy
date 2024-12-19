import "./globals.css"

const quotes = [
  "A criatividade é a inteligência se divertindo. — Albert Einstein",
  "O design não é apenas o que parece e o que se sente. O design é como funciona. — Steve Jobs",
  "O único jeito de fazer um excelente trabalho é amar o que você faz. — Steve Jobs",
  "A simplicidade é o último grau de sofisticação. — Leonardo da Vinci",
  "Criatividade é permitir a si mesmo cometer erros. Arte é saber quais deles manter. — Scott Adams",
  "O design é onde a ciência e a arte chegam a um ponto de convergência. — Robin Mathew"
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
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
          <p>{quote}</p>
        </footer>
      </body>
    </html>
  );
}
