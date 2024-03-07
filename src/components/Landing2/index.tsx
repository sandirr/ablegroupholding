import Image from 'next/image';

export default function Landing2 () {
  return (
    <section className="bg-gray-200 flex min-h-screen w-full justify-center md:justify-between items-center flex-wrap-reverse md:flex-nowrap gap-16 md:gap-24 lg:gap-32 xl:gap-40 px-8 my-16 md:my-20 lg:my-24">
      <div className="md:basis-2/5">
        <h2 className="text-5xl font-extrabold">
          A leading consulting & software development company
        </h2>
        <div className="text-lg mt-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Obcaecati dicta quisquam iure molestiae corrupti voluptatem
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-0.5">
              <Image
                src="icons/check.svg"
                width={16}
                height={16}
                alt="logo"
              />
            </div>
            <div>Lorem, ipsum dolor sit amet</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-0.5">
              <Image
                src="icons/check.svg"
                width={16}
                height={16}
                alt="logo"
              />
            </div>
            <div>Lorem, ipsum dolor sit amet</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-0.5">
              <Image
                src="icons/check.svg"
                width={16}
                height={16}
                alt="logo"
              />
            </div>
            <div>Lorem, ipsum dolor sit amet</div>
          </div>
        </div>
        <div className="mt-8 flex gap-2 mb-4">
          <button className="bg-blue-700 text-white py-3 px-4 font-bold text-sm">WHO WE ARE</button>
          <button className="bg-white py-3 px-4 font-bold text-sm">OUR SOLUTIONS</button>
        </div>
      </div>
      <div className="md:basis-3/5">
        <Image
          src="https://placehold.co/800x800.png"
          width={800}
          height={800}
          alt="logo"
          className="mr-10 w-full"
        />
      </div>
    </section>
  );
}
