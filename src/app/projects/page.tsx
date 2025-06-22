import ProjectCard from "@/components/projectCard";

export default function Page() {
    return (
      <main className="content">
        <section className="main">
          <h1>Projetos<span>*</span></h1>
          <p>Conheça alguns dos projetos em destaque que desenvolvi.</p>
          <div className="project-group">
            <ProjectCard
              href="https://rayssa.xyz?ref=ct02.work"
              imageSrc="https://rayssa.xyz/discover.png"
              imageAlt="Rayssa"
              title="Stellar (Discover)"
              description="Site para um bot de parcerias do Discord que mostra uma lista de servidores que a usam e outras funções."
              tags={["Next.js", "React", "TypeScript", "TailwindCSS"]}
            />
            <ProjectCard
              href="https://ct02.work"
              imageSrc="https://ct02.work/CT02.png"
              imageAlt="CT02"
              title="Portfolio"
              description="Meu site pessoal, onde você está agora, com informações sobre mim e meus projetos."
              tags={["Next.js", "React", "TypeScript", "TailwindCSS"]}
            />
          </div>
        </section>
      </main>
    );
  }
  