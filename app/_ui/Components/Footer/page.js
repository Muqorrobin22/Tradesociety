"use client"
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Footer() {

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
        <footer className="footer">
            <div className="container flex items-center justify-between">
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
                        {links.map((link) => (
                            <li key={link.name} className={clsx("[&:not(:last-child)]:mr-6 text-center")}>
                                <Link href={link.href}
                                      className={clsx("text-LG/LG-Normal text-[#15345A] font-roboto  ")}> {link.name} </Link>
                            </li>))}


                    </ul>
                </div>
                <div className={clsx("flex items-center justify-between")}>
                    <a href="#" className={clsx("mr-4")}><Image src={"/images/components/Icon/telegram.svg"} alt={"Telegram Icon"} width={24} height={24} /></a>
                    <a href="#" className={clsx("mr-4")}><Image src={"/images/components/Icon/instagram.svg"} alt={"Instagram Icon"} width={24} height={24} /></a>
                    <a href="#" className={clsx()}><Image src={"/images/components/Icon/linkedin.svg"} alt={"Linkedin Icon"} width={24} height={24} /></a>
                </div>
            </div>
            <div className={"text-center"}>
                <p className={clsx("font-roboto text-LG/LG-Normal text-[#00000073] mx-auto")}>© 2024 [Company name]. All rights reserved.</p>
            </div>
        </footer>
    )
}