import Image from 'next/image';

export default function Subsidiaries () {
  return (
    <section className="min-h-screen max-w-7xl w-full my-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-2xl w-full">
        Learn about three pillars of our strategy
      </h2>
      <div className="text-md sm:text-lg lg:text-xl text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odit.</div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-16">
        {['CRM', 'SAP', 'ERP'].map((item, index) => (
          <div>
            <div className="flex justify-center md:justify-start">
              <Image
                src={`/subsidiaries/cube${ index + 1 }.png`}
                height={140}
                width={140}
                alt={`pillar ${ item }`}
              />
            </div>
            <div className="font-extrabold text-xl sm:text-2xl md:text-3xl mt-2">{item}</div>
            <div className="tracking-wider uppercase text-gray-500 text-sm font-bold mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            <div className="text-gray-500 text-md mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae aperiam debitis cupiditate corporis vel.
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <div className="flex items-center gap-2 ml-2">
                <Image
                  src="/icons/check.svg"
                  width={16}
                  height={16}
                  alt="logo"
                />
                <div className="text-gray-500 text-md italic">Lorem ipsum dolor sit.</div>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Image
                  src="/icons/check.svg"
                  width={16}
                  height={16}
                  alt="logo"
                />
                <div className="text-gray-500 text-md italic">Lorem ipsum dolor sit.</div>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Image
                  src="/icons/check.svg"
                  width={16}
                  height={16}
                  alt="logo"
                />
                <div className="text-gray-500 text-md italic">Lorem ipsum dolor sit.</div>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Image
                  src="/icons/check.svg"
                  width={16}
                  height={16}
                  alt="logo"
                />
                <div className="text-gray-500 text-md italic">Lorem ipsum dolor sit.</div>
              </div>
            </div>
            <div className="mt-8 ml-8">
              <a className="text-sm font-extrabold" href="#read">READ MORE</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
