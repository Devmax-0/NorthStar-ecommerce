import Image from "next/image";
import aboutCard from "../../../public/Images/aboutcard.png";
import aboutCard2 from "../../../public/Images/aboutcard2.png";
import Link from "next/link";

const Cards = () => {
  return (
    <div>
      <div className="w-full min-h-[600px] flex md:flex-col justify-end items-end gap-16 p-16 md:p-3">
        <div className="w-full h-[600px] mt-24 md:mt-0 relative">
          <Image src={aboutCard} className="object-fit" />
          <div>
            <Link
              href="#"
              className="px-8 py-2 bg-white text-[#024E82] rounded-2xl absolute bottom-12 left-52"
            >
              BUY NOW
            </Link>
          </div>
        </div>
        <div className="w-full h-[600px] relative">
          <Image src={aboutCard2} className="object-fit" />
          <div>
            <Link
              href="#"
              className="px-8 py-2 bg-white text-[#024E82] rounded-2xl absolute bottom-12 left-52"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
