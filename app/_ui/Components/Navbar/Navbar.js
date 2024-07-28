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
        <nav className="flex items-center justify-between">
            <div>
                <Image
                    alt="Logo Tradesociety"
                    src={"/images/TS_PNG/TS_PNG-01.png"}
                    width={156}
                    height={50}
                />
            </div>
            <div>
                <ul className={clsx("flex items-center mx-auto")}>
                    {links.map((link) => (<li key={link.name} className={clsx("[&:not(:last-child)]:mr-6 text-center")} >
                        <Link href={link.href} className={clsx("text-LG/LG-Normal text-[#15345A] font-roboto  ", {
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