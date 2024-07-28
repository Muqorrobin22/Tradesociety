"use client"

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";


export default function Navbar(props) {

    const pathname = usePathname()

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
            <div>
                <ul className={clsx("flex items-center mx-auto")}>
                    {links.map((link) => (<li key={link.name} className={clsx("[&:not(:last-child)]:mr-3 text-center transition-all")} >
                        <Link href={link.href} className={clsx("text-LG/LG-Normal text-[#15345A] font-roboto hover:border-[1px] hover:border-[#C2DBF5] hover:rounded-[100px] py-2.5 px-4 transition-all ", {
                            "bg-primary-light-color rounded-[100px] py-2.5 px-4": pathname === link.href
                        }  )}> {link.name} </Link>
                    </li>))}


                </ul>
            </div>
            <div>
                <Link href={"/"} className={clsx("py-2.5 px-4 bg-primary-color text-white rounded-[100px] font-roboto text-LG/LG-Strong flex items-center ")}> <span className={"mr-2.5"}>Join now</span> <Image src={"/images/components/Icon/arrow_right_up.svg"} alt={"Arrow"} width={24} height={24} /> </Link>
            </div>
        </nav>
    )
}