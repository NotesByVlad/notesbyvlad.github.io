export default function ProjectPreviewCard({ title, technologies }) {
  return (
    <div className="p-4 rounded">
      <h3>{title}</h3>
      <p>
        Technologies: {technologies.join(", ")}
      </p>
    </div>
  );
}