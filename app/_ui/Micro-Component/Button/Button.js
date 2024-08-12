import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import {ButtonWithMovingBorders} from "@/components/ui/moving-borders";

export default function Button({href, type = "primary", noIcon = false, text}) {
    return <div>
        <ButtonWithMovingBorders borderRadius="1.75rem">
            <a href={href} target={"_blank"}
               className={clsx("py-2.5 px-4 w-full text-center  rounded-[100px] text-LG/LG-Strong flex items-center justify-center ", fonts.roboto, type === "primary" && "bg-primary-color text-white", type === "secondary" && "bg-white border-[1px] border-secondary-gold-color text-secondary-gold-color ")}>
                <span> {text} </span>
                <div
                    className={clsx("ml-2.5", noIcon ? "hidden" : "visible", type.toLowerCase() === "secondary" ? "hidden" : "visible")}>
                    <Image src={"/images/components/Icon/arrow_right_up.svg"} alt={"Arrow"} width={24} height={24}/>
                </div>
                <div
                    className={clsx("ml-2.5", noIcon ? "hidden" : "visible", type.toLowerCase() === "primary" ? "hidden" : "visible")}>
                    <Image src={"/images/components/Icon/arrow_right_up_gold.svg"} alt={"Arrow"} width={24}
                           height={24}/></div>

            </a>
        </ButtonWithMovingBorders>

    </div>
}