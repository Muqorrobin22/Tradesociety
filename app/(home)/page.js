import Image from "next/image";
import clsx from "clsx";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import ProgramCards from "@/app/_ui/Components/Cards/ProgramCards";

export default function Home() {

  const newbieBenefitList = [
    {
      key: 1,
      name: "Kelas edukasi",
    },
    {
      key: 2,
      name: "Live trading",
    },
    {
      key: 3,
      name: "Sharing session",
    },
    {
      key: 4,
      name: "Group diskusi",
    }
  ]

  const familyBenefitList = [
    {
      key: 1,
      name: "Kelas edukasi",
    },
    {
      key: 2,
      name: "Live trading",
    },
    {
      key: 3,
      name: "Sharing session",
    },
    {
      key: 4,
      name: "Group diskusi",
    },
    {
      key: 5,
      name: "Group diskusi"
    }
  ]

  const priorityBenefitList = [
    {
      key: 1,
      name: "Kelas edukasi",
    },
    {
      key: 2,
      name: "Live trading",
    },
    {
      key: 3,
      name: "Sharing session",
    },
    {
      key: 4,
      name: "Group diskusi",
    },
    {
      key: 5,
      name: "Group diskusi"
    },
    {
      key: 6,
      name: "Special benefits"
    }
  ]

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


  {/*  Hero Section CTA - Start */}

    <section className={clsx("relative mt-[180px] h-[306px] flex items-center px-[100px] ")}>
      <Image src={"/images/components/addons/hero_cta_revision_addons.png"} alt={""} height={306} width={1198} className={clsx("absolute z-10 left-[50%] translate-x-[-50%]")} />
      <div className={clsx("z-20 flex justify-between items-center")}>
        <h1 className={clsx("text-primary-font-color text-heading-4 basis-2/3 ")}>
          Belajar trading <span className={clsx("text-secondary-gold-color")}>100% gratis!</span> <br/> Ikuti kelas
          online dan belajar sampai jago bersama para mentor!
        </h1>
        <div className={clsx("basis-1/3 max-w-[200px]")}>
          <Button href={"/"} type={"primary"} text={"Daftar sekarang"}/>
        </div>
      </div>
    </section>

    {/*  Hero Section CTA - End */}

    {/*  Our Program - Start */}

    <section className={clsx("mt-[80px] py-[40px] ")}>

    {/*  Our program > Text Heading - Start  */}

      <section className={clsx("flex flex-col justify-center items-center")}>
        <p className={clsx("font-roboto text-Base/Base-Strong text-[#1761B1]  ")}>Our programs</p>
        <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Belajar sesuai kemampuan</h3>
        <p className={clsx("text-XL/XL-Normal font-roboto text-font-description-color max-w-[550px] text-center")}>Bebas pilih program yang paling sesuai untuk kalian, baik  pemula ataupun berpengalaman, semuanya ada di sini!</p>

      </section>

      {/*  Our program > Text Heading - End  */}


      {/*  Our program > Cards - Start  */}

      <section className={clsx("mt-[96px] flex justify-between")}>
          <ProgramCards benefitList={newbieBenefitList} description_class={"Khusus pemula belajar dari 0 dan praktek langsung menggunakan akun demo."} period={"Lifetime"} price={"FREE"} type_class={"Newbie"} href={"/"} imageSrc={"/images/components/illustration/cards_home_1.png"} />
          <ProgramCards benefitList={familyBenefitList} description_class={"Terbuka untuk umum yang sudah memahami dasar-dasar trading dan siap menggunakan akun real."} period={"Lifetime"} price={"FREE"} type_class={"Family"}  href={"/"} imageSrc={"/images/components/illustration/cards_home_2.png"}/>
        <ProgramCards benefitList={priorityBenefitList} description_class={"Eksklusif untuk trader yang ingin belajar berbagai ilmu trading lebih dalam dan detail."} period={"Yearly"} price={"rp 1.500.000"} type_class={"priority"}  href={"/"} imageSrc={"/images/components/illustration/cards_home_3.png"} strikethroughPrice={"Rp5.000.000"}/>
      </section>

      {/*  Our program > Cards - End  */}


    </section>

    {/*  Our Program - End */}


  </main>;
}
