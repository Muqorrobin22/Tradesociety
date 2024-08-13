import clsx from "clsx";
import Image from "next/image";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import ButtonWithoutAnimation from "@/app/_ui/Micro-Component/Button/ButtonWithoutAnimation";

export default function ProgramCards({ type_class, description_class, benefitList, price, period, href, imageSrc, strikethroughPrice = "" }) {
    return (
        <section className={clsx(" ")}>
            <div
                className={clsx("max-w-[380px] desktop:h-[850px] rounded-[32px] border-[1px] border-[#E3EDFB] p-[4px] relative overflow-hidden  ")}>
                <div className={clsx("h-[200px] relative")}>
                    <Image src={imageSrc} alt={"image"} fill={true}/>
                </div>
                <div className={clsx("p-8")}>
                    <div className={clsx("mx-auto text-center mb-10")}>
                        <h1 className={clsx("text-heading-6 text-[#15345A] mb-2 ")}> {type_class} </h1>
                        <p className={clsx("text-LG/LG-Normal text-font-description-color  text-center mx-auto", fonts.roboto)}> {description_class} </p>
                    </div>
                    <div>
                        {benefitList.map((benefit) => (
                            <div key={benefit.key} className={clsx("mb-2")}>
                                <BenefitList text={benefit.name}/>
                            </div>
                        ))}
                    </div>
                    <div
                        className={clsx("text-center desktop:absolute desktop:bottom-[48px] desktop:left-[32px] desktop:right-[32px] desktop:mt-0 mobile:mt-8 desktop:mb-0 mobile:mb-4")}>
                        <h1 className={clsx("mb-4 flex items-center justify-center ")}><span
                            className={clsx(" text-heading-6", price.toLowerCase() === "free" ? "text-secondary-green-color" : "text-[#33568B]")}>{price}</span>
                            <span
                                className={clsx("line-through text-LG/LG-Normal text-font-description-color ml-1.5", fonts.roboto)}> {strikethroughPrice} </span>
                            <span
                                className={clsx("text-font-description-color text-LG/LG-Normal ml-2", fonts.roboto)}>/ {period}</span>
                        </h1>
                        <ButtonWithoutAnimation href={href} text={"Lihat selengkapnya"} noIcon={true}/>
                    </div>
                </div>
                <div className={clsx("absolute bottom-0 left-0 right-0", type_class.toLowerCase() === "priority" ? "visible" : "hidden")}>
                    <div className={clsx("bg-[#E239141A] py-[8px] px-8 flex items-center ")}>
                        <div>
                            <Image src={"/images/components/Icon/alert-circle.svg"} alt={"Star"}
                                   width={16} height={16}/>
                        </div>
                        <div className={clsx("ml-[12px] w-full")}>
                            <p className={clsx(" font-light size-[12px] text-[#E23914] w-full mt-[-12px] ", fonts.inter)}>Harga diskon ini terbatas
                                - <span className={clsx(" font-bold ")}>Gabung sekarang!</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}