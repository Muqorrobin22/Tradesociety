import Image from "next/image";
import clsx from "clsx";

export default function Home() {
  return <main className={clsx("mt-10")}>

  {/* Hero Section */}
    <section className={clsx("relative bg-linear-gradient-hero h-[524px] rounded-[32px] ")}>

      <Image src={"/images/components/addons/Hero_addons.png"} alt={""} height={353} width={1200} className={clsx("absolute bottom-0")} />
      <Image src={"/images/components/illustration/image_hero.svg"} alt={""} height={400} width={640} className={clsx("absolute bottom-[-150px] left-[50%] translate-x-[-50%] ")} />

      <section className={clsx("text-center pt-[64px]")}>
        <h1 className={clsx("text-white text-heading-1 w-[400px] mx-auto ")}>Sukses trading bersama  Trade Society</h1>
        <p className={clsx("text-XL/XL-Normal text-[#F6F6F6] font-roboto text-center mx-auto w-[500px] mt-2 ")}>Bukan hanya belajar, tapi juga kelilingi diri kalian dengan  orang-orang yang yang memiliki tujuan dan mindset untuk menjadi sukses.</p>
      </section>
    </section>

    {/* Hero Section - End */}

  </main>;
}
