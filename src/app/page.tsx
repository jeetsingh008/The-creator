import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import MakeItBig from "./components/MakeItBig";
import MakeItBig2 from "./components/MakeItBig2";
import HowWeWork from "./components/HowWeWork";
import Review from "./components/Review";
import Reliability from "./components/Reliability";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full m-auto max-w-[100rem] inset-0 ">
      <Header />
      <HeroSection />
      <Partners />
      <MakeItBig />
      <MakeItBig2 />
      <HowWeWork />
      <Review />
      <Reliability />
      <Footer />
    </div>
  );
}
