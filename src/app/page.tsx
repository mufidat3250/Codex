import Image from "next/image";
import Navbar from "../components/molecules/NavBar/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import Operation from "@/components/organisms/Operation";
import Features from "@/components/organisms/Features";
import Pricing from "@/components/organisms/Pricing";
import News from "@/components/organisms/News";
import Footer from "@/components/organisms/Footer";
import Layouts from "@/components/organisms/Layouts";

export default function Home() {
  return (
    <Layouts>
      <div className="hero-section">
        <HeroSection/>
      </div>
      <main className="h-screen">
        <Operation/>
        <Features/>
        <Pricing/>
        <News/>
        <Footer/>
      </main>
    </Layouts>
  );
}

