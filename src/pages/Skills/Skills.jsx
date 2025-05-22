import SkillCard from "./components/SkillCard";

export default function Skills() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SkillCard />
          <SkillCard />
          <SkillCard />
      </div>
    </div>
  );
}