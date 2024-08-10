import clsx from "clsx";
import Identifiers from "@/app/_ui/Micro-Component/Testimonials/Identifiers/Identifiers";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function TestimonialCardV2({ name, comments, job, bg_color, bg_cards = "bg-white" }) {
    return <div className={clsx(` rounded-[32px]  p-4 desktop:max-w-[270px] mobile:w-full ${bg_cards} `)}>
        <h4 className={clsx("text-Base/Base-Normal ", fonts.roboto)}>{`"${comments}"`}</h4>
        <div className={clsx("flex items-center mt-4")}>

            <Identifiers color_hex={bg_color} Name={name}/>

            <div className={clsx("ml-2")}>
                <h4 className={clsx("text-Base/Base-Strong ", fonts.roboto)}> {name} </h4>
                {/*<p className={clsx(" text-SM/SM-Normal  ", fonts.roboto)}>{job}</p>*/}
            </div>
        </div>
    </div>
}