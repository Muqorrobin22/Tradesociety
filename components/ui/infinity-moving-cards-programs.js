"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import TestimonialCardV2 from "@/app/_ui/Micro-Component/Testimonials/Cards/TestimonialCardV2";

export const InfiniteMovingCardsPrograms = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current.appendChild(duplicatedItem);
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            let duration;
            if (speed === "fast") {
                duration = "10s";
            } else if (speed === "normal") {
                duration = "40s";
            } else {
                duration = "80s";
            }
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex shrink-0 gap-4 py-4  flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((testimonial, idx) => (
                    <div key={testimonial.key} className={clsx("")}>
                        <TestimonialCardV2 name={testimonial.name} job={testimonial.job}
                                           bg_color={testimonial.bgColor} comments={testimonial.comment}
                                           bg_cards={testimonial.bgCards}/>
                    </div>

                ))}
            </ul>
        </div>
    );
};
