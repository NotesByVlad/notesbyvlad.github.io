export default function SkillCard() {
    return (
        <div className="bg-surface shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-text">Skill</h3>
            <p className="text-sm text-text mt-2">
                Description of Skill
            </p>
            <p className="text-sm text-text mt-2">
                How I Used the Skill
            </p>
                        <p className="text-sm text-text mt-2">
                A link
            </p>
        </div>
    );
}