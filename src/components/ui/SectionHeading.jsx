export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}) {
  return (
    <div className="section-heading font-montserrat">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
