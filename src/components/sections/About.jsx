import { Code2, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { stats } from "../../data/siteData";
const qualities = [
  {
    icon: Sparkles,
    title: "Innovative",
    text: "Solutions designed for impact.",
  },
  { icon: Code2, title: "Clean Code", text: "Maintainable engineering." },
  { icon: Smartphone, title: "Scalable", text: "Products built to grow." },
  { icon: ShieldCheck, title: "Reliable", text: "Quality you can trust." },
];
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-eyebrow">WHO WE ARE</div>
      <div className="about-grid">
        <div>
          <SectionHeading
            title="Small team."
            highlight="Big ideas."
            description="We are two passionate developers who love turning ideas into impactful digital experiences. With expertise in modern technologies and AI integrations, we help businesses and startups build products for the future."
          />
          <div className="quality-grid">
            {qualities.map(({ icon: Icon, title, text }) => (
              <div className="quality-item" key={title}>
                <Icon size={20} />
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="stats-card">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
