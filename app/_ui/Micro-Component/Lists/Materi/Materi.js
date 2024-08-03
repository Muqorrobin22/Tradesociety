import clsx from "clsx";
import Image from "next/image";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function Materi({ imgSrc, Title, Desc }) {
    return <div className={clsx("flex items-center")}>
        <Image src={imgSrc} alt={"up"} height={20} width={20}/>
        <div className={"ml-4"}>
            <h3 className={clsx("text-heading-9 text-[#15345A] mb-1 ")}>{Title}</h3>
            <p className={clsx("text-LG/LG-Normal text-font-description-color  text-left", fonts.roboto)}> {Desc}
            </p>
        </div>
    </div>
}