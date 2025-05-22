import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}