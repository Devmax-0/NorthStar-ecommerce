import Link from "next/link";

export default function Offers() {
  return (
    <div className="flex flex-row md:flex-col min-h-[500px] w-full items-center justify-center md:space-y-8 space-y-0 space-x-8 md:px-4 px-0 ">
      <section className="flex flex-col h-[400px] items-center justify-center bg-[#000000] p-8 text-white  w-3/6 md:w-full">
        <h2 className="text-3xl font-bold uppercase">Peace of Mind</h2>
        <p className="mt-4 max-w-md text-center text-gray-300">
          A one-stop platform for all your fashion needs, hassle-free. Buy with
          a peace of mind.
        </p>
        <Link
          className="mt-8 inline-flex h-10 items-center justify-center bg-white px-8 py-4 text-sm font-medium text-[#024E82] transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-[#024E82] focus:ring-offset-2"
          href="#"
        >
          BUY NOW
        </Link>
      </section>
      <section className="flex flex-col h-[400px] items-center justify-center bg-[#000000] p-8 text-white  md:w-full w-2/5">
        <h2 className="text-2xl font-bold">BUY 2 GET 1 FREE</h2>
        <p className="mt-4 text-center text-gray-300">
          End of season sale. Buy any 2 items of your choice and get 1 free.
        </p>
        <Link
          className="mt-8 inline-flex h-10 items-center justify-center bg-white px-8 py-4 text-sm font-medium text-[#024E82] transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-[#024E82] focus:ring-offset-2"
          href="#"
        >
          BUY NOW
        </Link>
      </section>
    </div>
  );
}
