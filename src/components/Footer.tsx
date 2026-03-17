export const Footer = () => {
    return (
        <footer className="py-12 border-t border-border/50 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-xl font-bold text-primary">Yonatan Furman Assa</p>
                        <p className="text-sm text-muted-foreground mt-1">
                            Building resilient infrastructure & fluid user experiences.
                        </p>
                    </div>
                    
                    <div className="flex space-x-6 text-sm text-muted-foreground">
                        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-primary transition-colors">Home</button>
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} • Designed & Built by Yonatan • Hosted on Vercel</p>
                </div>
            </div>
        </footer>
    );
};