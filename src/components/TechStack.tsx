const techSections = {
    Backend: ["Nest.js", "Node.js", "Microservices", ".NET", "RESTful APIs", "Python"],
    Frontend: ["React.js", "Vue.js", "Angular", "Redux", "TypeScript"],
    DevOps: ["AWS", "Docker", "CI/CD", "Grafana", "Prometheus", "Cybersecurity","Certificates"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB","SQLite","SQL Server","Sap Hana"]
};

const TechStack = () => {
    return (
        <div className="mx-auto px-4 sm:px-4 py-4 bg-slate-800 rounded-xl shadow-lg max-w-screen-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4 text-center">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.entries(techSections).map(([section, techs]) => (
                    <div key={section} className="bg-slate-700 rounded-xl p-4 shadow text-gray-100 text-center">
                        <h3 className="text-lg font-semibold mb-2">{section}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {techs.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-slate-600 text-sm px-3 py-1 rounded-full hover:bg-slate-500 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
