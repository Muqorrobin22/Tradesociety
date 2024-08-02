import clsx from "clsx";
import Image from "next/image";
import {useSelector} from "react-redux";

export default function FAQCard({onClick, activeIndex, theAnswer, theQuestion, height = "h-[200px]", idleHeight = "h-[92px]"}) {

    const showFaq = useSelector((state) => state.faq.showFaq)

    console.log("showfaq: ", showFaq)

    return (
        <div
            className={clsx(" border-[1px] border-[#E3EDFB] rounded-[32px] p-8 bg-white flex flex-col  transition-all duration-500  ", showFaq === activeIndex ? `${height}` : `${idleHeight}`)}>
            <div className={clsx("flex items-center justify-between")}>
                <h5 className={"text-XL/XL-Strong font-roboto text-[#15345A] "}>{theQuestion}</h5>
                <Image src={"/images/components/Icon/plus-circle.svg"} alt={"Plus icon"} width={24} height={24}
                       className={"hover:cursor-pointer ml-8"} onClick={onClick}/>
            </div>
            <p className={clsx("text-LG/LG-Normal font-roboto text-font-description-color mt-6", showFaq === activeIndex ? "visible" : "hidden")}> {theAnswer} </p>
        </div>
    )
}