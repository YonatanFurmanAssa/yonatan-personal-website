import { Briefcase, Code, User } from "lucide-react"
import { Link } from "react-router-dom"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">
                        Me
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer and DevOps Engineer
                        </h3>
                        <p className="text-muted-foreground">
                            With over a year in the devops field i always knew i was the main character, <br />
                            because i always exceling at this (not true lol) , i don't care what i write rn,<br />
                            this is moretm ipssum
                        </p>
                        <p className="text-muted-foreground">
                            With over a year in the devops field i always knew i was the main character, <br />
                            because i always exceling at this (not true lol) , i don't care what i write rn,<br />
                            this is moretm ipssum
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
                            <Link to="/contact" className="cosmic-button">
                                Get In Touch
                            </Link>

                            <a
                                href="/Resume-Yonatan.pdf"
                                download="Resume-Yonatan.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download My Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary card-hover" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground =">
                                        creating responsive website in html and
                                        also performing devops miracles
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary card-hover" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground =">
                                        creating responsive website in html and
                                        also performing devops miracles
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary card-hover" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground =">
                                        creating responsive website in html and
                                        also performing devops miracles
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}