import { Mail, MapPin, Phone, Send } from "lucide-react"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Want to collaborate or offer a job? Fill out the form below.
                    I'm always open to discussing new ventures and technical challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:yonatanfurmanassa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        yonatanfurmanassa@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+972523338580" className="text-muted-foreground hover:text-primary transition-colors">
                                        052-333-8580
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Israel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="space-y-4 bg-card p-8 rounded-xl border border-border/50 shadow-sm"
                    >
                        <input type="hidden" name="access_key" value="bea9c177-6c44-45ca-b8b1-dbe0276adede" />

                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}