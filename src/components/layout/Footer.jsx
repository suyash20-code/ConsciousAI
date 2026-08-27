import { BrainCircuit, Github, Linkedin, Mail } from "lucide-react";
import { siteData } from "../../data/siteData";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="brand-icon">
          <BrainCircuit size={20} />
        </span>
        <span>
          Conscious<span>AI</span>
        </span>
      </div>
      <p>
        © {new Date().getFullYear()} {siteData.name}. Built with intention.
      </p>
      <div className="social-links">
        <a href="#" aria-label="GitHub">
          <Github size={17} />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
        <a href={`mailto:${siteData.email}`} aria-label="Email">
          <Mail size={17} />
        </a>
      </div>
    </footer>
  );
}
