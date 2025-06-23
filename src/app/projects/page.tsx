"use client";

import ProjectCard from "@/components/projectCard";
import GoBack from "@/components/goBack";

export default function Page() {
    return (
      <main className="content">
        <section className="main">
          <h1>Projetos<span>*</span></h1>
          <p>Conheça alguns dos projetos em destaque que desenvolvi.</p>
          <div className="project-group">
            <ProjectCard
              href="https://ct02.work"
              title="ct02.work"
              description="Meu site pessoal, onde você está agora, com informações sobre mim e meus projetos."
              tags={["Next.js", "React", "TypeScript", "TailwindCSS"]}
            />
          </div>
          <GoBack/>
        </section>
      </main>
    );
  }
  