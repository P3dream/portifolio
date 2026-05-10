import { Code2, Database, Layers3, ServerCog } from "lucide-react";

const techSections = {
    Backend: ["Nest.js", "Node.js", "Microservices", ".NET", "RESTful APIs", "Python"],
    Frontend: ["React.js", "Vue.js", "Angular", "Redux", "TypeScript"],
    DevOps: ["AWS", "Docker", "CI/CD", "Grafana", "Prometheus", "Cybersecurity","Certificates"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB","SQLite","SQL Server","Sap Hana"]
};

const sectionIcons = {
    Backend: ServerCog,
    Frontend: Layers3,
    DevOps: Code2,
    Databases: Database,
};

const TechStack = () => {
    return (
        <section className="mx-auto max-w-screen-2xl overflow-hidden rounded-xl border border-slate-600/80 bg-slate-900/75 px-4 py-5 text-gray-100 shadow-lg backdrop-blur sm:px-6 sm:py-6">
            <div className="mb-5">
                <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                    Tech Stack
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(techSections).map(([section, techs]) => (
                    <article
                        key={section}
                        className="rounded-lg border border-slate-600/80 bg-slate-700/70 p-4 shadow-md transition duration-300 hover:border-slate-400/80 hover:bg-slate-700/90"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-500/80 bg-slate-800/80 text-gray-200">
                                {(() => {
                                    const Icon = sectionIcons[section as keyof typeof sectionIcons];
                                    return <Icon className="h-5 w-5" aria-hidden="true" />;
                                })()}
                            </span>
                            <h3 className="text-lg font-semibold text-gray-50">{section}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {techs.map((tech, index) => (
                                <span
                                    key={index}
                                    className="rounded-md border border-slate-500 bg-slate-800/80 px-2.5 py-1 text-sm font-medium text-gray-100 shadow-sm transition hover:border-slate-300 hover:bg-slate-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};


export default TechStack;
