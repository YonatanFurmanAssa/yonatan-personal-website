import { useEffect, useState } from "react"

export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars()
        generateMeteors()
        const handleResize = () => {
            generateStars();

        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 13000)
        const newStars: any = []
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }
        setStars(newStars)
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const meteorData: any = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            meteorData.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 40,
                delay: Math.random(),
                animationDuration: Math.random() * 3 + 3
            });
        }
        setMeteors(meteorData);
    };



    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star: any) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s"
            }} />
        ))}
        {meteors.map((meteor: any) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s"
            }} />
        ))}
    </div>
}