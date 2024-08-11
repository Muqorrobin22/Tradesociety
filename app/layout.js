

import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/app/_ui/Components/Navbar/Navbar";
import {Roboto, Inter} from "next/font/google"
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


export const metadata = {
  title: "TradeSociety",
  description: "TradeSociety ",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en" className={`${myFont.className} `}>
      <body className=" desktop:px-[0] mobile:px-[16px]  ">
          <Navbar />
          {children}
          {/*<Footer />*/}
      </body>
    </html>
  );
}
