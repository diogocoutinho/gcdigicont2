"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number; // Kept for API compatibility, handled via CSS if needed
}

export default function ScrollReveal({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
            style={{
                width,
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
