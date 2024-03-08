export default function Landing1 () {
  return (
    <section className="max-w-7xl w-full min-h-screen flex flex-col items-center my-12 md:my-16 p-4">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center max-w-5xl justify-self-center">
        MONEY FOR HERE, THERE
        AND EVERYWHERE
      </h1>
      <div className="text-center mt-8 whitespace-pre-wrap text-gray-500 text-sm md:text-md lg:text-lg">
        160 countries, 40 currencies.
        Get the account built to
        {'\n'}
        save you money around the world
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button className="bg-lime-400 py-2 md:py-2.5 lg:py-3 px-6 rounded-full text-sm md:text-md font-semibold">Open an account</button>
        <button className="py-2 md:py-2.5 lg:py-3 px-6 rounded-full text-sm md:text-md font-semibold border border-black">Send money now</button>
      </div>

      <video autoPlay muted loop playsInline controls={false} className="w-full h-full object-cover mt-8">
        <source src="https://placehold.co/1920x1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
