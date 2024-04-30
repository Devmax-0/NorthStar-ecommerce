import Image from "next/image";
import { TestimonialInfo } from "../Constants";
const Testimonial = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-16">Testimonials</h1>
      <div>
        {TestimonialInfo.map((info, index) => (
          <div
            key={index}
            className="main-container flex px-56 py-20 gap-10 md:px-20 md:py-10"
          >
            <div className="w-[200px] h-[200px] flex justify-center items-center md:flex-col">
              <Image
                src={info.imgUrl}
                width={200}
                height={200}
                layout="fixed"
                className="rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center ">
              <Image src={info.iconUrl} width={30} height={30} />
              <p className="font-semibold text-gray-800">{info.comment}</p>
              <p className="mt-5">{info.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
