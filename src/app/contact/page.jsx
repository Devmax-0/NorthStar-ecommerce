import contactImg from "../../../public/Images/contact.jpg";
import Image from "next/image";

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

      <div className="flex">
        <div className="w-4/6 min-h-[100vh] bg-red-400 px-10 py-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
              We would love to hear from you.
            </h1>
            <p>
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div class="w-full md:w-1/3">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Name
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your name"
                id="name"
              />
            </div>

            <div class="w-full md:w-1/3">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Email
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your name"
                id="name"
              />
            </div>
          </div>
          <div className="mt-5">
            <div class="w-full md:w-1/3">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Message
              </label>
              <textarea
                cols={15}
                rows={10}
                class="flex h-30 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                type="text"
                placeholder="Enter your name"
                id="name"
              />
            </div>
          </div>
        </div>
        <div className="w-2/6 min-h-[100vh] bg-blue-400">
          <div>
            <h1>Visit us</h1>
            <p>UET Lahore, Punjab, Pakistan Phone: +923039898987</p>
          </div>
          <div>
            <h1>Get in touch</h1>
            <p>You can get in touch with us on this provided email.</p>
            <p>Email: hmjawad087@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
