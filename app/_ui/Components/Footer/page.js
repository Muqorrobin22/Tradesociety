"use client"
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import {useEffect, useState} from "react";
import {GetReferralLinkTelegram} from "@/app/_lib/const/REFERRAL";
import {getCookie, hasCookie, setCookie} from "cookies-next";

export default function Footer() {

    // const pathname = usePathname()

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
            href: "/our-program/programs/priority",
            dropdown: true
        }, {
            name: "Contact us",
            href: "/contact-us",
            dropdown: false
        },

    ]

    // Start of: Route Params

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

    // useEffect(() => {
    //     if(searchParams.has("ref")) {
    //         setCookie("referral", searchParams.get("ref"));
    //     } else {
    //         if(hasCookie("referral")) {
    //             params.set("ref", getCookie("referral"));
    //             router.push(`${pathname}?${params.toString()}`);
    //         }
    //
    //     }
    // }, );

    return (
        <footer className="footer desktop:px-[120px] desktop:py-8 mobile:py-8 mobile:w-auto rounded-tl-[32px] rounded-tr-[32px] border-[1px] border-[#E3EDFB] ">
            <div className="container flex desktop:items-center desktop:justify-between mobile:flex-col mobile:justify-center mobile:items-center mobile:mx-auto desktop:flex-row ">
                <div>
                    <Link href={"/"}>
                        <Image
                            alt="Logo Tradesociety"
                            src={"/images/components/Icon/Logo.svg"}
                            width={96}
                            height={40}
                        />
                    </Link>
                </div>
                <div>
                    <ul className={clsx("flex items-center mx-auto mobile:w-auto mobile:mt-[24px] mobile:flex-wrap mobile:justify-center")}>
                        {links.map((link) => (
                            <li key={link.name} className={clsx("desktop:[&:not(:last-child)]:mr-6 text-center mobile:[&:not(:last-child)]:mr-[24px] mobile:my-1 desktop:w-auto")}>
                                <Link href={link.href}
                                      className={clsx("text-LG/LG-Normal text-[#15345A] ", fonts.roboto)}> {link.name} </Link>
                            </li>))}


                    </ul>
                </div>
                <div
                    className={clsx("flex desktop:items-center desktop:justify-between mobile:justify-center mobile:mt-[26px]")}>
                    <a href={telegramLink} target="_blank" className={clsx("mr-4")}><Image
                        src={"/images/components/Icon/telegram.svg"} alt={"Telegram Icon"} width={24} height={24}/></a>
                    <a href="https://www.instagram.com/tradesociety.id/" target="_blank" className={clsx("mr-4")}><Image
                        src={"/images/components/Icon/instagram.svg"} alt={"Instagram Icon"} width={24}
                        height={24}/></a>
                    <a href="https://www.linkedin.com/company/trade-society" target="_blank" className={clsx("mr-4")}><Image src={"/images/components/Icon/linkedin.svg"}
                                                                          alt={"Linkedin Icon"} width={24} height={24}/></a>
                    <a href="https://www.tiktok.com/@tradesociety.id" target="_blank" className={clsx()}><Image src={"/images/components/icon_new/Tiktok_footer.svg"}
                                                                          alt={"Linkedin Icon"} width={24} height={24}/></a>

                </div>
            </div>
            <div className={"text-center mt-[32px] mx-auto"}>
                <p className={clsx(" text-LG/LG-Normal text-[#00000073] mx-auto", fonts.roboto)}>© 2024 Trade Society. All rights reserved.</p>
            </div>
        </footer>
    )
}