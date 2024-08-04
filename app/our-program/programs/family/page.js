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
import {useRouter} from "next/navigation";
import {familyBenefitList, priorityBenefitList, newbieBenefitList} from "@/app/_lib/const/VARIABLES";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function FamilyPage() {

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
            if (position >= 1414) {
                setScrollActiveState("jadwal_kelas");
            } else if (position >= 1132) {
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
    }, []);

    console.log("scroll active state: ", scrollActiveState)

    // Scroll Page Behaviour

    const testimonialsList = [
        {
            key: 1,
            name: "Ardas dipa",
            job: "Writer",
            comment: "Thank you so much for your help. It's  exactly what I've been looking for.",
            bgColor: "bg-secondary-gold-color"
        },{
            key: 2,
            name: "Ardas dipa",
            job: "Writer",
            comment: "Thank you so much for your help. It's  exactly what I've been looking for.",
            bgColor: "bg-secondary-gold-color"
        }
    ]

    const MateriList = [
        {
            key: 1,
            name: "Risk & Money Management",
            desc: "Kalian akan memahami cara mengatur risiko dalam trading dengan baik.",
            imgSrc: "/images/components/Icon/alert-triangle.svg"
        },
        {
            key: 2,
            name: "Trading Psychology",
            desc: "Kalian akan mempelajari salah satu hal yang paling penting dalam trading, yakni mengatur emosi dan cara mengontrol diri.",
            imgSrc: "/images/components/Icon/smile.svg"
        },
        {
            key: 3,
            name: "fundamental analysis",
            desc: "Kalian akan memahami cara menerapkan aspek-aspek analisa fundamental ketika trading.",
            imgSrc: "/images/components/Icon/activity.svg"
        },
        {
            key: 4,
            name: "Intermediate Technical Analysis",
            desc: "Kalian akan mempelajari beberapa metode analisa teknikal dan cara penerapannya.",
            imgSrc: "/images/components/Icon/Trading.svg"
        },
    ]


    const handleScrollToSection = (id) => {
        // router.push(`#${id}`);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <main className={clsx("mt-10")}>

            {/* Hero Section */}
            <section
                className={clsx("relative bg-linear-gradient-program-family desktop:h-[400px] mobile:h-[600px] desktop:px-[72px] rounded-[32px] flex desktop:items-center mobile:mt-[120px] mobile:p-8 desktop:m-0 overflow-x-hidden ")}>

                <section className={clsx("text-left  w-[550px] relative z-20 ")}>
                    <p className={clsx(" text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Family</p>
                    <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>terbuka untuk umum</h3>
                    <p className={clsx("text-XL/XL-Normal text-font-description-color  text-left", fonts.roboto)}>Untuk
                        para trader yang ingin meningkatkan profit, program ini <br/> cocok banget untuk kalian!
                    </p>
                </section>

                <Image src={"/images/components/addons/newbie_program_addons.svg"} alt={"newbie hero"} width={1300}
                       height={400}
                       className={clsx("absolute left-0 z-10 ")}/>
                {/*<Image src={"/images/components/illustration/about_us_hero.svg"} alt={""} height={486} width={500}*/}
                {/*       className={clsx(" ml-auto ")}/>*/}

                <div
                    className={clsx("absolute flex items-center desktop:right-[32px] mobile:right-[-64px] bottom-[32px] z-20")}>
                    {testimonialsList.map((testimonial, index) => (
                        <div key={testimonial.key} className={"ml-4"}>
                            <TestimonialCard name={testimonial.name} job={testimonial.job}
                                             bg_color={testimonial.bgColor} comments={testimonial.comment}
                                             bg_cards={"bg-[#E3EDFB]"}/>
                        </div>
                    ))}
                </div>

            </section>

            {/* Hero Section - End */}

            {/*  Content - Start  */}

            <section className={clsx("mt-[80px] flex justify-between relative")}>


                <section className={"desktop:basis-2/3 mobile:basis-full"}>
                    {/*  Content > Navbar - Start  */}

                    <section
                        className={clsx(" border-b-[1px] border-[#E3EDFB]  left-0 right-0  ", scrollNavbarLink && "desktop:sticky desktop:top-0 mobile:sticky mobile:top-[75px] z-30 bg-white py-6")}>
                        <ul className={clsx("flex")}>
                            <li>
                                <a href="#Description"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Description");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, scrollActiveState === "Description" ? "border-b-[2px] border-[#154377]" : "")}>Deskripsi</a>
                            </li>

                            <li className={clsx("ml-8")}>
                                <a href="#Materi"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Materi");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, scrollActiveState === "materi" ? "border-b-[2px] border-[#154377]" : "")}>Materi</a>
                            </li>

                            <li className={clsx("ml-8")}>
                                <a href="#Benefit"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Benefit");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, scrollActiveState === "benefits" ? "border-b-[2px] border-[#154377]" : "")}>Benefits</a>
                            </li>

                            <li className={clsx("ml-8")}>
                                <a href="#Jadwal_Kelas"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       handleScrollToSection("Jadwal_Kelas");
                                   }}
                                   className={clsx("inline-block  pb-2 text-Base/Base-Strong text-[#154377] ", fonts.roboto, scrollActiveState === "jadwal_kelas" ? "border-b-[2px] border-[#154377]" : "")}>Jadwal
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
                                ini cocok untuk kalian yang sudah paham dasar-dasar trading dan siap menggunakan akun
                                real. Kalian juga akan dikelilingi oleh trader-trader lain yang saling merangkul
                                layaknya keluarga.
                            </p>
                        </section>
                        {/*Deskripsi*/}

                        {/* Materi */}
                        <section className={clsx(" mt-8 pb-8 border-b-[1px] border-[#E3EDFB] ")} id={"Materi"}>
                            <h3 className={clsx("text-heading-6 text-[#15345A] my-2 ")}>Materi</h3>
                            <p className={clsx("text-XL/XL-Normal text-font-description-color  text-left", fonts.roboto)}>Beberapa
                                materi yang akan kalian dapatkan di program Family.
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
                                {familyBenefitList.map((benefit) => (
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
                            <div
                                className={clsx("mt-[24px] border-[1px] border-[#E3EDFB] rounded-[32px] grid desktop:grid-cols-2 ")}>
                                <div className={clsx("pt-4 px-8 pb-[36px] desktop:border-r-[1px] mobile:border-b-[1px]  border-[#E3EDFB]")}>
                                    <div className={"flex items-center"}>
                                        <div className={"w-[8px] h-[8px] rounded-full bg-[#277DD0] "}/>
                                        <h3 className={clsx("text-heading-9 text-[#15345A] ml-2 ")}>Kelas edukasi</h3>
                                    </div>
                                    <p className={clsx("text-Base/Base-Normal text-font-description-color", fonts.roboto)}>Belajar
                                        bersama mentor Trade Society</p>

                                    <div className={"flex items-center mt-8"}>
                                        <Image src={"/images/components/Icon/calendar.svg"} alt={"calendar"}
                                               width={18} height={18}/>
                                        <p className={clsx("text-Base/Base-Normal text-font-description-color ml-2", fonts.roboto)}>Selasa,
                                            20:00 WIB</p>
                                    </div>
                                </div>

                                <div className={clsx("pt-4 px-8 pb-[36px] ")}>
                                    <div className={"flex items-center"}>
                                        <div className={"w-[8px] h-[8px] rounded-full bg-secondary-green-color "}/>
                                        <h3 className={clsx("text-heading-9 text-[#15345A] ml-2 ")}>Live trading</h3>
                                    </div>
                                    <p className={clsx("text-Base/Base-Normal text-font-description-color", fonts.roboto)}>Trading
                                        bersama seluruh member Trade Society</p>

                                    <div className={"flex items-center mt-8"}>
                                        <Image src={"/images/components/Icon/calendar.svg"} alt={"calendar"}
                                               width={18} height={18}/>
                                        <p className={clsx("text-Base/Base-Normal text-font-description-color ml-2", fonts.roboto)}>Senin-Jumat
                                            setiap high impact news</p>
                                    </div>
                                </div>

                                <div
                                    className={clsx("pt-4 px-8 pb-[36px] border-[#E3EDFB] border-t-[1px] desktop:border-r-[1px] ")}>
                                    <div className={"flex items-center"}>
                                        <div className={"w-[8px] h-[8px] border-r-[1px]   rounded-full bg-[#F47643] "}/>
                                        <h3 className={clsx("text-heading-9 text-[#15345A] ml-2 ")}>Sharing session</h3>
                                    </div>
                                    <p className={clsx("text-Base/Base-Normal text-font-description-color", fonts.roboto)}>QnA,
                                        Tips & Tricks, How to</p>

                                    <div className={"flex items-center mt-8"}>
                                        <Image src={"/images/components/Icon/calendar.svg"} alt={"calendar"}
                                               width={18} height={18}/>
                                        <p className={clsx("text-Base/Base-Normal text-font-description-color ml-2", fonts.roboto)}>Rabu,
                                            19:00 WIB</p>
                                    </div>
                                </div>

                                <div className={clsx("pt-4 px-8 pb-[36px] border-[#E3EDFB] border-t-[1px] ")}>
                                    <div className={"flex items-center"}>
                                        <div className={"w-[8px] h-[8px] rounded-full bg-secondary-gold-color  "}/>
                                        <h3 className={clsx("text-heading-9 text-[#15345A] ml-2 ")}>Live mapping</h3>
                                    </div>
                                    <p className={clsx("text-Base/Base-Normal text-font-description-color", fonts.roboto)}>Analisa
                                        market bersama Analyst Trade Society</p>

                                    <div className={"flex items-center mt-8"}>
                                        <Image src={"/images/components/Icon/calendar.svg"} alt={"calendar"}
                                               width={18} height={18}/>
                                        <p className={clsx("text-Base/Base-Normal text-font-description-color ml-2", fonts.roboto)}>Minggu,
                                            19:00 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Jadwal Kelas */}

                    </section>

                    {/*  Content > Description - End  */}

                </section>

                <section className={"desktop:basis-1/3 mobile:basis-0 desktop:ml-[84px]  z-30 "}>
                    <div
                        className={clsx("rounded-[32px] border-[1px] border-[#E3EDFB] bg-white p-8 desktop:sticky mobile:fixed  desktop:top-[24px] drop-shadow-custom-cards ", isReactBottom ? "mobile:hidden" : " mobile:bottom-0 mobile:left-0 mobile:right-0")}>


                        <div
                            className={"pb-[24px] mb-[24px] border-b-[1px] border-[#E3EDFB] flex items-center justify-between"}>
                            <h3 className={clsx("text-heading-6 text-[#15345A] my-2 ")}>Family</h3>
                            <div className={"flex"}>
                                <Image src={"/images/components/Icon/star.svg"} alt={"Star"}
                                       width={24} height={24}/>
                                <h6 className={clsx(" text-heading-5 text-font-description-color ml-1", fonts.roboto)}>5.0</h6>
                            </div>
                        </div>
                        <div className={clsx("text-center  ")}>
                            <h1 className={clsx("mb-4 flex items-center  ")}><span
                                className={clsx(" text-heading-6", "text-secondary-green-color")}>Free</span>

                                <span
                                    className={clsx("text-font-description-color text-LG/LG-Normal ml-2", fonts.roboto)}>/ Lifetime </span>
                            </h1>
                            <Button href={"/"} text={"Gabung Kelas ini"} noIcon={false}/>
                        </div>
                    </div>
                </section>
            </section>

            {/*  Content - End  */}


            {/*  Program lain yang kamu suka - Start  */}

            <section
                className={clsx("mt-[80px] pt-8 desktop:px-[160px] mobile:px-8 desktop:pb-[60px] mobile:pb-[30px] relative ")}>
                <section className={clsx("text-center relative z-20")}>
                    <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Program lain yang sesuai dengan
                        kamu</h3>
                    <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center", fonts.roboto)}>Jangan
                        Temukan program yang sesuai dengan kemampuan dan skillmu!
                    </p>
                </section>
                <section className={clsx("mt-8 grid desktop:grid-cols-2  relative z-20 ")}>
                    <div className={"w-full"}>
                        <ProgramCardsWithoutImage benefitList={newbieBenefitList} period={"Lifetime"} price={"FREE"}
                                                  type_class={"Newbie"} href={"/our-program/programs/newbie"}/>
                    </div>
                    <div className={"w-full"}>
                        <ProgramCardsWithoutImage benefitList={priorityBenefitList} period={"Yearly"}
                                                  price={"rp 1.500.000"} type_class={"priority"}
                                                  href={"/our-program/programs/priority"}
                                                  strikethroughPrice={"Rp5.000.000"}/>
                    </div>
                </section>

                <Image src={"/images/components/addons/about_us_jadi_bagian_tim_addons.png"} alt={"addons"}
                       className={"absolute z-10"} fill={true}/>
            </section>

            {/*  Program lain yang kamu suka - End  */}

            <section
                className={clsx("mt-[60px] relative desktop:h-[216px] mobile:h-auto  desktop:px-[77px] bg-linear-gradient-faq rounded-[32px] ")}>
                <div
                    className={clsx("flex desktop:items-center desktop:justify-between mobile:flex-col desktop:flex-row  z-10 relative mobile:p-8 desktop:p-0 ")}>

                    <Image src={"/images/components/illustration/faq_join_now_revision.svg"} alt={"Join Now"}
                           width={216} height={216} className={clsx("mobile:order-3 desktop:order-1")}/>

                    <div className={clsx("desktop:ml-8  mobile:order-1 desktop:order-2 desktop:mr-auto")}>
                        <h6 className={clsx("text-heading-3 text-white mb-2")}>Ikut kelas online sekarang</h6>
                        <p className={clsx("text-white text-XL/XL-Normal ", fonts.roboto)}>Kami bantu untuk bisa profit
                            konsisten!</p>
                    </div>
                    <div className={clsx("desktop:order-3 mobile:order-2 mobile:mt-4 mobile:mb-8 desktop:my-0 ")}>
                        <Button href={"/"} type={"secondary"} text={"Hubungi kami"}/>
                    </div>
                </div>

                <Image src={"/images/components/addons/join_now_addons.png"} alt={""} height={353} width={1200}
                       className={clsx("absolute bottom-0")}/>
            </section>

        </main>
    )
}