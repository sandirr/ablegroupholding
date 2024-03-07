import Image from 'next/image';

export default function AboutUs () {
  return (
    <section className="flex min-h-screen justify-center md:justify-between flex-wrap md:flex-nowrap px-4 sm:px-8 md:px-12 lg:px-16 w-full items-center gap-4 md:gap-8 lg:gap-12 my-16">
      <div className="md:flex-1">
        <Image
          src="/logo-gradient.png"
          width={800}
          height={800}
          alt="logo"
          className="mr-10 w-full"
        />
      </div>
      <div className="md:flex-1">
        <div className="font-extrabold text-3xl md:text-4xl lg:text-5xl">We love lottie animations and know that you have same feelings</div>
        <div className="mt-8 leading-8 text-md sm:text-lg lg:text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius error facere asperiores voluptatum est deleniti totam corporis
          eligendi minima at mollitia saepe maiores, mollitia saepe maiores
          Lorem ipsum dolor sit amet
        </div>
        <div className="mt-8 md:mt-16">
          <a className="text-md sm:text-lg lg:text-xl text-gray-500 underline" href="#more">Read more about us</a>
        </div>
      </div>
    </section>
  );
}
