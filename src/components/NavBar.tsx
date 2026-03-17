import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open so the background doesn't move
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        // Small timeout helps mobile browsers finish closing the menu before jumping
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 10);
    };

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-md" : "py-5"
        )}>
            <div className="container flex items-center justify-between px-6 mx-auto">
                <button
                    onClick={() => {
                        setIsMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xl font-bold text-primary z-[60]"
                >
                    <span className="text-foreground">Yonatan </span> <span className="bg-secondary/40">Protfolio</span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.name.toLowerCase())}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle - High Z-Index to stay above overlay */}
                <button
                    className="md:hidden z-[60] text-foreground p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>

                {/* Mobile Overlay - Fixed to 100dvh */}
                <div className={cn(
                    "fixed inset-0 bg-background z-50 md:hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto visible"
                        : "opacity-0 pointer-events-none invisible translate-x-full"
                )}
                    style={{ height: '100dvh' }} // Forces it to fill the dynamic mobile screen
                >
                    <div className="flex flex-col space-y-8 items-center justify-center w-full">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.name.toLowerCase())}
                                className="text-3xl font-medium text-foreground hover:text-primary transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}