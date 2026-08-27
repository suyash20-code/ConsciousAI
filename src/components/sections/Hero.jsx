import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <div className="hero-eyebrow font-inter">
          <Sparkles size={14} />
          AI-POWERED · WEB · MOBILE · SCALABLE
        </div>

        <h1 className="font-montserrat">
          Build smarter.
          <br />
          <span className="font-montserrat">Think conscious.</span>
        </h1>

        <p className="hero-lead font-montserrat">
          We build intelligent digital products that solve real-world problems.
        </p>

        <p className="hero-description font-roboto">
          <strong>ConsciousAI</strong> is a freelance development studio by{" "}
          <strong>Suyash Padwal</strong> & <strong>Dhruv Jani</strong>. We craft
          modern, scalable and AI-powered web & mobile applications.
        </p>

        <div className="hero-actions">
          <a href="#work" className="button button-primary font-montserrat">
            View Our Work <ArrowRight size={17} />
          </a>

          <a href="#contact" className="button button-outline font-montserrat">
            Let's Talk <Mail size={16} />
          </a>
        </div>

        {/* <a href="#about" className="scroll-hint font-inter">
          <span />
          Scroll to explore
        </a> */}
      </div>

      <div className="hero-visual">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="ai-core">
          <BrainCircuit size={100} />
          <span className="font-inter">AI</span>
        </div>

        <div className="floating-card floating-code font-inter">
          <Code2 size={20} />
          <span>Clean Code</span>
        </div>

        <div className="floating-card floating-data font-inter">
          <Database size={20} />
          <span>Smart Data</span>
        </div>

        <div className="floating-card floating-safe font-inter">
          <ShieldCheck size={20} />
          <span>Reliable</span>
        </div>
      </div>
    </section>
  );
}
