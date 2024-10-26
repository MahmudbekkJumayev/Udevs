"use client";
import Header from "@/pages/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/pages/Service/Service";
import Team from "@/pages/Team/Team";
import Technologies from "@/pages/Technologies/Technologies";
import System from "@/pages/System/System";
import Design from "@/pages/Design/Design";
import Optimization from "@/pages/Optimation/Optimization";
import Consulting from "@/pages/Consulting/Consulting";
import Tools from "@/pages/Tools/Tools";
import Clients from "@/pages/Clients/Clients";
import Delever from "@/pages/Delever/Delever";
import Smsuz from "@/pages/Smsuz/Smsuz";
import Goodzone from "@/pages/Goodzone/Goodzone";
import Iman from "@/pages/Iman/Iman";
import Work from "@/pages/work/Work";
import Contact from "@/pages/Contact/Contact";
import Footer from "@/pages/Footer/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

const scrollToSection = () => {
  document.querySelector('#section-id').scrollIntoView({
    behavior: 'smooth',
  });
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Service />
      <Team />
      <Technologies />
      <System />
      <Design />
      <Optimization />
      <Consulting />
      <Tools />
      <Clients />
      <Delever />
      <Smsuz />
      <Goodzone />
      <Iman />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
