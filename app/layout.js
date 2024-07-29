
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/app/_ui/Components/Navbar/Navbar";
import {Roboto} from "next/font/google"
import Footer from "@/app/_ui/Components/Footer/page";

const myFont = localFont({
  src: [
    {
      path: "./../public/fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: "normal",
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: "TradeSociety",
  description: "TradeSociety ",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en" className={`${myFont.className} ${roboto_init.variable}`}>
      <body className=" xl:px-[120px] ">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
