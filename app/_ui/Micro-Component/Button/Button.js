import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export default function Button({href, type = "primary", noIcon = false, text}) {
    return <div>
        <Link href={href}
              className={clsx("py-2.5 px-4 text-center text-white rounded-[100px] font-roboto text-LG/LG-Strong flex items-center justify-center ", type === "primary" && "bg-primary-color")}>
            <span > {text} </span> <div className={clsx("ml-2.5", noIcon ? "hidden" : "visible")}><Image src={"/images/components/Icon/arrow_right_up.svg"}
                                                                   alt={"Arrow"} width={24} height={24}/></div> </Link>
    </div>
}