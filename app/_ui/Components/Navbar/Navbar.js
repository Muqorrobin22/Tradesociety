"use client"

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import {useState} from "react";
import {fonts} from "@/app/_lib/utils/fonts/fonts";


export default function Navbar(props) {

    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false);

    const handleSetIsOpenOurProgram = (data, e) => {
        console.log("our program clicked", e);
        if(data.dropdown) {
            e.preventDefault();
            setIsOpen(prev => !prev);
        }
    }

    const handleBurgerOpen = () => {
        setBurgerOpen(prev => !prev)
    }

    const handleSetCloseOurProgram = (data) => {
        if(data.dropdown) {
            setIsOpen(false);
        }
    }


    const links = [
        {
            name: "Home",
            href: "/",
            dropdown: false
        },
        {
            name: "About us",
            href: "/about-us",
            dropdown: false
        }, {
            name: "Our programs",
            href: "/our-programs",
            hrefDetail: "/our-program/programs",
            dropdown: true
        }, {
            name: "Contact us",
            href: "/contact-us",
            dropdown: false
        },

    ]

    return (
        <nav className="flex items-center justify-between py-4 desktop:fixed mobile:fixed mobile:z-50 mobile:top-0 mobile:left-[16px] mobile:right-[16px] mobile:bg-white mobile:border-b-[1px] mobile:border-[#E3EDFB] desktop:px-[120px] desktop:z-50 desktop:left-0 desktop:right-0 desktop:top-0 ">
            <div className={clsx("mobile:order-1 desktop:order-1")}>
               <Link href={"/"}>
                   <Image
                       alt="Logo Tradesociety"
                       src={"/images/components/Icon/Logo.svg"}
                       width={96}
                       height={40}
                   />
               </Link>
            </div>
            <div className={clsx("mobile:order-3 z-50 mobile:visible desktop:hidden")}>
                <Image
                    alt="Burger Icon"
                    src={"/images/components/Icon/burger_menu.svg"}
                    width={18}
                    height={18}
                    onClick={handleBurgerOpen}
                    className={clsx("cursor-pointer")}
                />
            </div>

            {/* Start: Overlay */}

            <div className={clsx("fixed desktop:top-[70px] desktop:bottom-0 desktop:left-0 desktop:right-0 bg-[#010101BF] z-[30] ", isOpen ? "visible" : "hidden")}></div>

            {/* End: Overlay */}

            {/* Start: For Desktop */}
            <div className={clsx("desktop:relative desktop:visible desktop:block desktop:order-2 mx-auto mobile:hidden  z-40")}>


                <ul className={clsx("flex items-center mx-auto")}>
                    {links.map((link) => (
                        <li key={link.name} className={clsx("[&:not(:last-child)]:mr-3 text-center transition-all")}>
                            <Link href={link.dropdown ? "#" : link.href}
                                  className={clsx("text-LG/LG-Normal text-[#15345A] hover:border-[1px] hover:border-[#C2DBF5] hover:rounded-[100px] py-2.5 px-4 transition-all flex items-center ", {
                                      "bg-primary-light-color rounded-[100px] py-2.5 px-4": pathname === link.href
                                  }, {
                                      "bg-primary-light-color rounded-[100px] py-2.5 px-4": pathname.includes(link.hrefDetail)
                                  }, fonts.roboto)} onClick={(e) => handleSetIsOpenOurProgram(link, e)}> {link.name} <Image
                                src={"/images/components/illustration/arrow_down.svg"} alt={"arrow"} width={14}
                                height={14} className={clsx(link.dropdown ? "visible" : "hidden", "ml-2")}/> </Link>
                        </li>))}


                </ul>



                <div
                    className={clsx("p-8  bg-white rounded-[32px] shadow-2xl absolute z-30  right-[-60%] top-[120%] w-[546px]", isOpen ? "visible" : "hidden")}
                    onMouseLeave={() => setIsOpen(false)}>
                    <Link href={"/our-program/programs/newbie"}
                          className={clsx("flex items-center justify-between pb-8 border-b-[1px] border-[#E3EDFB] hover:translate-y-[-3px] transition-all duration-300 ")}>
                        <Image src={"/images/components/illustration_new/newbie_navbar_img.png"} alt={"dropdown_newbie"}
                               width={80} height={80}/>
                        <div className={clsx("ml-4")}>
                            <h6 className={clsx("text-heading-8 text-[#15345A] ")}>Newbie</h6>
                            <p className={clsx(" text-Base/Base-Normal text-font-description-color ", fonts.roboto)}>Khusus
                                pemula belajar dari 0 dan praktek langsung menggunakan akun demo.</p>
                        </div>
                        <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"} width={24}
                               height={24} className={clsx("ml-4")}/>
                    </Link>

                    <Link href={"/our-program/programs/family"}
                          className={clsx("flex items-center justify-between pb-8 border-b-[1px] border-[#E3EDFB] mt-8 hover:translate-y-[-3px] transition-all duration-300 ")}>
                        <Image src={"/images/components/illustration_new/family_navbar_img.png"} alt={"dropdown_newbie"}
                               width={80} height={80}/>
                        <div className={clsx("ml-4")}>
                            <h6 className={clsx("text-heading-8 text-[#15345A] ")}>family</h6>
                            <p className={clsx(" text-Base/Base-Normal text-font-description-color ", fonts.roboto)}>Terbuka
                                untuk umum yang sudah memahami dasar-dasar trading dan siap menggunakan akun real.</p>
                        </div>
                        <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"} width={24}
                               height={24} className={clsx("ml-4")}/>
                    </Link>

                    <Link href={"/our-program/programs/priority"}
                          className={clsx("flex items-center justify-between mt-8 hover:translate-y-[-3px] transition-all duration-300 ")}>
                        <Image src={"/images/components/illustration_new/priority_navbar_img.png"} alt={"dropdown_newbie"}
                               width={80} height={80}/>
                        <div className={clsx("ml-4")}>
                            <h6 className={clsx("text-heading-8 text-[#15345A] ")}>priority</h6>
                            <p className={clsx(" text-Base/Base-Normal text-font-description-color ", fonts.roboto)}>Eksklusif
                                untuk trader yang ingin belajar berbagai ilmu trading lebih dalam dan detail.</p>
                        </div>
                        <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"} width={24}
                               height={24} className={clsx("ml-4")}/>
                    </Link>
                </div>
            </div>
            {/* End: For Desktop */}

            {/* Start: For Mobile */}
            <div className={clsx("mobile:visible  desktop:hidden mobile:z-40 mobile:fixed mobile:left-[16px] mobile:right-[16px] top-[75px] mobile:drop-shadow-custom-cards  mobile:overflow-y-scroll mobile:bottom-0 ",  burgerOpen ? "mobile:visible" : "mobile:hidden")}>


                <ul className={clsx("flex mx-auto flex-col items-start justify-start mobile:p-8 mobile:bg-white rounded-br-[32px] rounded-bl-[32px]  ", burgerOpen ? "mobile:visible" : "mobile:hidden")}>
                    {links.map((link) => (
                        <li key={link.name} className={clsx("[&:not(:first-child)]:mt-6 text-center transition-all ")}>
                            <Link href={link.dropdown ? "#" : link.href}
                                  className={clsx("text-LG/LG-Normal text-[#15345A] hover:border-[1px] hover:border-[#C2DBF5] hover:rounded-[100px] py-2.5 px-4 transition-all flex items-center ", {
                                      "bg-primary-light-color rounded-[100px] py-2.5 px-4": pathname === link.href
                                  }, {
                                      "bg-primary-light-color rounded-[100px] py-2.5 px-4": pathname.includes(link.hrefDetail)
                                  }, fonts.roboto)} onClick={(e) => handleSetIsOpenOurProgram(link, e)}> {link.name} <Image
                                src={"/images/components/illustration/arrow_down.svg"} alt={"arrow"} width={14}
                                height={14} className={clsx(link.dropdown ? "visible" : "hidden", "ml-2")}/> </Link>
                            <div
                                className={clsx("p-8 pl-4  bg-white rounded-[32px] ", isOpen && link.dropdown  ? "visible" : "hidden")}
                                onMouseLeave={() => setIsOpen(false)}>
                                <Link href={"/our-program/programs/newbie"}
                                      className={clsx("flex items-center justify-between pb-8 border-b-[1px] border-[#E3EDFB] hover:translate-y-[-3px] transition-all duration-300 ")}>
                                    <Image src={"/images/components/illustration_new/newbie_navbar_img.png"}
                                           alt={"dropdown_newbie"}
                                           width={80} height={80}/>
                                    <div className={clsx("ml-4 text-left")}>
                                        <h6 className={clsx("text-heading-8 text-[#15345A] ")}>Newbie</h6>
                                        <p className={clsx(" text-Base/Base-Normal text-font-description-color ", fonts.roboto)}>Khusus
                                            pemula belajar dari 0 dan praktek langsung menggunakan akun demo.</p>
                                    </div>
                                    <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"}
                                           width={24}
                                           height={24} className={clsx("ml-4")}/>
                                </Link>

                                <Link href={"/our-program/programs/family"}
                                      className={clsx("flex items-center justify-between pb-8 border-b-[1px] border-[#E3EDFB] mt-8 hover:translate-y-[-3px] transition-all duration-300 ")}>
                                    <Image src={"/images/components/illustration_new/family_navbar_img.png"}
                                           alt={"dropdown_newbie"}
                                           width={80} height={80}/>
                                    <div className={clsx("ml-4 text-left break-words")}>
                                        <h6 className={clsx("text-heading-8 text-[#15345A] ")}>family</h6>
                                        <p className={clsx(" text-Base/Base-Normal text-font-description-color ", fonts.roboto)}>Terbuka
                                            untuk umum yang sudah memahami dasar-dasar trading dan siap menggunakan akun
                                            real.</p>
                                    </div>
                                    <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"}
                                           width={24}
                                           height={24} className={clsx("ml-4")}/>
                                </Link>

                                <Link href={"/our-program/programs/priority"}
                                      className={clsx("flex items-center justify-between mt-8 hover:translate-y-[-3px] transition-all duration-300 ")}>
                                    <Image src={"/images/components/illustration_new/priority_navbar_img.png"}
                                           alt={"dropdown_newbie"}
                                           width={80} height={80}/>
                                    <div className={clsx("ml-4 text-left break-words")}>
                                        <h6 className={clsx("text-heading-8 text-[#15345A] ")}>priority</h6>
                                        <p className={clsx(" text-Base/Base-Normal text-font-description-color ", fonts.roboto)}>Eksklusif
                                            untuk trader yang ingin belajar berbagai ilmu trading lebih dalam dan
                                            detail.</p>
                                    </div>
                                    <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"}
                                           width={24}
                                           height={24} className={clsx("ml-4")}/>
                                </Link>
                            </div>
                        </li>))}


                </ul>


            </div>
            {/* End: For Mobile */}
            {/*<div>*/}
            {/*    <Link href={"/"} className={clsx("py-2.5 px-4 bg-primary-color text-white rounded-[100px] font-roboto text-LG/LG-Strong flex items-center ")}> <span className={"mr-2.5"}>Join now</span> <Image src={"/images/components/Icon/arrow_right_up.svg"} alt={"Arrow"} width={24} height={24} /> </Link>*/}
            {/*</div>*/}

            <div className={clsx("mobile:ml-auto mobile:mr-4 mobile:order-2 desktop:order-3 desktop:ml-0")}>
                <Button href={"https://t.me/m/am6DU9LKNDI1"} text={"Join now"}/>
            </div>
        </nav>
    )
}