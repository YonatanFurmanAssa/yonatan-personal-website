import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    //frontend
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },

    // backend 
    { name: "NodeJs", level: 90, category: "backend" },
    { name: "NodeJs", level: 90, category: "backend" },
    { name: "NodeJs", level: 90, category: "backend" },
    { name: "NodeJs", level: 90, category: "backend" },
    { name: "NodeJs", level: 90, category: "backend" },
    { name: "NodeJs", level: 90, category: "backend" },

    // Devops
    { name: "Linux", level: 90, category: "devops" },
    { name: "Linux", level: 90, category: "devops" },
    { name: "Linux", level: 90, category: "devops" },
    { name: "Linux", level: 90, category: "devops" },
    { name: "Linux", level: 90, category: "devops" },
    { name: "Linux", level: 90, category: "devops" },

]

const categories = ["all",
    "frontend", "backend", "devops"
]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return (
        <section id="skills" className="py-24 px-4 relative bg-secodary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text4xl font-bold mb-12 text-center">
                    My <span className="text-primary">
                        Skills
                    </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" :
                                "bg-secondary/70 text-foreround hover:bd-secondary"
                        )}
                            onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-sm border border-border/50 card-hover">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-foreground ">{skill.name}</span>
                                <span className="text-primary text-sm">{skill.level}%</span>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2">
                                <div
                                    className="bg-primary h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>

                            <p className="text-xs text-muted-foreground mt-2 italic capitalize">{skill.category}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
} 