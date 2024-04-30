import { FounderInfo } from "../Constants";
import Image from "next/image";

const Founders = () => {
  return (
    <div className="w-full min-h-[60vh] bg-[#FBFBFB] p-10">
      <h1 className="text-3xl font-bold text-center mb-16">The Founders</h1>
      <div className="flex justify-center items-center gap-16 md:flex-col">
        {FounderInfo.map((info, index) => (
          <div key={index}>
            <div>
              <Image src={info.imgUrl} width={250} height={250} />
            </div>
            <div className="mt-3 font-bold">
              <h3 className="">{info.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
