"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <main className="content">
      <section className="main">
        <h1 className="name">
          CT02<span>*</span>
        </h1>
        <p className="description">
          Sou um desenvolvedor apaixonado por tecnologia e inovação. Atualmente sou um desenvolvedor fullstack, com foco em desenvolvimento web.
        </p>
        <div className="buttons">
          <button onClick={() => handleNavigation("/projects")}>Projetos</button>
          <button onClick={() => handleNavigation("/contact")}>Contato</button>
        </div>
      </section>
    </main>
  );
}
