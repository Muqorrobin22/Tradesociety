"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export const TextGenerateEffectHome = ({ words, className, filter = true, duration = 0.5 }) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration || 1,
                delay: stagger(0.1),
            }
        );
    }, [scope]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className={clsx(" text-heading-4 opacity-0", word.includes("100") || word.includes("gratis") ? "text-secondary-gold-color" : "text-primary-font-color")}
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                        }}
                    >
                        {word} {word === "gratis!" ? <br /> : " "} {" "}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div className={cn("", className)}>
            <div className="">
                <div className=" ">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
