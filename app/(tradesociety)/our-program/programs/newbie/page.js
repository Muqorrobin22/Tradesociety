"use client";

import clsx from "clsx";
import Image from "next/image";
import TestimonialCard from "@/app/_ui/Micro-Component/Testimonials/Cards/TestimonialCard";
import Materi from "@/app/_ui/Micro-Component/Lists/Materi/Materi";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import ProgramCardsWithoutImage from "@/app/_ui/Components/Cards/ProgramCardsWithoutImage";
import ProgramCards from "@/app/_ui/Components/Cards/ProgramCards";
import {useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {familyBenefitList, newbieBenefitList, priorityBenefitList} from "@/app/_lib/const/VARIABLES";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import TestimonialCardV2 from "@/app/_ui/Micro-Component/Testimonials/Cards/TestimonialCardV2";
import { motion } from "framer-motion"
import {GetReferralLinkTelegram} from "@/app/_lib/const/REFERRAL";
import {getCookie, hasCookie, setCookie} from "cookies-next";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {InfiniteMovingCardsPrograms} from "@/components/ui/infinity-moving-cards-programs";
import {HoverEffectOurPrograms} from "@/components/ui/card-hover-effect-our-programs";

export default function NewbiePage() {

    // Router Handling
    // const router = useRouter();

    // Router Handling

    // Scroll Page Behaviour

    const [scrollPositionCard, setScrollPositionCard] = useState(0);
    const [scrollPositionDescriptionBar, setScrollPositionDescriptionBar] = useState(0);
    const [scrollActiveState, setScrollActiveState] = useState("");
    const [scrollNavbarLink, setScrollNavbarLink] = useState(0);
    const [isReactBottom, setIsReactBottom] = useState(true);

    useEffect(() => {
        // if(typeof  window !== "undefined") {
        //     const handleScroll = () => {
        //         const position = window.scrollY;
        //         // setScrollPositionCard(position);
        //         // setScrollPositionDescriptionBar(position)
        //
        //         if(position > 3320 || position < 367) {
        //             setIsReactBottom(true)
        //         } else {
        //             setIsReactBottom(false)
        //         }
        //
        //         if(position > 605) {
        //             setScrollNavbarLink(position)
        //         }
        //         if (position >= 1360) {
        //             setScrollActiveState("jadwal_kelas");
        //         } else if (position >= 1082) {
        //             setScrollActiveState("benefits");
        //         } else if (position >= 705) {
        //             setScrollActiveState("materi");
        //         } else if (position >= 510) {
        //             setScrollActiveState("Description");
        //         } else {
        //             setScrollActiveState("");
        //         }
        //
        //
        //
        //
        //         console.log("position: ", position)
        //     };
        //
        //     window.addEventListener('scroll', handleScroll);
        //
        //     return () => {
        //         window.removeEventListener('scroll', handleScroll);
        //     };
        // }
    }, []);

    // console.log("scroll active state: ", scrollActiveState)
    // console.log("window type: ", typeof window)

    console.log()

    // Scroll Page Behaviour

    const testimonialsList = [
        {
            key: 1,
            name: "Muhammad Irsal Hadi",
            job: "Writer",
            comment: "Metode Pembelajarannya mantap dan mudah dipahami.",
            bgColor: "bg-secondary-gold-color",
            bgCards: "bg-[#277DD099] text-white"
        },{
            key: 2,
            name: "Achmad Akbar Alfarizzy",
            job: "Writer",
            comment: "Sistem pembelajarannya bagus,  materi basic tapi daging banget isinya",
            bgColor: "bg-secondary-gold-color",
            bgCards: "bg-[#277DD099] text-white"
        }, {
            key: 3,
            name: "Khiar Tsany Fiyantasib",
            job: "Writer",
            comment: "Semua mentor sangat baik. Metode yang diajarkan gampang dimengerti.",
            bgColor: "bg-secondary-gold-color",
            bgCards: "bg-[#277DD099] text-white"
        }
    ]

    const MateriList = [
        {
            key: 1,
            name: "Basic Market Analysis",
            desc: "Kalian akan mempelajari dasar-dasar dan cara penerapan dari analisa teknikal dan fundamental.",
            imgSrc: "/images/components/Icon/trending-up.svg"
        },
        {
            key: 2,
            name: "Risk & Money Management",
            desc: "Kalian akan memahami cara mengatur risiko dalam trading dengan baik.",
            imgSrc: "/images/components/Icon/alert-triangle.svg"
        },
        {
            key: 3,
            name: "Trading Psychology",
            desc: "Kalian akan mempelajari salah satu hal yang paling penting dalam trading, yakni mengatur emosi dan cara mengontrol diri.",
            imgSrc: "/images/components/Icon/smile.svg"
        },
    ]

    const ProgramLainList = [
        {
            key: 1,
            type: "family",
            elements: <motion.div
                initial={{opacity: 0, translateY: "50px"}}
                whileInView={{opacity: 1, translateY: "0"}}
                transition={{duration: 10, type: "spring", stiffness: 100, delay: .7}}
                viewport={{once: true}}
                className={"w-full"}>
                <ProgramCardsWithoutImage benefitList={familyBenefitList} period={"Lifetime"} price={"FREE"}
                                          type_class={"Family"} href={"/our-program/programs/family"}
                                          rounded={"desktop:rounded-tl-[32px] desktop:rounded-bl-[32px] desktop:rounded-tr-[0] mobile:rounded-tl-[32px] mobile:rounded-tr-[32px] "}/>
            </motion.div>
        },
        {
            key: 2,
            type: "priority",
            elements: <motion.div
                initial={{opacity: 0, translateY: "50px"}}
                whileInView={{opacity: 1, translateY: "0"}}
                transition={{duration: 10, type: "spring", stiffness: 100, delay: .9}}
                viewport={{once: true}}
                className={"w-full"}>
                <ProgramCardsWithoutImage benefitList={priorityBenefitList} period={"Yearly"}
                                          price={"rp 1.500.000"} type_class={"priority"}
                                          href={"/our-program/programs/priority"}
                                          strikethroughPrice={"Rp5.000.000"}
                                          rounded={" mobile:rounded-bl-[32px] mobile:rounded-br-[32px] desktop:rounded-bl-[0] desktop:rounded-tr-[32px] desktop:rounded-br-[32px]  "}/>
            </motion.div>
        }
    ]


    const handleScrollToSection = (id) => {
        // router.push(`#${id}`);
        // if(typeof window !== "undefined") {
        //     const element = document.getElementById(id);
        //     if (element) {
        //         const headerOffset = 170;
        //         const elementPosition = element.getBoundingClientRect().top;
        //         const offsetPosition = elementPosition + window.scrollY - headerOffset;
        //
        //         window.scrollTo({
        //             top: offsetPosition,
        //             behavior: "smooth",
        //         });
        //     }
        // }
    };

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    // End of: Route Params

    // Start of: Redux
    const router = useRouter();

    const [telegramLink, setTelegramLink] = useState("");

    // console.log("search params: ", searchParams.get("ref"))

    useEffect(() => {
        setTelegramLink(GetReferralLinkTelegram(searchParams.get("ref") || getCookie("referral") || ""))
    }, [searchParams])

    useEffect(() => {
        if(searchParams.has("ref")) {
            setCookie("referral", searchParams.get("ref"));
        } else {
            if(hasCookie("referral")) {
                params.set("ref", getCookie("referral"));
                router.push(`${pathname}?${params.toString()}`);
            }

        }
    }, );

    return (
        <h1 className={"mt-20"}>testing</h1>
    )
}