import clsx from "clsx";
import Image from "next/image";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import ContactUsCard from "@/app/_ui/Components/Cards/ContactusCard";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function ContactUsPage() {

    const ContactList = [
        {
            key: 1,
            name: "Telegram",
            imageSrc: "/images/components/icon_new/Telegram.svg",
            rounded: "rounded-tl-[32px] rounded-bl-[32px]"
        },{
            key: 2,
            name: "Instagram",
            imageSrc: "/images/components/icon_new/Instagram.svg",
            rounded: ""
        },{
            key: 3,
            name: "Linkedin",
            imageSrc: "/images/components/icon_new/Linkedin.svg",
            rounded: ""
        },
        {
            key: 4,
            name: "Tiktok",
            imageSrc: "/images/components/icon_new/Tiktok.svg",
            rounded: "rounded-tr-[32px] rounded-br-[32px]"
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
                            <ContactUsCard imageSrc={item.imageSrc} Sosmed={item.name} rounded={item.rounded} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}