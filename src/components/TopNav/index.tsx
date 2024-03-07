import Image from 'next/image';

export default function TopNav () {
  return (
    <nav className="max-w-7xl w-full flex justify-between flex-1 py-2">
      <div className="flex items-center gap-4 text-sm">
        <Image
          src="https://placehold.co/80x30.png"
          width={80}
          height={30}
          alt="logo"
          className="mr-10"
        />
        <a href="#personal" className="bg-lime-400 py-1.5 px-4 rounded-full font-medium">Personal</a>
        <a href="#business" className="font-medium">Business</a>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <a href="#features" className="font-medium">Features</a>
        <a href="#pricing" className="font-medium">Pricing</a>
        <a href="#help" className="font-medium">Help</a>
        <a href="#help" className="font-medium flex items-center">
          <Image
            src="https://placehold.co/20x20.png"
            width={20}
            height={20}
            alt="logo"
          />
          EN
        </a>
        <a href="#help" className="font-medium whitespace-nowrap">Log In</a>
        <a href="#personal" className="bg-lime-400 py-1.5 px-4 rounded-full font-medium">Register</a>
      </div>
    </nav>
  );
}
