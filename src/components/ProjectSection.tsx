import { ExternalLink, Github } from "lucide-react"
import { Link } from "react-router-dom"

const projects = [
    {
        id: 1,
        title: "Ansible Playbook for Postgres",
        description: "Automated database provisioning and configuration management. Features idempotency and security hardening for production-ready Postgres instances.",
        image: "./projects/devops-placeholder.jpeg",
        tags: ["Ansible", "Bash", "Postgres"],
        demoUrl: "https://youtube.com",
        githubUrl: "https://github.com"
    },
    {
        id: 2,
        title: "Firetruck Management System",
        description: "A real-world management system tested by firemen and commanders to track fleet status and emergency response logistics.",
        image: "./projects/firetruck-system-screenshot.png",
        tags: ["React", "MongoDB", "TypeScript"],
        demoUrl: "https://youtube.com",
        githubUrl: "https://github.com"
    },
    {
        id: 3,
        title: "Observability Stack (Grafana/Prometheus)",
        description: "Custom monitoring dashboard visualizing system metrics and log aggregation. Includes alerting rules for infrastructure health.",
        image: "./projects/saltstack-arc.png",
        tags: ["PromQL", "Prometheus", "Grafana"],
        demoUrl: "https://youtube.com",
        githubUrl: "https://github.com"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A selection of my recent work, ranging from full-stack applications to
                    automated DevOps infrastructure and monitoring solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center pt-4 border-t border-border/50">
                                    <div className="flex items-center gap-4">
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>

                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-80"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}