import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <div className="flex h-fit flex-row flex-wrap-reverse items-center justify-center">
      <div className="mt-2 lg:w-2/3">
        <h1 className="text-[#E08AED] font-bold text-6xl">Exploring & Developing Possibilities of <span style={{'color': "#9DB3E2"}}>AI</span></h1>
        <p className="text-2xl my-6">We are a group of developers that are interested in developing products utilizing the continuously growing potential of <span style={{'color': "#9DB3E2"}}>artificial intelligence.</span></p>
        <Link href="/projects">
          <button type="button" className="custom">Our Projects</button>
        </Link>

      </div>
      <div className="w-full lg:w-1/3">
        <Image src={`/image/homepage_ai.png`} 
          alt="" 
          width="0"
          height="0"
          sizes="100vw"
          className="m-auto w-1/2 lg:w-full"
          />
      </div>
    </div>
  );
}