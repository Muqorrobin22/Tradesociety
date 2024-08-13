import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export const HoverEffectOurPrograms = ({ items, className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                "",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item.key}
                    className={clsx("relative group block py-2 ", item.key === 1 ? "pl-2" : "pr-2")}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className={clsx("absolute inset-0 h-full w-full  block rounded-[32px] ",
                                    item.type === "family" && "bg-linear-gradient-program-family",
                                    item.type === "priority" && "bg-linear-gradient-program-priority",
                                    item.type === "newbie" && "bg-linear-gradient-program-newbie",
                                )}
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className={"bg-white rounded-[32px]  relative z-20"}>
                        {item.elements}
                    </div>
                </div>
            ))}
        </div>
    );
};
