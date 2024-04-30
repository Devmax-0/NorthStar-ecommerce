import Cards from "@/Components/AboutComponents/Cards";
import AboutImg from "../../../public/Images/about.jpg";

import Image from "next/image";
import Founders from "@/Components/AboutComponents/Founders";
import Testimonial from "@/Components/AboutComponents/Testimonial";

const page = () => {
  return (
    <div>
      <div className="w-full min-h-[250px] relative md:min-h-[150px]">
        <Image src={AboutImg} className="object-cover" />
        <div>
          <h1 className="absolute top-60 left-10 lg:top-40 md:hidden text-5xl text-white">
            About NorthStar
          </h1>
        </div>
      </div>
      <div className="card-section">
        <Cards />
      </div>
      <div className="founder-section">
        <Founders />
      </div>
      <div className="testimonial-section">
        <Testimonial />
      </div>
    </div>
  );
};

export default page;
