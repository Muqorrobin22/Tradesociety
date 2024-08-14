import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export const HoverEffectContact = ({ items, className }) => {
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
                    className={clsx("relative group block desktop:py-1 desktop:px-0 mobile:px-1 mobile:py-0 ", item.key === 1 && "desktop:pl-1 mobile:pt-1", item.key === 4 && "desktop:pr-1 mobile:pb-1")}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className={clsx("absolute inset-0 h-full w-full bg-primary-light-color block", item.key === 1 && "desktop:rounded-tl-[32px] desktop:rounded-bl-[32px] mobile:rounded-tl-[32px] mobile:rounded-tr-[32px]", item.key === 4 && "desktop:rounded-tr-[32px] desktop:rounded-br-[32px] mobile:rounded-bl-[32px] mobile:rounded-br-[32px]" )}
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
                    <div className={clsx("bg-white  relative z-20", item.key === 1 && "desktop:rounded-tl-[32px] desktop:rounded-bl-[32px] mobile:rounded-tl-[32px] mobile:rounded-tr-[32px]", item.key === 4 && "desktop:rounded-tr-[32px] desktop:rounded-br-[32px] mobile:rounded-bl-[32px] mobile:rounded-br-[32px]")}>
                        {item.elements}
                    </div>
                </div>
            ))}
        </div>
    );
};
