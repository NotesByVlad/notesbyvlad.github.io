export default function ProjectCard({
  title,
  description,
  technologies,
  features,
  timeSpent,
  repoLink,
}) {
  return (
    <div className="bg-surface shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl text-primaryColor text-center mb-2">{title}</h2>

      <p className="mb-4">{description}</p>

      <p className="mb-1">Technologies:</p>
      <ul className="list-disc list-inside mb-4">
        {technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      <p className="mb-1">Features:</p>
      <ul className="list-disc list-inside mb-4">
        {features.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="mb-1">Time Spent:</p>
      <p className="mb-4">{timeSpent}</p>

      {repoLink && (
        <a
          href={repoLink} target="_blank" rel="noopener noreferrer"
          className="inline-block text-secondaryColor underline">
          View on GitHub
        </a>
      )}
    </div>
  );
}
