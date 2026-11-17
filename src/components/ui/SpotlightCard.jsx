/** A card whose background glows where the cursor is (see `.spotlight` in index.css). */
export default function SpotlightCard({ as: Comp = "div", className = "", children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Comp onPointerMove={onMove} className={`card spotlight ${className}`} {...rest}>
      {children}
    </Comp>
  );
}
