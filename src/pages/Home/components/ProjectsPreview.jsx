import projectData from "../../Projects/data/projectData.json";
import ProjectPreviewCard from "./ProjectsPreviewCard";

export default function ProjectsPreview() {
  return (
    <section className="p-4 bg-surface rounded flex flex-col gap-4 shadow-themeShadow">
      <h2 className="text-xl text-primaryColor font-bold mb-2">Projects</h2>

      <div>
        {projectData.map((project, i) =>(
          <ProjectPreviewCard 
            key={i}
            title={project.title}
            technologies={project.technologies} />
        ))}
      </div>

      <p>
        For more detail, visit the <a href="/projects" className="text-secondaryColor underline">Projects page</a>.
      </p>
    </section>
  );
}
