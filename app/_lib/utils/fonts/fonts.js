import localFont from "next/font/local";
import {Inter, Roboto} from "next/font/google";


const roboto_init = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    style: "normal",
    variable: '--font-roboto-mono',
})

const inter_init = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: "normal",
    variable: "--font-inter"
})

export const fonts = {
    roboto: roboto_init.className,
    inter: inter_init.className
}