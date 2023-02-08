export function FAQItem({ title, description, isOpenAll }) {
  return (
    <div className="accordion-item">
      <p className={`title ${isOpenAll ? "is-expanded" : ""}`}>{title}</p>
      <div className={`content ${isOpenAll ? "is-expanded" : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}
