import "./css/projectCard.css"

type ProjectCardProps = {
  href: string;
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  href,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <a href={href} className="project">
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}