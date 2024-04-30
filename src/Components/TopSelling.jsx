import Link from "next/link";
import { TopSellingInfo } from "./Constants";
import Image from "next/image";

const TopSelling = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <section className="sm:py-12 md:py-16 py-20 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="sm:mb-10 md:mb-12 mb-14 xl:mb-16 text-center">
              <h2 className="sm:text-xl md:text-2xl text-3xl font-bold mb-2">
                Top Selling
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
                Browse our top-selling products
              </p>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-6 md:gap-8 gap-10">
              {TopSellingInfo.map((card, index) => (
                <Link href={`${card.id}`} key={index}>
                  <div className="bg-white overflow-hidden">
                    <Image
                      alt="Product 1"
                      className="w-full h-72 object-cover"
                      width={300}
                      height={450}
                      src={card.imgUrl}
                      style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                      }}
                    />
                    <div className="p-4 flex flex-col items-center">
                      <h3 className="text-lg md:text-lg font-semibold mb-1">
                        {card.title}
                      </h3>
                      <p className="text-[#024E82] text-base">{card.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Link
          href={"#"}
          className="px-8 py-4 bg-[#024E82] text-white text-center mt-[-30px]"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
