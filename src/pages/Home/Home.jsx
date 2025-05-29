import AboutPreview from "./components/AboutPreview";
import Hero from "./components/Hero";
import PlaygroundPreview from "./components/PlaygroundPreview";
import ProjectsPreview from "./components/ProjectsPreview";
import SkillsPreview from "./components/SkillsPreview";

export default function Home() {
  return (
    <div className="p-4">
      <section>
        <div className="space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-2">Welcome to my website</h1>
          <Hero />
          <SkillsPreview />
          <ProjectsPreview />
          <AboutPreview />
          <PlaygroundPreview />
        </div>
      </section>
    </div>
  );
}