import clsx from "clsx";
import Image from "next/image";

export default function ContactUsCard({Sosmed, imageSrc}) {
    return (
        <a href={"#"}
            className={clsx("w-auto rounded-[32px] border-[1px] border-[#E3EDFB] p-[4px] relative block hover:translate-y-[-5px] transition-all duration-300 ")}>
            <div className={clsx("h-[200px] relative")}>
                <Image src={imageSrc} alt={"image"} fill={true}/>
            </div>
            <div className={clsx("p-4 bg-[#F4F8FD] rounded-bl-[32px] rounded-br-[32px] ")}>
                <h1 className={clsx("text-heading-6 text-[#000000E0] text-center ")}>{Sosmed}</h1>
            </div>
        </a>
    )
}