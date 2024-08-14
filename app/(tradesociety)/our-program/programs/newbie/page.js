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
        if(typeof  window !== "undefined") {
            const handleScroll = () => {
                const position = window.scrollY;
                setScrollPositionCard(position);
                setScrollPositionDescriptionBar(position)

                if(position > 3320 || position < 367) {
                    setIsReactBottom(true)
                } else {
                    setIsReactBottom(false)
                }

                if(position > 605) {
                    setScrollNavbarLink(position)
                }
                if (position >= 1360) {
                    setScrollActiveState("jadwal_kelas");
                } else if (position >= 1082) {
                    setScrollActiveState("benefits");
                } else if (position >= 705) {
                    setScrollActiveState("materi");
                } else if (position >= 510) {
                    setScrollActiveState("Description");
                } else {
                    setScrollActiveState("");
                }




                console.log("position: ", position)
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    console.log("scroll active state: ", scrollActiveState)
    console.log("isReactBottom", isReactBottom)

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
        if(typeof window !== "undefined") {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 170;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
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
        <main className={clsx("mt-10")}>

            {/* Hero Section */}
            <section
                className={clsx("relative bg-linear-gradient-program-newbie desktop:h-[400px] mobile:h-[700px] desktop:px-[60px] rounded-[32px] flex desktop:items-start mobile:mt-[100px] mobile:items-start desktop:mt-[120px] desktop:mx-[120px] mobile:mx-4 mobile:p-8 desktop:m-0 overflow-hidden ")}>

                <motion.section
                    initial={{ opacity: 0, translateY: "50px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
                    viewport={{once: true}}
                    className={clsx("text-left  w-[500px] relative z-20 ")}>
                    {/*<p className={clsx("text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Newbie</p>*/}
                    <h3 className={clsx("text-heading-3 text-white my-2 ")}>Cocok untuk yang baru mulai</h3>
                    <p className={clsx("text-XL/XL-Normal text-white  text-left", fonts.roboto)}>Jangan
                        lagi bingung mulai dari mana, karena <br/> program ini cocok untuk kalian yang baru
                        terjun <br/> ke dunia trading.
                    </p>
                </motion.section>

                {/* Start: Desktop */}
                <Image src={"/images/components/addons_new/our_programs_hero_addons.png"} alt={"newbie hero"} fill={true}
                       className={clsx("absolute left-0 z-10 desktop:block mobile:hidden")}/>
                <Image src={"/images/components/illustration_new/newbie_hero_new_illustration.svg"} alt={"newbie hero"} width={610} height={400}
                       className={clsx("absolute z-[11] desktop:right-0 desktop:bottom-0 desktop:block mobile:hidden")}/>
                <Image src={"/images/components/illustration_new/newbie_hero_new_illustration_2.svg"} alt={"newbie hero"} width={300} height={300}
                       className={clsx("absolute z-[11] desktop:right-0 desktop:bottom-0 desktop:block mobile:hidden")}/>
                <Image src={"/images/components/illustration_new/newbie_hero_new_illustration_3.svg"} alt={"newbie hero"} width={400} height={400}
                       className={clsx("absolute z-[21] desktop:right-[100px] desktop:bottom-0 desktop:block mobile:hidden")}/>

                {/* End: Desktop */}

                {/* Start: Mobile */}

                <Image src={"/images/components/responsive/mobile/addons/our_programs_hero_addons.png"} alt={"newbie hero"} fill={true}
                       className={clsx("absolute left-0 z-10 desktop:hidden mobile:block")}/>
                <Image src={"/images/components/responsive/mobile/illustration/our_programs_hero.png"} alt={"newbie hero"} width={400} height={281}
                       className={clsx("absolute left-0 z-10 desktop:hidden mobile:block mobile:w-full mobile:bottom-0 ")}/>

                {/* End: Mobile */}

                <motion.div
                    initial={{ opacity: 0, translateX: "-150px" }}
                    whileInView={{ opacity: 1, translateX: "0" }}
                    transition={{duration: 10, type: "spring", stiffness: 100, delay: .5}}
                    viewport={{once: true}}
                    className={clsx("absolute flex items-center  mobile:right-[-64px] desktop:left-[30px] desktop:bottom-[30px] mobile:bottom-[25%] z-20 ")}>
                    {/*{testimonialsList.map((testimonial, index) => (*/}
                    {/*    <div key={testimonial.key} className={"ml-4"}>*/}
                    {/*        <TestimonialCardV2 name={testimonial.name} job={testimonial.job}*/}
                    {/*                         bg_color={testimonial.bgColor} comments={testimonial.comment}*/}
                    {/*                         bg_cards={testimonial.bgCards}/>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    <div className={clsx("desktop:w-[850px] mobile:w-[500px]")}>
                        <InfiniteMovingCardsPrograms items={testimonialsList} direction="right" speed="fast" />
                    </div>
                </motion.div>

            </section>

            {/* Hero Section - End */}

            {/* Start: Mobile Only */}
            <div className={clsx("my-10")}>
                <Image src={"/images/components/responsive/mobile/addons/interceptor.png"} alt={"newbie hero"} height={1} width={428}
                       className={clsx("absolute left-0 z-10 desktop:hidden mobile:block w-full")}/>
            </div>
            {/* End: Mobile Only */}

            {/*  Content - Start  */}

            <motion.section
                initial={{ opacity: 0, translateY: "50px" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                transition={{duration: 10, type: "spring", stiffness: 100, delay: .7}}
                viewport={{once: true}}
                className={clsx("mt-[80px] flex justify-between relative desktop:px-[120px] mobile:px-4 ")}>


                <section className={"desktop:basis-2/3 mobile:basis-full"}>
                    {/*  Content > Navbar - Start  */}

                    <section
                        className={clsx(" border-b-[1px] border-[#E3EDFB]  left-0 right-0  ", scrollNavbarLink && "desktop:sticky desktop:top-[70px] mobile:sticky mobile:top-[75px] z-30 bg-white py-6")}>
                        <ul className={clsx("flex")}>
                            <li>
                                <a href="#Description"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Description");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, )}>Deskripsi</a>
                            </li>

                            <li className={clsx("ml-8")}>
                                <a href="#Materi"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Materi");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, )}>Materi</a>
                            </li>

                            <li className={clsx("ml-8")}>
                                <a href="#Benefit"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Benefit");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, )}>Benefits</a>
                            </li>

                            <li className={clsx("ml-8")}>
                                <a href="#Jadwal_Kelas"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Jadwal_Kelas");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, )}>Jadwal
                                    kelas</a>
                            </li>


                        </ul>
                    </section>

                    {/*  Content > Navbar - End  */}

                    {/*  Content > Description - Start  */}

                    <section className={clsx("mt-8 relative")}>

                        {/* Deskripsi */}
                        <section className={clsx("pb-8 border-b-[1px] border-[#E3EDFB] ")} id={"Description"}>
                            <h3 className={clsx("text-heading-6 text-[#15345A] my-2 ")}>Deskripsi</h3>
                            <p className={clsx("text-XL/XL-Normal text-font-description-color  text-left", fonts.roboto)}>Program
                                ini dibuat khusus untuk pemula yang ingin belajar trading dari 0. Tidak hanya materi,
                                tapi kalian juga akan praktek langsung menggunakan akun Demo.
                            </p>
                        </section>
                        {/*Deskripsi*/}

                        {/* Materi */}
                        <section className={clsx(" mt-8 pb-8 border-b-[1px] border-[#E3EDFB] ")} id={"Materi"}>
                            <h3 className={clsx("text-heading-6 text-[#15345A] my-2 ")}>Materi</h3>
                            <p className={clsx("text-XL/XL-Normal text-font-description-color  text-left", fonts.roboto)}>Beberapa
                                materi yang akan kalian dapatkan di program Newbie.
                            </p>

                            <div className={clsx("mt-[24px]")}>
                                {MateriList.map(materi => (
                                    <div key={materi.key} className={"mt-4"}>
                                        <Materi Desc={materi.desc} imgSrc={materi.imgSrc} Title={materi.name}/>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/*Materi*/}

                        {/* Benefit */}
                        <section className={clsx("mt-8")} id={"Benefit"}>
                            <h3 className={clsx("text-heading-6 text-[#15345A] my-2 ")}>BenefitS</h3>
                            <div className={clsx("mt-[24px]")}>
                                {newbieBenefitList.map((benefit) => (
                                    <div key={benefit.key} className={clsx("mb-2")}>
                                        <BenefitList text={benefit.name}/>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* Benefit */}

                        {/* Jadwal Kelas */}
                        <section className={clsx("mt-8")} id={"Jadwal_Kelas"}>
                            <h3 className={clsx("text-heading-6 text-[#15345A] my-2 ")}>Jadwal kelas</h3>
                            <div className={clsx("mt-[24px] border-[1px] border-[#E3EDFB] rounded-[32px] flex desktop:flex-row mobile:flex-col ")}>
                                <div className={clsx("pt-4 px-8 pb-[36px] desktop:border-r-[1px] mobile:border-b-[1px] desktop:border-b-0 border-[#E3EDFB] basis-1/3 ")}>
                                    <div className={"flex items-center"}>
                                        <div className={"w-[8px] h-[8px] rounded-full bg-[#277DD0] "}/>
                                        <h3 className={clsx("text-heading-9 text-[#15345A] ml-2 ")}>Kelas edukasi</h3>
                                    </div>
                                    <p className={clsx("text-Base/Base-Normal text-font-description-color", fonts.roboto)}>Belajar
                                        bersama mentor Trade Society</p>

                                    <div className={"flex items-center mt-8"}>
                                        <Image src={"/images/components/Icon/calendar.svg"} alt={"calendar"}
                                               width={18} height={18}/>
                                        <p className={clsx("text-Base/Base-Normal text-font-description-color ml-2", fonts.roboto)}>Senin,
                                            20:00 WIB</p>
                                    </div>
                                </div>

                                <div className={clsx("pt-4 px-8 pb-[36px] desktop:border-r-[1px] mobile:border-b-[1px] desktop:border-b-0 border-[#E3EDFB] basis-1/3 ")}>
                                    <div className={"flex items-center"}>
                                        <div className={"w-[8px] h-[8px] rounded-full bg-secondary-green-color "}/>
                                        <h3 className={clsx("text-heading-9 text-[#15345A] ml-2 ")}>Live trading</h3>
                                    </div>
                                    <p className={clsx("text-Base/Base-Normal text-font-description-color", fonts.roboto)}>Trading
                                        bersama seluruh member Trade Society</p>

                                    <div className={"flex items-start mt-8"}>
                                        <Image src={"/images/components/Icon/calendar.svg"} alt={"calendar"}
                                               width={18} height={18}/>
                                        <p className={clsx("text-Base/Base-Normal text-font-description-color ml-2", fonts.roboto)}>1x
                                            seminggu mengikuti high impact news</p>
                                    </div>
                                </div>

                                <div className={clsx("pt-4 px-8 pb-[36px] basis-1/3")}>
                                    <div className={"flex items-center"}>
                                        <div className={"w-[8px] h-[8px] rounded-full bg-secondary-gold-color "}/>
                                        <h3 className={clsx("text-heading-9 text-[#15345A] ml-2 ")}>Sharing session</h3>
                                    </div>
                                    <p className={clsx("text-Base/Base-Normal text-font-description-color", fonts.roboto)}>QnA,
                                        Tips & Tricks, How to</p>

                                    <div className={"flex items-center mt-8"}>
                                        <Image src={"/images/components/Icon/calendar.svg"} alt={"calendar"}
                                               width={18} height={18}/>
                                        <p className={clsx("text-Base/Base-Normal text-font-description-color ml-2", fonts.roboto)}>Rabu,
                                            20:00 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Jadwal Kelas */}

                    </section>

                    {/*  Content > Description - End  */}

                </section>

                <section className={"  desktop:basis-1/3 mobile:basis-0 desktop:ml-[84px]  z-30 "}>
                    <div
                        className={clsx("rounded-[32px] border-[1px] border-[#E3EDFB] bg-white p-8 desktop:sticky mobile:fixed  desktop:top-[94px] drop-shadow-custom-cards ", isReactBottom && isReactBottom ? "mobile:hidden desktop:visible desktop:block" : " mobile:bottom-0 mobile:left-0 mobile:right-0")}>


                        <div
                            className={"pb-[24px] mb-[24px] border-b-[1px] border-[#E3EDFB] flex items-center justify-between"}>
                            <h3 className={clsx("text-heading-6 text-[#15345A] my-2 ")}>Newbie</h3>
                            <div className={"flex items-center"}>
                                <Image src={"/images/components/Icon/star.svg"} alt={"Star"}
                                       width={24} height={24}/>
                                <h6 className={clsx(" text-heading-5/2 text-font-description-color ml-1", fonts.roboto)}>5.0</h6>
                            </div>
                        </div>
                        <div className={clsx("text-center  ")}>
                            <h1 className={clsx("mb-4 flex items-center  ")}><span
                                className={clsx(" text-heading-6", "text-secondary-green-color")}>Free</span>

                                <span
                                    className={clsx("text-font-description-color text-LG/LG-Normal ml-2", fonts.roboto)}>/ Lifetime </span>
                            </h1>
                            <Button href={telegramLink} text={"Gabung Kelas ini"} noIcon={false}/>
                        </div>
                    </div>
                </section>
            </motion.section>

            {/*  Content - End  */}


            {/*  Program lain yang kamu suka - Start  */}

            <section
                className={clsx("mt-[80px] pt-8 desktop:px-[120px] mobile:px-8 desktop:pb-[60px] mobile:pb-[30px] relative ")}>
                <motion.section
                    initial={{ opacity: 0, translateY: "50px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={{duration: 10, type: "spring", stiffness: 100, delay: .5}}
                    viewport={{once: true}}
                    className={clsx("text-center relative z-20")}>
                    <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Program lain yang sesuai dengan
                        kamu</h3>
                    <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center", fonts.roboto)}>Jangan
                        Temukan program yang sesuai dengan kemampuan dan skillmu!
                    </p>
                </motion.section>
                <section className={clsx("mt-8  relative z-20 desktop:px-[160px] ")}>

                    <HoverEffectOurPrograms items={ProgramLainList} className={clsx("grid desktop:grid-cols-2")} />

                </section>

                <motion.section
                    initial={{ opacity: 0, translateY: "50px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
                    viewport={{once: true}}
                    className={clsx("mt-[60px] relative desktop:h-[216px] mobile:h-auto  desktop:px-[77px] desktop:mx-[40px] bg-linear-gradient-faq rounded-[32px] z-20 ")}>
                    <div
                        className={clsx("flex desktop:items-center desktop:justify-between mobile:flex-col desktop:flex-row  z-10 relative mobile:p-8 desktop:p-0 ")}>

                        <Image src={"/images/components/illustration/faq_join_now_revision.svg"} alt={"Join Now"}
                               width={216} height={216} className={clsx("mobile:order-3 desktop:order-1")}/>

                        <div className={clsx("desktop:ml-8  mobile:order-1 desktop:order-2 desktop:mr-auto")}>
                            <h6 className={clsx("text-heading-3 text-white mb-2")}>Ikut kelas online sekarang</h6>
                            <p className={clsx("text-white text-XL/XL-Normal ", fonts.roboto)}>Kami bantu untuk bisa
                                profit
                                konsisten!</p>
                        </div>
                        <div className={clsx("desktop:order-3 mobile:order-2 mobile:mt-4 mobile:mb-8 desktop:my-0 ")}>
                            <Button href={telegramLink} type={"secondary"} text={"Hubungi kami"}/>
                        </div>
                    </div>

                    <Image src={"/images/components/addons/join_now_addons.png"} alt={""} height={353} width={1200}
                           className={clsx("absolute bottom-0")}/>
                </motion.section>


                <Image src={"/images/components/addons_new/our_programs_program_lain_addons.png"} alt={"addons"}
                       className={"absolute z-10 desktop:block mobile:hidden"} fill={true}/>
                <Image src={"/images/components/addons_new/our_programs_program_lain_2_addons.png"} alt={"addons"}
                       className={"absolute z-10 left-[140px] top-0 desktop:block mobile:hidden "} width={1200} height={670}/>


                <Image src={"/images/components/responsive/mobile/addons/our_program_program_lain_addons.png"} alt={"addons"}
                       className={"absolute z-10 desktop:hidden mobile:block"} fill={true}/>
            </section>

            {/*  Program lain yang kamu suka - End  */}


        </main>
    )
}