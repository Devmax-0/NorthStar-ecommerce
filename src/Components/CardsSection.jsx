// import { CardInfo } from "./Constants";
import Link from "next/link";
import { CardInfo } from "./Constants";
import Image from "next/image";
const CardsSection = () => {
  return (
    <div>
      <section className="py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-12 lg:mb-14 xl:mb-16 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              Discover NEW Arrivals
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
              Recently added shirts!
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {CardInfo.map((card, index) => (
              <Link href={`${card.id}`} key={index}>
                <div className="bg-white 0  overflow-hidden">
                  <Image
                    alt="Product 1"
                    className="w-full h-72 object-cover"
                    width={300}
                    height={600}
                    src={card.imgUrl}
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "contain",
                    }}
                  />
                  <div className="p-4 flex flex-col items-center">
                    <h3 className="text-lg md:text-lg font-semibold mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[#024E82] text-base">${card.price}.00</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsSection;
