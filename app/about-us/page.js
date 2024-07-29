import clsx from "clsx";
import Image from "next/image";

export default function AboutUsPage() {
    return <main className={clsx("mt-10")}>
        {/* Hero Section */}
        <section
            className={clsx("relative bg-linear-gradient-hero h-[524px] px-[72px] rounded-[32px] flex items-center ")}>

            <section className={clsx("text-left  w-[500px] ")}>
                <h1 className={clsx("text-white text-heading-1 mx-auto ")}>Platform untuk para trader</h1>
                <p className={clsx("text-XL/XL-Normal text-[#F6F6F6] font-roboto text-left mx-auto  mt-2 ")}>Bukan
                    Kami memberikan peluang untuk trader pemula hingga profesional untuk bisa berhasil di industri
                    trading.</p>
            </section>

            <Image src={"/images/components/addons/Hero_addons_about_us.png"} alt={"about us hero"} fill={true}
                   className={clsx("absolute")}/>
            <Image src={"/images/components/illustration/about_us_hero.svg"} alt={""} height={486} width={500}
                   className={clsx(" ml-auto ")}/>

        </section>

        {/* Hero Section - End */}

        {/*  Why we here - Start  */}

        <section className={clsx("mt-[80px] py-[40px]")}>
            <section className={clsx("flex flex-col justify-center items-center")}>
                <p className={clsx("font-roboto text-Base/Base-Strong text-[#1761B1]  ")}>Why we here</p>
                <h3 className={clsx("text-heading-3 text-[#15345A] my-4 ")}>Bersama menuju kesuksesan di industri trading</h3>
                <p className={clsx("text-XL/XL-Normal font-roboto text-font-description-color max-w-[800px] text-center")}>Ada banyak cara untuk sukses dalam berkarir di industri trading yang belum banyak diketahui. Di sini, kami memberikan edukasi secara menyeluruh untuk sukses, tidak hanya sebagai trader, tetapi juga dalam peran profesional lainnya dalam industri trading.
                    sini!</p>

            </section>
        </section>

        {/*    Why we here - End */}

        {/*  Why we here - Start  */}

        <section className={clsx("mt-[80px] py-[40px] px-[140px] ")}>
            <div className={clsx("p-8 rounded-[32px] bg-[#F4F8FD]  flex items-center ")}>
                <Image src={"/images/components/illustration/about_us_vision.svg"} alt={"vision"} width={250}
                       height={250}/>
                <div className={clsx("ml-[64px]")}>
                    <p className={clsx("font-roboto text-Base/Base-Strong text-[#1761B1]  ")}>Vision</p>
                    <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Centralized Platform</h3>
                    <p className={clsx("text-XL/XL-Normal font-roboto text-font-description-color  text-left")}>Ada
                        Menjadi platform yang menghubungkan para trader untuk belajar, bersosialisasi, dan tumbuh menuju
                        kesuksesan di pasar finansial dan industri trading.</p>
                </div>
            </div>

            <div className={clsx("p-8 rounded-[32px] bg-[#F4F8FD]  flex items-center mt-8 ")}>

                <div className={clsx("mr-[64px]")}>
                    <p className={clsx("font-roboto text-Base/Base-Strong text-[#1761B1]  ")}>Mission</p>
                    <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Learning center and growth opportunities</h3>
                    <p className={clsx("text-XL/XL-Normal font-roboto text-font-description-color  text-left")}>
                        Menyediakan sumber belajar terbaik dari para ahli trading di berbagai instrumen finansial dan memberikan peluang bagi para trader untuk memperbesar dampak mereka di industri trading.</p>
                </div>
                <Image src={"/images/components/illustration/about_us_mission.svg"} alt={"vision"} width={250}
                       height={250}/>
            </div>
        </section>

        {/*  Why we here - End  */}

    </main>
}