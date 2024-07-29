"use client"

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import {useState} from "react";


export default function Navbar(props) {

    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false);

    const handleSetIsOpenOurProgram = (data) => {
        if(data.dropdown) {
            setIsOpen(prev => !prev);
        }
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
        <nav className="flex items-center justify-between py-4">
            <div>
                <Image
                    alt="Logo Tradesociety"
                    src={"/images/components/icon/Logo.svg"}
                    width={96}
                    height={40}
                />
            </div>
            <div className={clsx("relative")}>
                <ul className={clsx("flex items-center mx-auto")}>
                    {links.map((link) => (<li key={link.name} className={clsx("[&:not(:last-child)]:mr-3 text-center transition-all")} >
                        <Link href={link.dropdown ? "#" : link.href} className={clsx("text-LG/LG-Normal text-[#15345A] font-roboto hover:border-[1px] hover:border-[#C2DBF5] hover:rounded-[100px] py-2.5 px-4 transition-all flex items-center ", {
                            "bg-primary-light-color rounded-[100px] py-2.5 px-4": pathname === link.href
                        }, {
                            "bg-primary-light-color rounded-[100px] py-2.5 px-4": pathname.includes(link.hrefDetail)
                        }  )}  onClick={() => handleSetIsOpenOurProgram(link)} > {link.name} <Image src={"/images/components/illustration/arrow_down.svg"} alt={"arrow"} width={14} height={14} className={clsx(link.dropdown ? "visible" : "hidden", "ml-2")} /> </Link>
                    </li>))}


                </ul>
                <div className={clsx("p-8  bg-white rounded-[32px] shadow-2xl absolute z-30  right-[-60%] top-[120%] w-[546px]", isOpen ? "visible" : "hidden")} onMouseLeave={() => setIsOpen(false)} >
                    <Link href={"/our-program/programs/newbie"} className={clsx("flex items-center justify-between pb-8 border-b-[1px] border-[#E3EDFB] hover:translate-y-[-3px] transition-all duration-300 ")}>
                        <Image src={"/images/components/illustration/dropdown_newbie.png"} alt={"dropdown_newbie"} width={80} height={80} />
                        <div className={clsx("ml-4")}>
                            <h6 className={clsx("text-heading-8 text-[#15345A] ")}>Newbie</h6>
                            <p className={clsx(" text-Base/Base-Normal font-roboto text-font-description-color ")}>Khusus pemula belajar dari 0 dan praktek langsung menggunakan akun demo.</p>
                        </div>
                        <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"} width={24} height={24} className={clsx("ml-4")} />
                    </Link>

                    <Link href={"/our-program/programs/family"} className={clsx("flex items-center justify-between pb-8 border-b-[1px] border-[#E3EDFB] mt-8 hover:translate-y-[-3px] transition-all duration-300 ")}>
                        <Image src={"/images/components/illustration/dropdown_family.png"} alt={"dropdown_newbie"} width={80} height={80} />
                        <div className={clsx("ml-4")}>
                            <h6 className={clsx("text-heading-8 text-[#15345A] ")}>family</h6>
                            <p className={clsx(" text-Base/Base-Normal font-roboto text-font-description-color ")}>Terbuka untuk umum yang sudah memahami dasar-dasar trading dan siap menggunakan akun real.</p>
                        </div>
                        <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"} width={24} height={24} className={clsx("ml-4")} />
                    </Link>

                    <Link href={"/our-program/programs/priority"} className={clsx("flex items-center justify-between mt-8 hover:translate-y-[-3px] transition-all duration-300 ")}>
                        <Image src={"/images/components/illustration/dropdown_priority.png"} alt={"dropdown_newbie"} width={80} height={80} />
                        <div className={clsx("ml-4")}>
                            <h6 className={clsx("text-heading-8 text-[#15345A] ")}>priority</h6>
                            <p className={clsx(" text-Base/Base-Normal font-roboto text-font-description-color ")}>Eksklusif untuk trader yang ingin belajar berbagai ilmu trading lebih dalam dan detail.</p>
                        </div>
                        <Image src={"/images/components/Icon/arrow_right_up_our_program.svg"} alt={"Arrow"} width={24} height={24} className={clsx("ml-4")} />
                    </Link>
                </div>
            </div>
            {/*<div>*/}
            {/*    <Link href={"/"} className={clsx("py-2.5 px-4 bg-primary-color text-white rounded-[100px] font-roboto text-LG/LG-Strong flex items-center ")}> <span className={"mr-2.5"}>Join now</span> <Image src={"/images/components/Icon/arrow_right_up.svg"} alt={"Arrow"} width={24} height={24} /> </Link>*/}
            {/*</div>*/}
            <Button href={"/"} text={"Join now"} />
        </nav>
    )
}