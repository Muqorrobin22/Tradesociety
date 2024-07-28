import clsx from "clsx";
import Image from "next/image";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import Button from "@/app/_ui/Micro-Component/Button/Button";

export default function ProgramCards({ type_class, description_class, benefitList, price, period, href, imageSrc, strikethroughPrice = "" }) {
    return (
        <section className={clsx(" ")}>
            <div className={clsx("max-w-[380px] rounded-[32px] border-[1px] border-[#E3EDFB] p-[4px]  ")}>
                <div className={clsx("h-[200px] relative")}>
                    <Image src={imageSrc} alt={"image"} fill={true}/>
                </div>
                <div className={clsx("p-8")}>
                    <div className={clsx("mx-auto text-center mb-10")}>
                        <h1 className={clsx("text-heading-6 text-[#15345A] mb-2 ")}> {type_class} </h1>
                        <p className={clsx("text-LG/LG-Normal font-roboto text-font-description-color  text-center mx-auto")}> {description_class} </p>
                    </div>
                    <div>
                        {benefitList.map((benefit) => (
                            <div key={benefit.key} className={clsx("mb-2")}>
                                <BenefitList text={benefit.name}/>
                            </div>
                        ))}
                    </div>
                    <div className={clsx("text-center ")}>
                        <h1 className={clsx("mb-4 flex items-center ")}><span
                            className={clsx(" text-heading-6", price.toLowerCase() === "free" ? "text-secondary-green-color" : "text-[#33568B]" )}>{price}</span> <span className={clsx("line-through text-LG/LG-Normal font-roboto text-font-description-color ml-1.5")}> {strikethroughPrice} </span> <span
                            className={clsx("text-font-description-color font-roboto text-LG/LG-Normal ml-2")}>/ {period}</span>
                        </h1>
                        <Button href={href} text={"Lihat selengkapnya"} noIcon={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
}