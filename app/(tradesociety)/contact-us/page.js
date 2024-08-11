"use client"

import clsx from "clsx";
import Image from "next/image";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import ContactUsCard from "@/app/_ui/Components/Cards/ContactusCard";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {GetReferralLinkTelegram} from "@/app/_lib/const/REFERRAL";
import {getCookie, setCookie} from "cookies-next";

export default function ContactUsPage() {

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
            params.set("ref", getCookie("referral"));
            router.push(`${pathname}?${params.toString()}`);
        }
    }, );

    const ContactList = [
        {
            key: 1,
            name: "Telegram",
            imageSrc: "/images/components/icon_new/Telegram.svg",
            rounded: "rounded-tl-[32px] rounded-bl-[32px]",
            href: `${telegramLink}`
        },{
            key: 2,
            name: "Instagram",
            imageSrc: "/images/components/icon_new/Instagram.svg",
            rounded: "",
            href: "https://www.instagram.com/tradesociety.id/"
        },{
            key: 3,
            name: "Linkedin",
            imageSrc: "/images/components/icon_new/Linkedin.svg",
            rounded: "",
            href: "https://www.linkedin.com/company/trade-society\n"
        },
        {
            key: 4,
            name: "Tiktok",
            imageSrc: "/images/components/icon_new/Tiktok.svg",
            rounded: "rounded-tr-[32px] rounded-br-[32px]",
            href: "https://www.tiktok.com/@tradesociety.id"
        },
    ]

    return (
        <main className={clsx("mt-[157px] desktop:mb-[157px] mobile:mb-[80px] desktop:px-[200px] ")}>
            <section>
                <div className={clsx("text-center desktop:mb-8")}>
                    <p className={clsx("text-SM/SM-Strong text-[#6195CF] py-[4px] px-[12px] bg-[#F3F6FC] rounded-[100px] text-center inline-block mb-4 ", fonts.roboto)}>Contact us</p>
                    <h3 className={clsx("text-heading-3 text-[#15345A] mb-4 ")}> Get in touch</h3>
                    <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center", fonts.roboto)}>
                        Any questions or remarks? Just write us a message!</p>
                </div>
                <div className={clsx("grid desktop:grid-cols-4  ")}>
                    {ContactList.map(item => (
                        <div key={item.key} className={"w-full mx-auto"}>
                            <ContactUsCard href={item.href} imageSrc={item.imageSrc} Sosmed={item.name} rounded={item.rounded} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}