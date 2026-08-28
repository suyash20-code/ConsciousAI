import { BrainCircuit, Cloud, Globe2, Smartphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/siteData";
const icons = {
  globe: Globe2,
  smartphone: Smartphone,
  brain: BrainCircuit,
  cloud: Cloud,
};
export default function Services() {
  return (
    <section id="services" className="section services-section">
      <SectionHeading
        eyebrow="WHAT WE DO"
        title="Our"
        highlight="Services"
        description="From idea to production, we build products that matter."
      />
      <div className="services-grid">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <article className="service-card" key={s.title}>
              <div className="service-icon">
                <Icon size={21} />
              </div>
              <h3 className="font-montserrat">{s.title}</h3>
              <p className="font-roboto">{s.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
