import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 w-full min-h-screen bg-blue-300">
      {/* Left Content */}
      <div className="flex flex-col col-span-6 md:col-span-4 h-[500px] pt-[60px] md:pt-0 md:h-auto items-center justify-center">
        {/* Main Content */}
        <div className="md:pl-[100px] max-w-3xl px-4">
          {/* Title */}
          <h1 className="text-white text-7xl md:text-8xl font-extrabold leading-tight tracking-tight flex flex-col">
            Race for
            <span className="text-blue-700">Water</span>
          </h1>
          {/* Subheading */}
          <p className="flex flex-col text-gray-800 font-bold text-2xl md:text-4xl mt-6">
            <span>Et si l'océan était... </span>{" "}
            <span className="pl-16 text-gray-800">un corps humain?</span>
          </p>
          <p className="text-black text-lg md:text-2xl mt-6">
            Lancez-vous à la découverte de l'océan.
          </p>
          {/* Button */}
          <Link href="/explore">
            <button className="text-left bg-blue-800 hover:bg-blue-700 ring-2 ring-black text-white text-xl font-bold py-3 px-12 mt-8 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:shadow-[7px_7px_0px_black] transition-all duration-300">
              Explorer !
            </button>
          </Link>
        </div>
      </div>

      {/* Right Illustration */}
      <div className="flex col-span-6 md:col-span-3 h-min-screen mt-12 md:mt-0 placeholder:md:min-h-screen justify-left items-center bg-blue-300">
        <Image
          src="/illustration.png"
          alt="RaceForWater"
          width={600}
          height={300}
        />
      </div>
    </div>
  );
}
