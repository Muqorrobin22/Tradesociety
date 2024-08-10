import clsx from "clsx";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import {setShowFaq} from "@/app/_lib/store/features/faqslices/faqSlices";

export default function FAQCard({onClick, activeIndex, theAnswer, theQuestion, height = "h-[200px]", idleHeight = "h-[92px]"}) {
    const dispatch = useDispatch()

    const showFaq = useSelector((state) => state.faq.showFaq)

    console.log("showfaq: ", showFaq)

    return (
        <div
            className={clsx(" border-[1px] border-[#E3EDFB] rounded-[32px] p-8 bg-white flex flex-col  transition-all duration-500  ", showFaq === activeIndex ? `${height}` : `${idleHeight}`)}>
            <div className={clsx("flex items-center justify-between")}>
                <h5 className={clsx("text-XL/XL-Strong text-[#15345A] ", fonts.roboto)}>{theQuestion}</h5>
                <Image src={"/images/components/Icon/plus-circle.svg"} alt={"Plus icon"} width={24} height={24}
                       className={clsx("hover:cursor-pointer ml-8", showFaq === activeIndex ? "hidden" : "visible")} onClick={onClick}/>
                <Image src={"/images/components/icon_new/minus_circle_icon.svg"} alt={"Minus icon"} width={24} height={24}
                       className={clsx("hover:cursor-pointer ml-8", showFaq === activeIndex ? "visible" : "hidden")} onClick={() => dispatch(setShowFaq(true))}/>
            </div>
            <p className={clsx("text-LG/LG-Normal text-font-description-color mt-6", fonts.roboto, showFaq === activeIndex ? "visible" : "hidden")}> {theAnswer} </p>
        </div>
    )
}