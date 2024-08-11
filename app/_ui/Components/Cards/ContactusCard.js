import clsx from "clsx";
import Image from "next/image";

export default function ContactUsCard({Sosmed, imageSrc, rounded, href}) {
    return (
        <a href={href} target="_blank"
            className={clsx("w-auto  border-[1px] border-[#E3EDFB]  relative block hover:translate-y-[-5px] transition-all duration-300 p-8 ", rounded)}>
            <div className={clsx("relative my-auto ")}>
                <Image src={imageSrc} alt={Sosmed} width={125} height={141} className={clsx('mx-auto my-auto')}  />
            </div>
            <div className={clsx("p-4 rounded-bl-[32px] rounded-br-[32px] mt-4 ",
                "")}>
                <h1 className={clsx("text-heading-6 text-[#000000E0] text-center ")}>{Sosmed}</h1>
            </div>
        </a>
    )
}