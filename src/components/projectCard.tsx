import Image from "next/image";

type ProjectCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <a href={href} className="project">
      <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
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