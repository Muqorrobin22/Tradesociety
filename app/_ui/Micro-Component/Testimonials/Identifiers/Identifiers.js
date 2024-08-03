import clsx from "clsx";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function Identifiers({Name, color_hex }) {
    return (
        <div
            className={clsx("flex items-center justify-center p-[2px] rounded-[100%] bg-white w-[32px] h-[32px] shadow-md ")}>
            <p className={clsx(`text-LG/LG-Strong text-white ${color_hex} w-full h-full rounded-full text-center flex items-center justify-center ${fonts.roboto} `)}> {Name.charAt(0).toUpperCase()} </p>
        </div>
    )
}