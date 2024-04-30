import contactImg from "../../../public/Images/contact.jpg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="w-full min-h-[250px] relative md:min-h-[150px]">
        <Image src={contactImg} className="object-cover" />
        <div>
          <h1 className="absolute top-60 left-10 lg:top-40 md:hidden text-5xl text-white">
            Contact us
          </h1>
        </div>
      </div>

      <div className="flex md:flex-col sm:flex-col">
        <div className="w-4/6 min-h-[60vh] px-10 py-20 md:w-full md:py-5 md:px-5">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-3xl font-bold">
              We would love to hear from you.
            </h1>
            <p>
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>
          </div>
          <div className="flex gap-5 mt-5 md:flex-col">
            <div class="w-full md:w-full ">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Name
              </label>
              <input
                class="flex h-14 w-full border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
                type="text"
                placeholder="Enter your name"
                id="name"
              />
            </div>

            <div class="w-full md:w-full">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                class="flex h-14 w-full border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              />
            </div>
          </div>
          <div className="mt-5 ">
            <div class="w-full md:w-full">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="msg"
              >
                Message
              </label>
              <textarea
                cols={15}
                rows={8}
                class=" w-full border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 resize-none"
                type="text"
                placeholder="Enter your message"
                id="msg"
              />
            </div>
          </div>
          <div>
            <button className="mt-5 px-8 py-4 bg-[#024E82] text-white">
              Send Message
            </button>
          </div>
        </div>
        <div className="w-2/6 min-h-[60vh] px-20 py-20 md:w-full md:py-5 md:px-5">
          <div className="">
            <h1 className="text-3xl font-bold">Visit us</h1>
            <p>
              UET Lahore, Punjab, Pakistan <br /> Phone: +923039898987
            </p>
          </div>
          <div className="mt-14">
            <h1 className="text-3xl font-bold">Get in touch</h1>
            <p>You can get in touch with us on this provided email.</p>
            <p className="mt-3">Email: hmjawad087@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
