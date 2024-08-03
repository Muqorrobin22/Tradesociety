"use client"

import Image from "next/image";
import clsx from "clsx";
import Button from "@/app/_ui/Micro-Component/Button/Button";
import BenefitList from "@/app/_ui/Micro-Component/BenefitList/Benefit-List";
import ProgramCards from "@/app/_ui/Components/Cards/ProgramCards";
import Identifiers from "@/app/_ui/Micro-Component/Testimonials/Identifiers/Identifiers";
import TestimonialCard from "@/app/_ui/Micro-Component/Testimonials/Cards/TestimonialCard";
import {useState} from "react";
import FAQCard from "@/app/_ui/Micro-Component/FAQ/FAQCard";
import {useDispatch} from "react-redux";
import {setShowFaq} from "@/app/_lib/store/features/faqslices/faqSlices";
import {familyBenefitList, newbieBenefitList, priorityBenefitList} from "@/app/_lib/const/VARIABLES";
import {fonts} from "@/app/_lib/utils/fonts/fonts";

export default function Home() {

  // const [showFaq, setShowFaq] = useState(false);
  const dispatch = useDispatch()

  const testimonialsList = [
    {
      key: 1,
      name: "Ardas dipa",
      job: "Writer",
      comment: "Thank you so much for your help. It's  exactly what I've been looking for.",
      bgColor: "bg-[#F47643]"
    },{
      key: 2,
      name: "Ardas dipa",
      job: "Writer",
      comment: "Thank you so much for your help. It's  exactly what I've been looking for.",
      bgColor: "bg-[#59AE9B]"
    },{
      key: 3,
      name: "Ardas dipa",
      job: "Writer",
      comment: "Thank you so much for your help. It's  exactly what I've been looking for.",
      bgColor: "bg-[#D1B052]"
    },{
      key: 4,
      name: "Ardas dipa",
      job: "Writer",
      comment: "Thank you so much for your help. It's  exactly what I've been looking for.",
      bgColor: "bg-[#F47643]"
    },
  ]

  const faqDataList = [
    {
      key: 1,
      activeIndex : 0,
      question: "Berapa modal minimal untuk trading?",
      answer: "Tidak ada modal minimal untuk trading, namun disarankan untuk setidaknya memulai trading dengan modal di atas Rp500,000 untuk meminimalisir risiko margin call.",
      height: "h-[200px]",
      idleHeight: "h-[92px]",
    },{
      key: 2,
      activeIndex : 1,
      question: "Apakah benar bisa belajar gratis?",
      answer: "100% gratis! Trade Society memiliki program gratis yang terbuka untuk siapa pun. Daftar sekarang dan sampai bertemu di kelas!",
      height: "h-[200px]",
      idleHeight: "h-[92px]",
    },{
      key: 3,
      activeIndex : 2,
      question: "Saya pemula mau belajar dari 0, harus mulai dari mana?",
      answer: "Kalian bisa bergabung ke program Newbie, di mana kita akan belajar dasar-dasar trading dari 0 dan juga praktek langsung menggunakan akun demo.",
      height: "h-[250px]",
      idleHeight: "h-[120px]",
    },{
      key: 4,
      activeIndex : 3,
      question: "Saya mau trading tapi belum punya modal, gimana caranya?",
      answer: "Jangan khawatir, kalian bisa belajar dulu menggunakan akun demo bersama Newbie program dan dalam waktu dekat Trade Society juga akan ada program khusus untuk kalian bisa mendapatkan modal. Stay tune!",
      height: "h-[250px]",
      idleHeight: "h-[120px]",
    },{
      key: 5,
      activeIndex : 4,
      question: "Untuk pemula lebih baik trading crypto, saham, atau forex?",
      answer: "Semua instrumen baik untuk dipelajari karena ketika kalian sudah menjadi ahli di satu instrumen pasti akan menjadi pemula di instrumen lain. Saat ini Trade Society masih berfokus di intrumen forex & komoditas, namun jangan khawatir karena kedepannya akan ada instrumen lainnya.",
      height: "h-[250px]",
      idleHeight: "h-[120px]",
    },{
      key: 6,
      activeIndex : 5,
      question: "Apakah akan selalu profit jika mengikuti sinyal trading?",
      answer: "Dalam dunia trading, pasti ada yang namanya loss. Namun, jangan khawatir karena Trade Society memiliki rata-rata persentase PnL di atas 75%.",
      height: "h-[250px]",
      idleHeight: "h-[120px]",
    },
  ]

  return <main className={clsx("mt-10")}>

  {/* Hero Section */}
    <section className={clsx("relative bg-linear-gradient-hero h-[524px] rounded-[32px] ")}>

      <Image src={"/images/components/addons/Hero_addons.png"} alt={""} height={353} width={1200} className={clsx("absolute bottom-0")} />
      <Image src={"/images/components/illustration/image_hero.svg"} alt={""} height={400} width={640} className={clsx("absolute bottom-[-150px] left-[50%] translate-x-[-50%] ")} />

      <section className={clsx("text-center pt-[64px]")}>
        <h1 className={clsx("text-white text-heading-1 w-[400px] mx-auto ")}>Sukses trading bersama  Trade Society</h1>
        <p className={clsx("text-XL/XL-Normal text-[#F6F6F6] text-center mx-auto w-[500px] mt-2 ", fonts.roboto)}>Bukan hanya belajar, tapi juga kelilingi diri kalian dengan  orang-orang yang yang memiliki tujuan dan mindset untuk menjadi sukses.</p>
      </section>
    </section>

    {/* Hero Section - End */}


  {/*  Hero Section CTA - Start */}

    <section className={clsx("relative mt-[180px] h-[306px] flex items-center px-[100px] ")}>
      <Image src={"/images/components/addons/hero_cta_revision_addons.png"} alt={""} height={306} width={1198} className={clsx("absolute z-10 left-[50%] translate-x-[-50%]")} />
      <div className={clsx("z-20 flex justify-between items-center relative ")}>
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
        <p className={clsx("text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Our programs</p>
        <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Belajar sesuai kemampuan</h3>
        <p className={clsx("text-XL/XL-Normal text-font-description-color max-w-[550px] text-center", fonts.roboto)}>Bebas pilih program yang paling sesuai untuk kalian, baik  pemula ataupun berpengalaman, semuanya ada di sini!</p>

      </section>

      {/*  Our program > Text Heading - End  */}


      {/*  Our program > Cards - Start  */}

      <section className={clsx("mt-[96px] flex justify-between")}>
          <ProgramCards benefitList={newbieBenefitList} description_class={"Khusus pemula belajar dari 0 dan praktek langsung menggunakan akun demo."} period={"Lifetime"} price={"FREE"} type_class={"Newbie"} href={"/"} imageSrc={"/images/components/illustration/cards_home_1.png"} />
          <ProgramCards benefitList={familyBenefitList} description_class={"Terbuka untuk umum yang sudah memahami dasar-dasar trading dan siap menggunakan akun real."} period={"Lifetime"} price={"FREE"} type_class={"Family"}  href={"/"} imageSrc={"/images/components/illustration/cards_home_2.png"}/>
        <ProgramCards benefitList={priorityBenefitList} description_class={"Eksklusif untuk trader yang ingin belajar berbagai ilmu trading lebih dalam dan detail."} period={"Yearly"} price={"rp 1.500.000"} type_class={"priority"}  href={"/"} imageSrc={"/images/components/illustration/cards_home_3.png"} strikethroughPrice={"Rp5.000.000"}/>
      </section>

      {/*  Our program > Cards - End  */}


      {/*  Our program > Punya pertanyaan lain? - Start  */}

      <section className={clsx("text-center flex items-center justify-center mt-10 pt-8 pb-10")}>
        <h1 className={clsx("text-font-description-color text-XL/XL-Normal mr-[10px]", fonts.roboto)}>Punya pertanyaan lain?</h1>
        <div>
          <Button href={"/"} text={"Hubungi kami"} type={"secondary"} />
        </div>
      </section>

      {/*  Our program > Punya pertanyaan lain? - End  */}


    </section>

    {/*  Our Program - End */}


    {/*  Kata kata dari mereka - Start */}

    <section className={clsx("mt-[80px] py-[80px] px-[39px] ")}>
      {/*  Kata kata dari mereka > Heading - Start   */}

      <section className={clsx("flex flex-col justify-center items-center")}>
        <p className={clsx(" text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Our testimonials</p>
        <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Kata-kata dari mereka</h3>
        <p className={clsx("text-XL/XL-Normal text-font-description-color max-w-[550px] text-center", fonts.roboto)}>Beberapa member sukses Trade Society</p>

      </section>

      {/*  Kata kata dari mereka > Heading - End   */}


      {/*  Kata kata dari mereka > Testimonials - Start   */}

      <section className={clsx("mt-[42px] py-[64px] px-8 bg-[#F4F8FD] rounded-[32px]   ")}>
        <div className={clsx("overflow-x-hidden")}>
          <div className={clsx("flex items-center justify-between translate-x-[75px]")}>
            {testimonialsList.map((testimonial) => (
                <div key={testimonial.key} className={clsx("")}>
                  <TestimonialCard name={testimonial.name} job={testimonial.job} comments={testimonial.comment}
                                   bg_color={testimonial.bgColor}/>
                </div>
            ))}
          </div>

          <div className={clsx("flex items-center justify-between mt-4 translate-x-[-75px]")}>
            {testimonialsList.map((testimonial) => (
                <div key={testimonial.key} className={clsx("")}>
                  <TestimonialCard name={testimonial.name} job={testimonial.job} comments={testimonial.comment}
                                   bg_color={testimonial.bgColor}/>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Kata kata dari mereka > Testimonials - End   */}

    </section>

    {/*  Kata kata dari mereka - End */}


    {/*  FAQ - Start */}

    <section className={clsx("mt-[80px] pt-[80px] px-10 pb-10 ")}>

      {/*  FAQ > Heading - Start   */}

      <section className={clsx("flex flex-col justify-center items-start")}>
        <p className={clsx(" text-Base/Base-Strong text-[#1761B1]  ", fonts.roboto)}>Frequently asked questions</p>
        <h3 className={clsx("text-heading-3 text-[#15345A] my-2 ")}>Jangan khawatir, semua pertanyaan <br /> kalian sudah terjawab!</h3>
        <p className={clsx("text-XL/XL-Normal text-font-description-color  text-left", fonts.roboto)}>Kami sudah mengumpulkan jawaban dari pertanyaan yang sering ditanyakan.</p>

      </section>

      {/*  FAQ > Heading - End   */}

      {/*  FAQ > Main - Start   */}
      <section className={clsx("mt-[30px]")}>
        <div className={clsx("grid grid-cols-2 gap-8 ")}>
          {faqDataList.map((faq) => (
              <div key={faq.key} className={clsx("")}>
                <FAQCard height={faq.height} activeIndex={faq.activeIndex} onClick={() => dispatch(setShowFaq(faq.activeIndex))} theAnswer={faq.answer} theQuestion={faq.question} idleHeight={faq.idleHeight} />
              </div>
          ))}
        </div>
      </section>

      {/*  FAQ > Main - End   */}


      {/*  FAQ > Footer - Start   */}

      <section className={clsx("mt-[60px] relative h-[216px]  px-[77px] bg-linear-gradient-faq rounded-[32px] ")}>
        <div className={clsx("flex items-center justify-between z-10 relative ")}>
          <div className={clsx("flex items-center")}>
            <Image src={"/images/components/illustration/faq_join_now_revision.svg"} alt={"Join Now"} width={216} height={216}/>

            <div className={clsx("ml-8")}>
              <h6 className={clsx("text-heading-3 text-white mb-2")}>Ikut kelas online sekarang</h6>
              <p className={clsx("text-white text-XL/XL-Normal ", fonts.roboto)}>Kami bantu untuk bisa profit
                konsisten!</p>
            </div>
          </div>
          <div>
            <Button href={"/"} type={"secondary"} text={"Hubungi kami"} />
          </div>
        </div>

        <Image src={"/images/components/addons/join_now_addons.png"} alt={""} height={353} width={1200} className={clsx("absolute bottom-0")} />
      </section>

      {/*  FAQ > Footer - End   */}

    </section>

    {/*  FAQ - End */}


  </main>;
}
