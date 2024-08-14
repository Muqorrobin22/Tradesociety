"use client"

import Image from "next/image";
import clsx from "clsx";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import ProgramCards from "@/app/_ui/Components/Cards/ProgramCards";
import Identifiers from "@/app/_ui/Micro-Component/Testimonials/Identifiers/Identifiers";
import TestimonialCard from "@/app/_ui/Micro-Component/Testimonials/Cards/TestimonialCard";
import {useEffect, useState} from "react";
import FAQCard from "@/app/_ui/Micro-Component/FAQ/FAQCard";
import {useDispatch} from "react-redux";
import {setShowFaq} from "@/app/_lib/store/features/faqslices/faqSlices";
import {familyBenefitList, newbieBenefitList, priorityBenefitList} from "@/app/_lib/const/VARIABLES";
import {fonts} from "@/app/_lib/utils/fonts/fonts";
import { motion } from "framer-motion"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {GetReferralLinkTelegram} from "@/app/_lib/const/REFERRAL";
import {getCookie, setCookie} from "cookies-next";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-cards";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {TextGenerateEffectHome} from "@/components/ui/text-generate-effect-home";

export default function Home() {

  // const [showFaq, setShowFaq] = useState(false);
  const dispatch = useDispatch()

  // Start of: Route Params

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  // End of: Route Params

  // Start of: Redux
  const router = useRouter();

  const [telegramLink, setTelegramLink] = useState("");

  // console.log("search params: ", searchParams.get("ref"))

  useEffect(() => {
    setTelegramLink(GetReferralLinkTelegram(searchParams.get("ref") || getCookie("referral") || ""))
  }, [searchParams])

  useEffect(() => {
    if(searchParams.has("ref")) {
      setCookie("referral", searchParams.get("ref"));
    } else {
      if(getCookie("referral")) {
        params.set("ref", getCookie("referral"));
        router.push(`${pathname}?${params.toString()}`);
      }

    }
  }, );


  const testimonialsList = [
    {
      key: 1,
      name: "Jihanyuniawati",
      job: "Writer",
      comment: "Masya allah.gropnya sangat bermanfaat banget saya dapat ilmu dan sinyal.",
      bgColor: "bg-[#F47643]"
    },{
      key: 2,
      name: "Abul Hasan",
      job: "Writer",
      comment: "Alhamdulillah, grub ini membantu saya dalam mempelajari trading.",
      bgColor: "bg-[#59AE9B]"
    },{
      key: 3,
      name: "Andika Pradana",
      job: "Writer",
      comment: "Trade Society membawa saya jauh lebih konsisten dalam melakukan trading.",
      bgColor: "bg-[#D1B052]"
    },{
      key: 4,
      name: "Nuralam Esa Putra",
      job: "Writer",
      comment: "Komunitas yang full edukasinya dan asik.",
      bgColor: "bg-[#F47643]"
    },
  ]

  const testimonialsListBottom = [
    {
      key: 1,
      name: "Iwan Juliatmoko",
      job: "Writer",
      comment: "Dari semua program yang di adakan sangat² menarik dan mengedukasi.",
      bgColor: "bg-[#F47643]"
    },{
      key: 2,
      name: "Mochamad Indra Leksana",
      job: "Writer",
      comment: "Signal dan materi pembelajaran di dunia trading sangat membantu para newbie trader",
      bgColor: "bg-[#59AE9B]"
    },{
      key: 3,
      name: "Jody Christian Sumampow",
      job: "Writer",
      comment: "Edukasi yang saya terima dari nol sampe sekarang semuanya bagus",
      bgColor: "bg-[#D1B052]"
    },{
      key: 4,
      name: "Mohammad Rizqi Arafat",
      job: "Writer",
      comment: "semenjak gabung di trade society ini gaya trading saya mulai ada perkembangan",
      bgColor: "bg-[#F47643]"
    },
  ]

  const testimonialsListMobile = [
    {
      key: 1,
      name: "Jihanyuniawati",
      job: "Writer",
      comment: "Masya allah.gropnya sangat bermanfaat banget saya dapat ilmu dan sinyal.",
      bgColor: "bg-[#F47643]"
    },{
      key: 2,
      name: "Abul Hasan",
      job: "Writer",
      comment: "Alhamdulillah, grub ini membantu saya dalam mempelajari trading.",
      bgColor: "bg-[#59AE9B]"
    }
  ]

  const testimonialsListMobileBottom = [
    {
      key: 1,
      name: "Iwan Juliatmoko",
      job: "Writer",
      comment: "Dari semua program yang di adakan sangat² menarik dan mengedukasi.",
      bgColor: "bg-[#F47643]"
    },{
      key: 2,
      name: "Mochamad Indra Leksana",
      job: "Writer",
      comment: "Signal dan materi pembelajaran di dunia trading sangat membantu para newbie trader",
      bgColor: "bg-[#59AE9B]"
    },
  ]


  const faqDataList = [
    {
      key: 1,
      activeIndex : 0,
      question: "Berapa modal minimal untuk trading?",
      answer: "Tidak ada modal minimal untuk trading, namun disarankan untuk setidaknya memulai trading dengan modal di atas Rp500,000 untuk meminimalisir risiko margin call.",
      height: "desktop:h-[200px] mobile:h-auto",
      idleHeight: "desktop:h-[92px]",
    },{
      key: 2,
      activeIndex : 1,
      question: "Apakah benar bisa belajar gratis?",
      answer: "100% gratis! Trade Society memiliki program gratis yang terbuka untuk siapa pun. Daftar sekarang dan sampai bertemu di kelas!",
      height: "desktop:h-[200px] mobile:h-auto",
      idleHeight: "desktop:h-[92px]",
    },{
      key: 3,
      activeIndex : 2,
      question: "Saya pemula mau belajar dari 0, harus mulai dari mana?",
      answer: "Kalian bisa bergabung ke program Newbie, di mana kita akan belajar dasar-dasar trading dari 0 dan juga praktek langsung menggunakan akun demo.",
      height: "desktop:h-[250px] mobile:h-auto",
      idleHeight: "desktop:h-[120px]",
    },{
      key: 4,
      activeIndex : 3,
      question: "Saya mau trading tapi belum punya modal, gimana caranya?",
      answer: "Jangan khawatir, kalian bisa belajar dulu menggunakan akun demo bersama Newbie program dan dalam waktu dekat Trade Society juga akan ada program khusus untuk kalian bisa mendapatkan modal. Stay tune!",
      height: "desktop:h-[250px] mobile:h-auto",
      idleHeight: "desktop:h-[120px]",
    },{
      key: 5,
      activeIndex : 4,
      question: "Untuk pemula lebih baik trading crypto, saham, atau forex?",
      answer: "Semua instrumen baik untuk dipelajari karena ketika kalian sudah menjadi ahli di satu instrumen pasti akan menjadi pemula di instrumen lain. Saat ini Trade Society masih berfokus di intrumen forex & komoditas, namun jangan khawatir karena kedepannya akan ada instrumen lainnya.",
      height: "desktop:h-[250px] mobile:h-auto",
      idleHeight: "desktop:h-[120px]",
    },{
      key: 6,
      activeIndex : 5,
      question: "Apakah akan selalu profit jika mengikuti sinyal trading?",
      answer: "Dalam dunia trading, pasti ada yang namanya loss. Namun, jangan khawatir karena Trade Society memiliki rata-rata persentase PnL di atas 75%.",
      height: "desktop:h-[250px] mobile:h-auto",
      idleHeight: "desktop:h-[120px]",
    },
  ]

  const wordBelajarGratis = `Belajar trading 100% gratis! Ikuti kelas online dan belajar sampai jago bersama para mentor!`

  const ProgramCardsList = [
    {
      id: 1,
      type: "newbie",
      elements: (<motion.div
            initial={{opacity: 0, translateY: "50px"}}
            whileInView={{opacity: 1, translateY: "0"}}
            transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
            viewport={{once: true}}
            className={clsx("desktop:mt-0 mobile:mt-4")}>
          <ProgramCards benefitList={newbieBenefitList}
                        description_class={"Khusus pemula belajar dari 0 dan praktek langsung menggunakan akun demo."}
                        period={"Lifetime"} price={"FREE"} type_class={"Newbie"} href={"/our-program/programs/newbie"}
                        imageSrc={"/images/components/illustration_new/newbie_new_card.png"}/>
        </motion.div> )
    },
    {
      id: 2,
      type: "family",
      elements: <motion.div
          initial={{opacity: 0, translateY: "50px"}}
          whileInView={{opacity: 1, translateY: "0"}}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .5}}
          viewport={{once: true}}
          className={clsx("desktop:mt-0 mobile:mt-4")}>
        <ProgramCards benefitList={familyBenefitList}
                      description_class={"Terbuka untuk umum yang sudah memahami dasar-dasar trading dan siap menggunakan akun real."}
                      period={"Lifetime"} price={"FREE"} type_class={"Family"} href={"/our-program/programs/family"}
                      imageSrc={"/images/components/illustration_new/family_new_card.png"}/>
      </motion.div>
    },
    {
      id: 3,
      type: "priority",
      elements: <motion.div
          initial={{opacity: 0, translateY: "50px"}}
          whileInView={{opacity: 1, translateY: "0"}}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .7}}
          viewport={{once: true}}
          className={clsx("desktop:mt-0 mobile:mt-4")}>
        <ProgramCards benefitList={priorityBenefitList}
                      description_class={"Eksklusif untuk trader yang ingin belajar berbagai ilmu trading lebih dalam dan detail."}
                      period={"Yearly"} price={"rp 1.500.000"} type_class={"priority"}
                      href={"/our-program/programs/priority"}
                      imageSrc={"/images/components/illustration_new/priority_new_card.png"}
                      strikethroughPrice={"Rp5.000.000"}/>
      </motion.div>
    }
  ]

  return <main className={clsx("mt-10 ")}>

    {/* Hero Section */}
    <section className={clsx("relative ")}>

      <div
          className={clsx("relative bg-linear-gradient-hero desktop:h-[524px] mobile:h-[600px] rounded-[32px] mobile:mt-[120px] desktop:mt-[120px] mobile:p-4  desktop:p-0 desktop:mx-[120px] desktop:overflow-hidden mobile:mx-[16px] mobile:overflow-hidden")}>
        <Image src={"/images/components/addons_new/hero_bg_addons.png"} alt={""} fill={true}
               className={clsx("absolute desktop:bottom-0 mobile:hidden desktop:block ")}/>
        <Image src={"/images/components/illustration_new/hero_bg_image.png"} alt={""} height={255} width={1440}
               className={clsx("absolute desktop:bottom-0 mobile:hidden desktop:block ")}/>

        <Image src={"/images/components/responsive/mobile/addons/home_hero_bg_image.png"} alt={""} fill={true}
               className={clsx("absolute desktop:bottom-0 mobile:block desktop:hidden ")}/>

        <Image src={"/images/components/responsive/mobile/illustration/hero_bg_image.png"} alt={""} height={178} width={450}
               className={clsx("absolute mobile:bottom-0 mobile:left-0 mobile:block desktop:hidden w-full ")}/>


        <motion.section initial={{ opacity: 0, translateY: "50px" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        transition={{duration: 10, type: "spring", stiffness: 150}}
                        viewport={{once: true}}

                        className={clsx("relative text-center pt-[64px] z-20")}>
          <h1 className={clsx("text-white text-heading-1 desktop:w-[400px] mx-auto ")}>Sukses trading bersama  Trade Society</h1>
          <p className={clsx("text-XL/XL-Normal text-[#F6F6F6] text-center mx-auto desktop:w-[500px] mt-2 ", fonts.roboto)}>Bukan hanya belajar, tapi juga kelilingi diri kalian dengan  orang-orang yang yang memiliki tujuan dan mindset untuk menjadi sukses.</p>
        </motion.section>
      </div>
      <CardContainer className={clsx("absolute bottom-0")}>
        <CardBody>
          <CardItem translateZ="100" >
            <Image src={"/images/components/illustration_new/hero_bg_image_2.svg"} alt={""} height={419} width={421} className={clsx(" mobile:hidden desktop:block ")} />
            <Image src={"/images/components/responsive/mobile/illustration/hero_bg_image_2.svg"} alt={""} height={265} width={265}
                   className={clsx(" mobile:relative mobile:block desktop:hidden mobile:translate-x-[25%] translate-y-[35%] ")}/>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>

    {/* Hero Section - End */}


  {/*  Hero Section CTA - Start */}

    <section className={clsx("relative  desktop:h-[306px] desktop:flex desktop:items-center desktop:px-[120px] mobile:w-full mobile:px-[48px] mobile:py-[40px] mobile:h-auto  ")}>
      {/*<Image src={"/images/components/addons/hero_cta_revision_addons.png"} alt={""} height={306} width={1198} className={clsx("absolute z-10 left-[50%] translate-x-[-50%]")} />*/}
      <Image src={"/images/components/addons_new/belajar_trading_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:block mobile:hidden ")} />
      <Image src={"/images/components/addons_new/home_belajar_gratis_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 object-center object-contain desktop:block mobile:hidden ")} />

      <Image src={"/images/components/responsive/mobile/addons/home_belajar_trading_addons.png"} alt={"addons 1"} fill={true} className={clsx("absolute z-10 mobile:block desktop:hidden mobile:object-cover mobile:object-center ")} />
      <Image src={"/images/components/responsive/mobile/addons/home_belajar_trading_2.png"} alt={"addons 2"} fill={true} className={clsx("absolute z-10 mobile:object-center mobile:block desktop:hidden mobile:object-cover mobile:h-full ")} />

      <motion.div
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
          viewport={{once: true}}
          className={clsx("z-20 flex desktop:justify-between desktop:items-center relative mobile:flex-col mobile:items-start desktop:flex-row desktop:mx-auto")}>
        {/*<h1 className={clsx("text-primary-font-color text-heading-4 desktop:basis-2/3 mobile:w-full ")}>*/}
        {/*  Belajar trading <span className={clsx("text-secondary-gold-color")}>100% gratis!</span> <br/> Ikuti kelas*/}
        {/*  online dan belajar sampai jago bersama para mentor!*/}
        {/*</h1>*/}
        <TextGenerateEffectHome words={wordBelajarGratis} className={clsx("text-primary-font-color text-heading-4 desktop:basis-2/3 mobile:w-full ")} />
        <div className={clsx("desktop:basis-1/3 desktop:max-w-[200px] mobile:mt-[15px]")}>
          <Button href={telegramLink} type={"primary"} text={"Daftar sekarang"}/>
        </div>
      </motion.div>
    </section>

    {/*  Hero Section CTA - End */}

    {/*  Our Program - Start */}

    <section className={clsx("mt-[80px] py-[40px] desktop:px-0 ")}>

    {/*  Our program > Text Heading - Start  */}

      <section className={clsx("relative p-8 desktop:py-8 desktop:px-[120px] mobile:px-[48px] mobile:py-[32px]")}>
        <Image src={"/images/components/addons_new/belajar_sesuai_kemampuan_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:block mobile:hidden ")} />
        <Image src={"/images/components/responsive/mobile/addons/home_our_program_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:hidden mobile:block  mobile:object-center ")} />

        <motion.section
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
            viewport={{once: true}}
            className={clsx("flex flex-col justify-center items-center relative z-20")}>
          <p className={clsx("text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Our programs</p>
          <h3 className={clsx("text-heading-3 text-[#15345A] my-2 mobile:text-center desktop:text-left ")}>Belajar
            sesuai kemampuan</h3>
          <p className={clsx("text-XL/XL-Normal text-font-description-color max-w-[550px] text-center", fonts.roboto)}>Bebas
            pilih program yang paling sesuai untuk kalian, baik pemula ataupun berpengalaman, semuanya ada di sini!</p>

        </motion.section>
      </section>

      {/*  Our program > Text Heading - End  */}


      {/*  Our program > Cards - Start  */}

      <section
          className={clsx("mt-[96px] ")}>
        <HoverEffect items={ProgramCardsList} className={"flex desktop:justify-between desktop:flex-row mobile:flex-col desktop:items-center mobile:items-center mobile:justify-center desktop:px-[120px]"} />
      </section>

      {/*  Our program > Cards - End  */}


      {/*  Our program > Punya pertanyaan lain? - Start  */}

      <motion.section
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
          viewport={{once: true}}
          className={clsx(" desktop:relative mobile:relative text-center flex desktop:items-center desktop:justify-center mt-10 pt-8 pb-10 desktop:flex-row mobile:flex-col mobile:justify-center mobile:items-center")}>
        <Image src={"/images/components/addons_new/home_pertanyaan_lain_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:block mobile:hidden ")} />
        <Image src={"/images/components/responsive/mobile/addons/home_punya_pertanyaan_addons.png"} alt={"pertanyaan mobile"} fill={true} className={clsx("absolute z-10 desktop:hidden mobile:block mobile:object-center ")} />
        <h1 className={clsx("text-font-description-color text-XL/XL-Normal mr-[10px] relative z-20", fonts.roboto)}>Punya pertanyaan lain?</h1>
        <div className={clsx("mobile:mt-4 desktop:mt-0 relative z-20")}>
          <Button href={telegramLink} text={"Hubungi kami"} type={"secondary"} />
        </div>
      </motion.section>

      {/*  Our program > Punya pertanyaan lain? - End  */}


    </section>

    {/*  Our Program - End */}


    {/*  Kata kata dari mereka - Start */}

    <section className={clsx("mt-[80px] mobile:relative desktop:py-[80px] mobile:py-[40px] desktop:px-[159px] mobile:px-0 desktop:relative ")}>

      <Image src={"/images/components/addons_new/our_testimonials_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:block mobile:hidden ")} />
      <Image src={"/images/components/responsive/mobile/addons/home_testimonials_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:hidden mobile:block")} />

      {/*  Kata kata dari mereka > Heading - Start   */}

      <motion.section
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
          viewport={{once: true}}
          className={clsx("relative flex flex-col desktop:justify-center desktop:items-center mobile:justify-center mobile:items-center mobile:px-8 desktop:px-0 z-20 ")}>
        <p className={clsx(" text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Our testimonials</p>
        <h3 className={clsx("text-heading-3 text-[#15345A] my-2 mobile:text-center desktop:text-left ")}>Kata-kata dari mereka</h3>
        <p className={clsx("text-XL/XL-Normal text-font-description-color max-w-[550px] text-center", fonts.roboto)}>Beberapa member sukses Trade Society</p>

      </motion.section>

      {/*  Kata kata dari mereka > Heading - End   */}


      {/*  Kata kata dari mereka > Testimonials - Start   */}

      <motion.section
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
          viewport={{once: true}}
          className={clsx("mt-[42px] desktop:py-[64px] desktop:px-8 mobile:py-8 mobile:px-6 mobile:mx-8 bg-[#F4F8FD] rounded-[32px]  relative z-20 ")}>

        <div className={clsx("")}>
          <Image src={"/images/components/addons_new/home_testimonials_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 left-0 top-0 bottom-0 object-cover object-center  ")} />
          {/* Start: Desktop Version */}
          <div className={clsx("flex items-center justify-between  mobile:hidden desktop:visible desktop:flex relative z-20 ")}>
            {/*{testimonialsList.map((testimonial) => (*/}
            {/*    <div key={testimonial.key} className={clsx("")}>*/}
            {/*      <TestimonialCard name={testimonial.name} job={testimonial.job} comments={testimonial.comment}*/}
            {/*                       bg_color={testimonial.bgColor}/>*/}
            {/*    </div>*/}
            {/*))}*/}
            <InfiniteMovingCards items={testimonialsList} direction="left" speed="slow" />
          </div>
          {/* End: Desktop Version */}

          {/* Start: Mobile Version */}
          <div className={clsx("flex items-center justify-between  desktop:hidden mobile:visible mobile:flex relative z-20")}>
            {/*{testimonialsListMobile.map((testimonial) => (*/}
            {/*    <div key={testimonial.key} className={clsx("mobile:ml-4 desktop:ml-0")}>*/}
            {/*      <TestimonialCard name={testimonial.name} job={testimonial.job} comments={testimonial.comment}*/}
            {/*                       bg_color={testimonial.bgColor}/>*/}
            {/*    </div>*/}
            {/*))}*/}
            <InfiniteMovingCards items={testimonialsListMobile} direction={"left"} speed={"slow"} />
          </div>
          {/* End: Mobile Version */}

          {/* Start: Desktop Version */}
          <div className={clsx("flex items-center justify-between mt-4  mobile:hidden desktop:visible desktop:flex relative z-20 ")}>
            {/*{testimonialsListBottom.map((testimonial) => (*/}
            {/*    <div key={testimonial.key} className={clsx("")}>*/}
            {/*      <TestimonialCard name={testimonial.name} job={testimonial.job} comments={testimonial.comment}*/}
            {/*                       bg_color={testimonial.bgColor}/>*/}
            {/*    </div>*/}
            {/*))}*/}
            <InfiniteMovingCards
                items={testimonialsListBottom}
                direction="right"
                speed="slow"
            />
          </div>
          {/* End: Desktop Version */}

          {/* Start: Mobile Version */}
          <div className={clsx("flex items-center justify-between mt-4 desktop:hidden mobile:visible mobile:flex relative z-20 ")}>
            {/*{testimonialsListMobile.map((testimonial) => (*/}
            {/*    <div key={testimonial.key} className={clsx("mobile:mr-4 desktop:mr-0")}>*/}
            {/*      <TestimonialCard name={testimonial.name} job={testimonial.job} comments={testimonial.comment}*/}
            {/*                       bg_color={testimonial.bgColor}/>*/}
            {/*    </div>*/}
            {/*))}*/}
            <InfiniteMovingCards items={testimonialsListMobileBottom} direction={"right"} speed={""} />
          </div>
          {/* End: Mobile Version */}
        </div>
      </motion.section>

      {/*  Kata kata dari mereka > Testimonials - End   */}

    </section>

    {/*  Kata kata dari mereka - End */}


    {/*  FAQ - Start */}

    <section className={clsx("mt-[80px] desktop:pt-[80px] mobile:pt[40px] desktop:px-[160px] pb-10 relative ")}>

      <Image src={"/images/components/addons_new/faq_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:block mobile:hidden ")} />
      <Image src={"/images/components/responsive/mobile/addons/hero_testimonials_core_addons.png"} alt={""} fill={true} className={clsx("absolute z-10 desktop:hidden mobile:block ")} />

      {/*  FAQ > Heading - Start   */}

      <motion.section
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
          viewport={{once: true}}
          className={clsx("flex flex-col desktop:justify-center desktop:items-start mobile:px-8 desktop:px-0 desktop:pt-0 mobile:pt-8 mobile:items-center mobile:justify-center relative z-20 ")}>
        <p className={clsx(" text-Base/Base-Strong text-[#1761B1] ", fonts.roboto)}>Frequently asked questions</p>
        <h3 className={clsx("text-heading-3 text-[#15345A] my-2 desktop:text-left mobile:text-center ")}>Jangan khawatir, semua pertanyaan <br /> kalian sudah terjawab!</h3>
        <p className={clsx("text-XL/XL-Normal text-font-description-color  desktop:text-left mobile:text-center ", fonts.roboto)}>Kami sudah mengumpulkan jawaban dari pertanyaan yang sering ditanyakan.</p>

      </motion.section>

      {/*  FAQ > Heading - End   */}

      {/*  FAQ > Main - Start   */}
      <section className={clsx("mt-[30px] relative z-20 mobile:px-10 desktop:px-0")}>
        <motion.div
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
            viewport={{once: true}}
            className={clsx("grid desktop:grid-cols-2 gap-8 ")}>
          {faqDataList.map((faq) => (
              <div key={faq.key} className={clsx("")}>
                <FAQCard height={faq.height} activeIndex={faq.activeIndex} onClick={() => dispatch(setShowFaq(faq.activeIndex))} theAnswer={faq.answer} theQuestion={faq.question} idleHeight={faq.idleHeight} />
              </div>
          ))}
        </motion.div>
      </section>

      {/*  FAQ > Main - End   */}


      {/*  FAQ > Footer - Start   */}

      <motion.section
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{duration: 10, type: "spring", stiffness: 100, delay: .3}}
          viewport={{once: true}}
          className={clsx("mt-[60px] relative desktop:h-[216px] mobile:h-auto  desktop:px-[77px] desktop:mx-0 mobile:mx-6 bg-linear-gradient-faq rounded-[32px] z-20")}>
        <div className={clsx("flex desktop:items-center desktop:justify-between mobile:flex-col desktop:flex-row  z-10 relative mobile:p-8 desktop:p-0 ")}>

            <Image src={"/images/components/illustration/faq_join_now_revision.svg"} alt={"Join Now"} width={216} height={216} className={clsx("mobile:order-3 desktop:order-1")} />

            <div className={clsx("desktop:ml-8  mobile:order-1 desktop:order-2 desktop:mr-auto")}>
              <h6 className={clsx("text-heading-3 text-white mb-2")}>Ikut kelas online sekarang</h6>
              <p className={clsx("text-white text-XL/XL-Normal ", fonts.roboto)}>Kami bantu untuk bisa profit
                konsisten!</p>
            </div>
          <div className={clsx("desktop:order-3 mobile:order-2 mobile:mt-4 mobile:mb-8 desktop:my-0 ")}>
            <Button href={telegramLink} type={"secondary"} text={"Hubungi kami"} />
          </div>
        </div>

        <Image src={"/images/components/addons/join_now_addons.png"} alt={""} height={353} width={1200} className={clsx("absolute bottom-0")} />
      </motion.section>

      {/*  FAQ > Footer - End   */}

    </section>

    {/*  FAQ - End */}


  </main>;
}
