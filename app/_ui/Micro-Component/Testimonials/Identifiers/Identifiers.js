import clsx from "clsx";

export default function Identifiers({Name, color_hex }) {
    return (
        <div
            className={clsx("flex items-center justify-center p-[2px] rounded-[100%] bg-white w-[32px] h-[32px] shadow-md ")}>
            <p className={clsx(`text-LG/LG-Strong font-roboto text-white ${color_hex} w-full h-full rounded-full text-center flex items-center justify-center `)}> {Name.charAt(0).toUpperCase()} </p>
        </div>
    )
}