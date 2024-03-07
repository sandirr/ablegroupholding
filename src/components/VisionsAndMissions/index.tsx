import Image from 'next/image';

export default function VisionsAndMissions () {
  return (
    <section className="min-h-screen w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-100">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold ">
          Why Choose Us?
        </h2>
        <div className="text-md sm:text-lg lg:text-xl text-gray-500 mt-4 text-center max-w-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Tempora est earum quos possimus provident,
          exercitationem nesciunt eos quod deserunt tenetur!
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between mt-16 gap-16">
        {['Quantum porter', 'Veri materni', 'Postra monter', 'Elis parae'].map((item, index) => (
          <div className="flex-1 bg-white py-16 px-4 border-b-2 border-solid border-yellow-400">
            <div className="flex justify-center">
              <Image
                src={`/vm/goal${ index + 1 }.png`}
                height={140}
                width={140}
                alt={`goal ${ item }`}
              />
            </div>
            <div className="font-bold text-xl sm:text-2xl mt-2 text-center">{item}</div>
            <div className="text-md mt-2 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae aperiam debitis cupiditate corporis vel.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ab!
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
