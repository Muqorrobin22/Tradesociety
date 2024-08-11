import clsx from "clsx";
import Identifiers from "@/app/_ui/Micro-Component/Testimonials/Identifiers/Identifiers";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function TestimonialCard({ name, comments, job, bg_color, bg_cards = "bg-white" }) {
    return <div className={clsx(`relative rounded-[32px]  p-4 desktop:min-w-[270px] desktop:max-w-[270px] mobile:w-full ${bg_cards} desktop:max-h-[140px] desktop:min-h-[138px] shadow-md `)}>
        <h4 className={clsx("text-Base/Base-Normal text-[#1761B1]", fonts.roboto)}>{`"${comments}"`}</h4>
        <div className={clsx("flex items-center absolute bottom-[15px] ")}>

            <Identifiers color_hex={bg_color} Name={name}/>

            <div className={clsx("ml-2")}>
                <h4 className={clsx("text-Base/Base-Strong text-[#1761B1]", fonts.roboto)}> {name} </h4>
                {/*<p className={clsx("text-[#8BBCEE] text-SM/SM-Normal  ", fonts.roboto)}>{job}</p>*/}
            </div>
        </div>
    </div>
}