import { ArrowUpRight, Code2, Smartphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/siteData";

function ProjectMockup({ mobile }) {
  return mobile ? (
    <div className="phone-mockups">
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="app-dot" />
          <div className="screen-title">Good Morning</div>
          <div className="screen-subtitle">Here's your day</div>
          <div className="screen-orb">AI</div>
          <div className="screen-row">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <div className="phone phone-back">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="screen-title">Insights</div>
          <div className="mini-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="browser-mockup">
      <div className="browser-top">
        <span />
        <span />
        <span />
      </div>

      <div className="browser-body">
        <aside />

        <div className="dashboard">
          <div className="dashboard-header">
            <div />
            <div />
          </div>

          <div className="dashboard-cards">
            <i />
            <i />
            <i />
          </div>

          <div className="dashboard-chart">
            <div className="bars">
              <b />
              <b />
              <b />
              <b />
              <b />
              <b />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="work-heading">
        <SectionHeading
          eyebrow="WORK"
          title="Featured"
          highlight="Projects"
          description="A selection of products we've designed and developed."
        />

        <a href="#contact" className="text-link">
          Start a project <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((p) => {
          const isMobile = p.category === "Mobile Application";
          const isExternalProject = Boolean(p.link);

          return (
            <article className={`project-card project-${p.id}`} key={p.id}>
              <div className="project-copy">
                <span className="project-number">{p.number}</span>

                <span className="project-category font-montserrat">
                  {isMobile ? <Smartphone size={13} /> : <Code2 size={13} />}
                  {p.category}
                </span>

                <h3 className="font-montserrat">{p.title}</h3>

                <p className="font-roboto">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <a
                  href={p.link || "#contact"}
                  className="case-link"
                  target={isExternalProject ? "_blank" : undefined}
                  rel={isExternalProject ? "noopener noreferrer" : undefined}
                >
                  {isExternalProject ? "View Live Website" : "View Case Study"}
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="project-visual">
                <ProjectMockup mobile={isMobile} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
