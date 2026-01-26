"use client";

import { m, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    variants?: Variants;
    delay?: number;
    duration?: number;
    viewOptions?: UseInViewOptions;
}

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function ScrollReveal({
    children,
    width = "fit-content",
    className = "",
    variants = defaultVariants,
    delay = 0,
    duration = 0.5,
    viewOptions = { once: true, amount: 0.3 },
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewOptions);

    return (
        <m.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            style={{ width }}
        >
            {children}
        </m.div>
    );
}
