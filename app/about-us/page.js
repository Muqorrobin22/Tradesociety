"use client"

import clsx from "clsx";
import Image from "next/image";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import { motion } from "framer-motion"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {GetReferralLinkTelegram} from "@/app/_lib/const/REFERRAL";
import {getCookie, setCookie} from "cookies-next";

export default function AboutUsPage() {

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
    }, [])

    useEffect(() => {
        if(searchParams.has("ref")) {
            setCookie("referral", searchParams.get("ref"));
        } else {
            params.set("ref", getCookie("referral"));
            router.push(`${pathname}?${params.toString()}`);
        }
    }, []);

    return <main className={clsx("mt-10")}>
        {/* Hero Section */}
        <section
            className={clsx("relative bg-linear-gradient-hero desktop:h-[524px] px-[72px] rounded-[32px] flex desktop:items-center desktop:justify-normal mobile:flex-col desktop:flex-row mobile:justify-center mobile:items-center  mobile:mt-[120px] desktop:mt-[120px] desktop:mx-[120px] overflow-hidden mobile:p-4  ")}>

            <motion.section
                initial={{ opacity: 0, translateY: "50px" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                transition={{duration: 10, type: "spring", stiffness: 150}}
                viewport={{once: true}}

                className={clsx("text-left  desktop:w-[500px] desktop:ml-10 relative z-20")}>
                <h1 className={clsx("text-white text-heading-1 mx-auto ")}>Platform untuk para trader</h1>
                <p className={clsx("text-XL/XL-Normal text-[#F6F6F6] text-left mx-auto  mt-2 ", fonts.roboto)}>Kami memberikan peluang untuk trader pemula  hingga profesional untuk bisa berhasil di  industri trading.</p>
            </motion.section>

            <Image src={"/images/components/addons_new/about_us_hero_new_addons.png"} alt={"about us hero"} fill={true}
                   className={clsx("absolute z-[10]")}/>
            <Image src={"/images/components/illustration_new/about_us_hero_image.png"} alt={"about us hero"} width={1440} height={240}
                   className={clsx("desktop:absolute desktop:bottom-0 desktop:left-0 z-[11]")}/>
            <Image src={"/images/components/illustration/about_us_hero.svg"} alt={""} height={486} width={500}
                   className={clsx(" ml-auto z-[12] ")}/>

        </section>

        {/* Hero Section - End */}

        {/*  Why we here - Start  */}

        <section className={clsx("mt-[80px] py-[40px] relative mobile:px-4 desktop:px-[120px] desktop:py-[69px]")}>
            <motion.section
                initial={{ opacity: 0, translateY: "50px" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                transition={{duration: 10, type: "spring", stiffness: 100, delay: .7}}
                viewport={{once: true}}
                className={clsx("flex flex-col justify-center items-center relative z-20")}>
                <p className={clsx(" text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Why we here</p>
                <h3 className={clsx("text-heading-3 text-[#15345A] my-4 desktop:text-left mobile:text-center ")}>Bersama menuju kesuksesan di industri trading</h3>
                <p className={clsx("text-XL/XL-Normal text-font-description-color max-w-[800px] text-center", fonts.roboto)}>Ada banyak cara untuk sukses dalam berkarir di industri trading yang belum banyak diketahui. Di sini, kami memberikan edukasi secara menyeluruh untuk sukses, tidak hanya sebagai trader, tetapi juga dalam peran profesional lainnya dalam industri trading.</p>

            </motion.section>
            {/*<Image src={"/images/components/addons/hero_cta_revision_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 top-0 left-[-120px] right-[-120px] ")} />*/}
            <Image src={"/images/components/addons_new/about_us_cta_addons.png"} alt={""} fill={true} className={clsx("absolute z-[15] top-0 left-0 ")} />
            <Image src={"/images/components/addons_new/about_us_cta_2_addons.png"} alt={""} width={1120} height={306} className={clsx("absolute z-[15] top-0 left-[50%] translate-x-[-50%] ")} />


        </section>

        {/*    Why we here - End */}

        {/*  Why we here - Start  */}

        <section className={clsx("mt-[80px] desktop:py-[40px] desktop:px-[280px] mobile:px-4 relative ")}>
            <Image src={"/images/components/addons_new/about_us_vision_addons.png"} alt={""} fill={true} className={clsx("absolute z-[15] top-0 left-0 ")} />
            <motion.div
                initial={{ opacity: 0, translateY: "50px" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
                viewport={{once: true}}
                className={clsx("p-8 rounded-[32px] bg-[#F4F8FD]  flex desktop:items-center desktop:justify-normal desktop:flex-row mobile:flex-col relative z-20 ")}>
                <Image src={"/images/components/illustration/about_us_vision_revision.svg"} alt={"vision"} width={180}
                       height={180} className={clsx("desktop:order-1 mobile:order-2 mobile:mx-auto desktop:m-0 mobile:mt-8")} />
                <div className={clsx("desktop:ml-[64px] desktop:order-2 ")}>
                    <p className={clsx(" text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Vision</p>
                    <h3 className={clsx("text-heading-5 text-[#15345A] my-2 ")}>Centralized Platform</h3>
                    <p className={clsx("text-XL/XL-Normal text-font-description-color  text-left", fonts.roboto)}>Menjadi platform yang menghubungkan para trader untuk belajar, bersosialisasi, dan tumbuh menuju kesuksesan di pasar finansial dan industri trading.</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, translateY: "50px" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                transition={{duration: 10, type: "spring", stiffness: 100, delay: .5}}
                viewport={{once: true}}

                className={clsx("p-8 rounded-[32px] bg-[#F4F8FD]  flex desktop:items-center desktop:justify-normal desktop:flex-row mobile:flex-col mt-8  relative z-20")}>

                <div className={clsx("desktop:mr-[64px]")}>
                    <p className={clsx(" text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Mission</p>
                    <h3 className={clsx("text-heading-5 text-[#15345A] my-2 ")}>Learning center and growth opportunities</h3>
                    <p className={clsx("text-XL/XL-Normal text-font-description-color  text-left", fonts.roboto)}>
                        Menyediakan sumber belajar terbaik dari para ahli trading di berbagai instrumen finansial dan memberikan peluang bagi para trader untuk memperbesar dampak mereka di industri trading.</p>
                </div>
                <Image src={"/images/components/illustration/about_us_mission.svg"} alt={"vision"} width={250}
                       height={250} className={clsx("desktop:m-0 mobile:mx-auto mobile:mt-8")} />
            </motion.div>
        </section>

        {/*  Why we here - End  */}

        {/*  Jadi bagian dari tim- Start  */}

            <section className={clsx("mt-[80px] desktop:py-[80px] mobile:py-[40px] desktop:px-[220px] mobile:px-8 relative ")}>
                <Image src={"/images/components/addons_new/about_us_bagian_dari_tim_addons.png"} alt={""} fill={true} className={clsx("absolute z-[15] top-0 left-0 ")} />
                <Image src={"/images/components/addons_new/about_us_bagian_dari_tim_2_addons.png"} alt={""} width={1200} height={900} className={clsx("absolute z-10 top-0 left-[50%] translate-x-[-50%] bottom-0 ")} />

                <div className={"relative z-20 bg-white"}>
                    <motion.div
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
                        viewport={{once: true}}
                        className={clsx("text-center")}>
                        <h3 className={clsx("text-heading-3 text-[#15345A] mb-4 ")}> Jadi bagian dari Team</h3>
                        <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center", fonts.roboto)}>
                           Bersama kita kembangkan Tradesociety</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        transition={{duration: 10, type: "spring", stiffness: 100, delay: .6}}
                        viewport={{once: true}}
                        className={clsx("mt-8 rounded-[32px] border-[1px] border-[#E3EDFB] grid desktop:grid-cols-2 ")}>
                        <div className={clsx("p-8 items-center justify-center  border-[#E3EDFB] mobile:border-b-[1px] desktop:border-b-0 ")}>
                            <div className={"text-center"}>
                                <h3 className={clsx("text-heading-6 text-[#15345A] mb-4 ")}> Mentor</h3>
                                <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center desktop:w-[350px] mx-auto ", fonts.roboto)}>
                                    Bertanggung jawab sebagai pengajar  dari kelas-kelas yang ada untuk setiap  komunitas Trade Society.</p>
                            </div>
                        </div>

                        <div className={clsx("p-8 items-center justify-center border-[#E3EDFB] border-l-[1px] ")}>
                            <div className={"text-center"}>
                                <h3 className={clsx("text-heading-6 text-[#15345A] mb-4 ")}> Analyst</h3>
                                <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center desktop:w-[350px] mx-auto ", fonts.roboto)}>
                                    Bertanggung jawab terhadap  signal trading dan market outlook  Trade society.</p>
                            </div>
                        </div>

                        <div className={clsx("p-8 items-center justify-center border-t-[1px] border-[#E3EDFB]  ")}>
                            <div className={"text-center"}>
                                <h3 className={clsx("text-heading-6 text-[#15345A] mb-4 ")}> leaders</h3>
                                <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center desktop:w-[350px] mx-auto ", fonts.roboto)}>
                                    Bertanggung jawab sebagai ketua  di seluruh komunitas Trade Society</p>
                            </div>
                        </div>

                        <div className={clsx("p-8 items-center justify-center border-t-[1px] border-[#E3EDFB] border-l-[1px] ")}>
                            <div className={"text-center"}>
                                <h3 className={clsx("text-heading-6 text-[#15345A] mb-4 ")}> consultant</h3>
                                <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center desktop:w-[350px] mx-auto ", fonts.roboto)}>
                                    Bertanggung jawab terhadap proses  onboarding calon member dan
                                    bimbingan member di komunitas.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        transition={{duration: 10, type: "spring", stiffness: 100, delay: .7}}
                        viewport={{once: true}}
                        className={clsx("mt-8 mx-auto text-center")}>
                        <div className={clsx("inline-block")}>
                            <Button href={telegramLink} text={"Hubungi kami"}/>
                        </div>
                    </motion.div>
                </div>

            </section>

        {/*  Jadi bagian dari tim- End  */}

    </main>
}