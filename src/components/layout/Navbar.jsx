import { useEffect, useState } from "react";
import { ArrowRight, BrainCircuit, Menu, X } from "lucide-react";
import { navigation } from "../../data/siteData";
export default function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 20);
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-icon">
          <BrainCircuit size={22} />
        </span>
        <span>
          Conscious<span>AI</span>
        </span>
      </a>
      <nav className={`nav-menu ${open ? "nav-menu-open" : ""}`}>
        {navigation.map((n) => (
          <a
            href={n.href}
            key={n.href}
            onClick={() => setOpen(false)}
            className="font-montserrat text-xs"
          >
            {n.label}
          </a>
        ))}
        <a
          className="nav-cta font-roboto"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let's Work Together <ArrowRight size={15} />
        </a>
      </nav>
      <button
        className="mobile-menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
