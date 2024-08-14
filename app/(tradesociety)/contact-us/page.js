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
import {HoverEffectContact} from "@/components/ui/card-hover-effect-contact";

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
            elements: <ContactUsCard href={telegramLink} imageSrc={"/images/components/icon_new/Telegram.svg"} Sosmed={"Telegram"} rounded={"desktop:rounded-tl-[32px] desktop:rounded-bl-[32px] mobile:rounded-tl-[32px] mobile:rounded-tr-[32px]"} />
        },{
            key: 2,
            elements:  <ContactUsCard href={"https://www.instagram.com/tradesociety.id/"} imageSrc={"/images/components/icon_new/Instagram.svg"} Sosmed={"Instagram"} rounded={""} />
        },{
            key: 3,
            elements: <ContactUsCard href={"https://www.linkedin.com/company/trade-society"} imageSrc={"/images/components/icon_new/Linkedin.svg"} Sosmed={"Linkedin"} rounded={""} />
        },
        {
            key: 4,
            elements: <ContactUsCard href={"https://www.tiktok.com/@tradesociety.id"} imageSrc={"/images/components/icon_new/Tiktok.svg"} Sosmed={"Tiktok"} rounded={"desktop:rounded-tr-[32px] desktop:rounded-br-[32px] mobile:rounded-bl-[32px] mobile:rounded-br-[32px]"} />
        },
    ]

    return (
        <main className={clsx("mt-[100px] desktop:mb-[157px] mobile:mb-[80px] desktop:px-[200px] desktop:mx-0 mobile:mx-4 ")}>
            <section>
                <div className={clsx("text-center desktop:mb-8 mobile:mb-4")}>
                    <p className={clsx("text-Base/Base-Strong text-[#1761B1]     text-center inline-block desktop:mb-4 mobile:mb-1 ", fonts.roboto)}>Contact us</p>
                    <h3 className={clsx("text-heading-3 text-[#15345A] desktop:mb-4 mobile:mb-1 ")}> Get in touch</h3>
                    <p className={clsx("text-XL/XL-Normal text-font-description-color  text-center", fonts.roboto)}>
                        Any questions or remarks? Just write us a message!</p>
                </div>
                <div className={clsx(" ")}>
                    {/*{ContactList.map(item => (*/}
                    {/*    <div key={item.key} className={"w-full mx-auto"}>*/}
                    {/*        <ContactUsCard href={item.href} imageSrc={item.imageSrc} Sosmed={item.name} rounded={item.rounded} />*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    <HoverEffectContact items={ContactList} className={clsx("grid desktop:grid-cols-4")}  />
                </div>
            </section>
        </main>
    )
}