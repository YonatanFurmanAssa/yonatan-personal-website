import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleMode} 
            className="fixed top-20 right-5 md:top-5 z-[70] p-3 rounded-full bg-secondary/80 backdrop-blur-md border border-primary/20 shadow-lg cursor-pointer transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700 fill-slate-700" />
            )}
        </button>
    );
};