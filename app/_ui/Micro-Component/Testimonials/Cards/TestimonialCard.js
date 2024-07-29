import clsx from "clsx";
import Identifiers from "@/app/_ui/Micro-Component/Testimonials/Identifiers/Identifiers";

export default function TestimonialCard({ name, comments, job, bg_color }) {
    return <div className={clsx(" rounded-[32px] border-[1px] border-[#4E9AE2] p-4 max-w-[270px] bg-white ")}>
        <h4 className={clsx("text-Base/Base-Normal text-[#1761B1] font-roboto")}>{`"${comments}"`}</h4>
        <div className={clsx("flex items-center mt-4")}>

            <Identifiers color_hex={bg_color} Name={name}/>

            <div className={clsx("ml-2")}>
                <h4 className={clsx("text-Base/Base-Strong font-roboto text-[#1761B1]")}> {name} </h4>
                <p className={clsx("text-[#8BBCEE] font-roboto text-SM/SM-Normal  ")}>{job}</p>
            </div>
        </div>
    </div>
}