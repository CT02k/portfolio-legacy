"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faGit, faFigma, faNodeJs, faPhp, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";

import "./habilidades.css";

import GoBack from "@/components/goBack";

export default function Home() {
  return (
    <main className="content">
      <section className="habilidades">
        <h1>
          Habilidades<span>*</span>
        </h1>
        <ul>
          <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
          <li><FontAwesomeIcon icon={faReact} /> React</li>
          <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
          <li><FontAwesomeIcon icon={faPhp} /> PHP</li>
          <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
          <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
          <li><FontAwesomeIcon icon={faGit} /> Git</li>
          <li><FontAwesomeIcon icon={faFigma} /> Figma</li>
        </ul>
      <GoBack />
      </section>
    </main>
  );
}
