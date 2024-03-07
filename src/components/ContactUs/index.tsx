import Image from 'next/image';

export default function ContactUs () {
  return (
    <section className="flex min-h-screen max-w-7xl w-full justify-center md:justify-between flex-wrap md:flex-nowrap gap-16 px-8 py-16">
      <div className="md:basis-3/5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          For any inquiries, please call or email us.
          Alternatively you can fill in the following contact form
        </h2>

        <div className="flex gap-4 mt-16">
          <div className="">
            Sapphire Serenity Street,
            <br />
            Building 42, Apartment 24
          </div>
          <div className="flex-1 border-solid border-l-2 border-gray-500 pl-4">
            <div>+12 34567890</div>
            <div>info@mysite.com</div>
          </div>
        </div>
        <div className="mt-12 flex gap-4">
          <a href="#fb">
            <Image
              src="/icons/fb.svg"
              height={32}
              width={32}
              alt="Facebook"
            />
          </a>
          <a href="#twitter">
            <Image
              src="/icons/twitter.svg"
              height={32}
              width={32}
              alt="Twitter"
            />
          </a>
          <a href="#linkedin">
            <Image
              src="/icons/linkedin.svg"
              height={32}
              width={32}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
      <div className="md:basis-2/5 mt-4">
        <div className="text-red-400 text-lg">Send Us a Message</div>
        <form className="mt-2">
          <div className="flex gap-4 mt-2">
            <div className="flex-1">
              <label htmlFor="name-input">Name *</label>
              <input id="name-input" className="block border-2 border-solid border-gray-800 w-full h-12 mt-2" />
            </div>
            <div className="flex-1">
              <label htmlFor="email-input">Email *</label>
              <input id="email-input" className="block border-2 border-solid border-gray-800 w-full h-12 mt-2" />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="message-input">Email *</label>
            <textarea id="message-input" className="block border-2 border-solid border-gray-800 w-full mt-2" rows={7} />
          </div>
          <button className="py-3 px-4 font-semibold bg-gray-900 text-white w-full mt-4">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
