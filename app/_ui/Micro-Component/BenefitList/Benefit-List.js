import clsx from "clsx";
import Image from "next/image";

export default function BenefitList({text}) {
    return (
        <div className={clsx("flex items-center justify-between pb-4 border-b-[1px] border-[#E3EDFB] ")}>
            <p className={clsx("text-LG/LG-Normal text-font-description-color font-roboto")}> {text} </p>
            <Image src={"/images/components/icon/checklist.svg"} alt={"yes"} height={18.33} width={18.33} />
        </div>
    )
}