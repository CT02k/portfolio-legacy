"use client";

import CreateProjectPopup from "@/components/createProjectPopup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { faBucket, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

type Project = {
  id: string;
  href: string;
  title: string;
  description: string;
  tags: string[];
};

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [jwt, setJwt] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    async function requestCheck() {
      try {
        const response = await fetch("/api/login");

        if (!response.ok) {
          router.push("/admin/login");
          return;
        }

        const data = await response.json();

        if (!data.success) {
          router.push("/admin/login");
          return;
        }

        setJwt(data.token);

        const projectsRes = await fetch("/api/projects");
        if (!projectsRes.ok) {
          console.error("Erro ao carregar projetos");
          setProjects([]);
        } else {
          const projectsData: Project[] = await projectsRes.json();
          if (isMounted) {
            setProjects(projectsData);
          }
        }

        if (isMounted) setLoading(false);
      } catch (error) {
        console.error("Erro ao verificar login:", error);
        router.push("/admin/login");
      }
    }

    requestCheck();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const handleDelete = (id: string) => async () => {
    if (confirm("Tem certeza que deseja excluir este projeto?")) {
      try {
        await fetch(`/api/projects/${id}`, { method: "DELETE", headers: { "Authorization": `Bearer ${jwt || ""}` } }).then(() => {
          setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
          return alert("Projeto excluído com sucesso!");
        }).catch((error) => {
          console.error("Erro ao excluir projeto:", error);
          alert("Erro ao excluir projeto.");
        });
      } catch (error) {
        console.error("Erro ao excluir projeto:", error);
      }
    }
  };

  return (
    <main className="content">
      <section className="main">
        {loading ? (
          <FontAwesomeIcon
            icon={faBucket}
            className="text-9xl text-blue-500 animate-spin"
          />
        ) : (
          <div className="admin-content">
            <div className="flex justify-between items-center mb-10">
              <h1 className="mb-5">Projetos</h1>
              <CreateProjectPopup/>
            </div>
            {projects.length === 0 && <p>Nenhum projeto encontrado.</p>}
            {projects.map((project) => (
              <div key={project.id} className="project">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>Tags: {project.tags.join(", ")}</p>
                <div className="buttons">
                  <button className="danger" onClick={handleDelete(project.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
