import Image from "next/image";
import HeroImg from "../../public/Images/heroImg.png";

const Hero = () => {
  return (
    <div>
      <section className="flex h-[90vh] w-full items-center justify-center">
        <div className=" inset-0 z-0  ">
          <Image
            alt="Background Image"
            className="h-full w-full object-cover brightness-75"
            fill
            src={HeroImg}
          />
        </div>
        <div className="relative z-10 flex flex-col items-end justify-center w-full max-w-6xl px-4 md:px-6 space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h4 className="text-4xl text-white sm:text-2xl md:text-4xl font-bold uppercase tracking-wide text-center">
              Stylish Picks beat <br /> the heat
            </h4>
            <div className="flex space-x-4 mt-2 ">
              <button
                className="inline-flex h-12 items-center justify-center border-2 border-white border-solid text-white px-6 py-2 text-base font-small uppercase hover:bg-white hover:text-black transition"
                href="#"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
