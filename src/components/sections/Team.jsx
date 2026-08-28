import SectionHeading from "../ui/SectionHeading";
import { team } from "../../data/siteData";

export default function Team() {
  return (
    <section id="team" className="section team-section">
      <SectionHeading
        eyebrow="THE DEVELOPERS"
        title="Meet the"
        highlight="team."
        description="Two developers. One goal: build useful, beautiful and intelligent software."
      />

      <div className="team-grid">
        {team.map((p, i) => (
          <article className="person-card" key={p.name}>
            <div className={`person-avatar person-avatar-${i}`}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="person-avatar-image"
                />
              ) : (
                p.initials
              )}
            </div>

            <h3 className="font-montserrat">{p.name}</h3>

            <p className="person-role font-montserrat">{p.role}</p>

            <p className="person-description font-inter">{p.description}</p>

            <div className="person-skills">
              {p.skills.map((s) => (
                <div
                  key={s}
                  className="text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-md px-2 py-1 mr-2 mb-2 font-montserrat text-center"
                >
                  {s}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
