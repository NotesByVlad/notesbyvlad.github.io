export default function SkillCard() {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Skill</h3>
            <p className="text-sm text-gray-600 mt-2">
                Description of Skill
            </p>
            <p className="text-sm text-gray-600 mt-2">
                How I Used the Skill
            </p>
                        <p className="text-sm text-gray-600 mt-2">
                A link
            </p>
        </div>
    );
}