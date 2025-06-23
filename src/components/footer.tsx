import RandomText from "@/components/randomText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./css/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="socials">
                <a href="https://github.com/ct02k" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <RandomText />
        </footer>
    );
}
