import ProjectCard from "@/components/projectCard";
import GoBack from "@/components/goBack";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default async function Page() {
  const projects = await prisma.project.findMany();

  return (
    <main className="content">
      <section className="main">
        <h1>Projetos<span>*</span></h1>
        <p>Conheça alguns dos projetos em destaque que desenvolvi.</p>
        <div className="project-group">
          {projects.map((project) => (
            <ProjectCard
              key={project.href}
              href={project.href}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
        <GoBack/>
      </section>
    </main>
  );
}
