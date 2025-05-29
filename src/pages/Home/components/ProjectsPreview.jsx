import projectData from "../../Projects/data/projectData.json";
import ProjectPreviewCard from "./ProjectsPreviewCard";

export default function ProjectsPreview() {
  return (
    <section className="p-4 bg-surface rounded flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2">Projects</h2>

      <div>
        {projectData.map((project, i) =>(
          <ProjectPreviewCard 
            key={i}
            title={project.title}
            technologies={project.technologies} />
        ))}
      </div>

      <p>
        For more detail, visit the
        <a href="/projects" className="text-blue-500 underline"> Projects page</a>.
      </p>
    </section>
  );
}
