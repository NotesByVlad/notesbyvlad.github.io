export default function ProjectCard() {
    return (
        <div className="bg-surface shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl text-text font-bold text-gray-900 mb-2">Project</h3>
            <p className="text-text mb-4">
                Project Description
            </p>
            <p className="text-text mb-4">
                Technologies used
            </p>
            <p className="text-text mb-4">
                Some media here, images, videos, stuff
            </p>
            <p className="text-text mb-4">
                Aprox Time Spent on Project
            </p>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline"
            >
                View project
            </a>
        </div>
    );
}