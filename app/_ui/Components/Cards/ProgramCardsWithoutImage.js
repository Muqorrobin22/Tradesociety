import clsx from "clsx";
import Image from "next/image";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function ProgramCardsWithoutImage({ type_class, benefitList, price, period, href, strikethroughPrice = "", rounded }) {
    return (
        <section className={clsx(" ")}>
            <div className={clsx(" h-[570px]  border-[1px] border-[#E3EDFB] p-[4px] relative bg-white  ", rounded )}>

                <div className={clsx("p-8")}>
                    <div className={clsx("mx-auto text-center mb-10")}>
                        <h1 className={clsx("text-heading-6 text-[#15345A] mb-2 ")}> {type_class} </h1>
                    </div>
                    <div>
                        {benefitList.map((benefit) => (
                            <div key={benefit.key} className={clsx("mb-2")}>
                                <BenefitList text={benefit.name}/>
                            </div>
                        ))}
                    </div>
                    <div className={clsx("text-center absolute bottom-[32px] left-[32px] right-[32px] ")}>
                        <h1 className={clsx("mb-4 flex items-center justify-center ")}><span
                            className={clsx(" text-heading-6", price.toLowerCase() === "free" ? "text-secondary-green-color" : "text-[#33568B]" )}>{price}</span> <span className={clsx("line-through text-LG/LG-Normal  text-font-description-color ml-1.5", fonts.roboto)}> {strikethroughPrice} </span> <span
                            className={clsx("text-font-description-color text-LG/LG-Normal ml-2", fonts.roboto)}>/ {period}</span>
                        </h1>
                        <Button href={href} text={"Lihat selengkapnya"} noIcon={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
}