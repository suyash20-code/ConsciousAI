import SectionHeading from "../ui/SectionHeading";
import { techStack } from "../../data/siteData";

export default function TechStack() {
  return (
    <section id="tech-stack" className="section tech-section">
      <div className="tech-grid">
        <SectionHeading
          eyebrow="TOOLS WE USE"
          title="Technology that"
          highlight="moves ideas forward."
          description="We choose technologies based on the product—not the trend. Our stack helps us ship fast without compromising quality."
        />

        <div className="tech-list">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;

            return (
              <div className="tech-item" key={tech.name}>
                <span className="tech-number">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Icon className="tech-icon" size={22} />

                <span className="tech-name">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
