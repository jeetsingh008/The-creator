import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import MakeItBig from "@/components/MakeItBig";
import MakeItBig2 from "@/components/MakeItBig2";
import HowWeWork from "@/components/HowWeWork";
import Review from "@/components/Review";
import Reliability from "@/components/Reliability";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="overflow-hidden text-primaryDark min-w-80">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <MakeItBig />
      <MakeItBig2 />
      <HowWeWork />
      <Review />
      <Reliability />
      <Footer />
    </div>
  );
}
