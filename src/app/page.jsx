import Hero from "../Components/Hero";
import CardsSection from "@/Components/CardsSection";
import Support from "../Components/Support";
import Offers from "@/Components/Offers";
import TopSelling from "@/Components/TopSelling";

const page = () => {
  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <div className="cards-section">
        <CardsSection />
      </div>
      <div className="support-section">
        <Support />
      </div>
      <div className="offers-section">
        <Offers />
      </div>
      <div className="selling-section">
        <TopSelling />
      </div>
    </>
  );
};

export default page;
