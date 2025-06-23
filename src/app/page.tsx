"use client";

import Link from "next/link";

import "./main.css";

export default function Home() {
  return (
    <main className="content">
      <section className="main">
        <h1 className="name">
          CT02
          <span className="animate-spin">*</span>
        </h1>
        <p className="description">
          Sou um desenvolvedor apaixonado por tecnologia e inovação. Atualmente sou um desenvolvedor fullstack, com foco em desenvolvimento web. Trabalho com tecnologias como React, Next.js, Node.js, TypeScript, entre outras.
        </p>
        <div className="buttons">
          <Link href="/projects" className="cta">Projetos</Link>
          <Link href="/habilidades" className="cta">Habilidades</Link>
          <Link href="/contact" className="cta">Contato</Link>
        </div>
      </section>
    </main>
  );
}
