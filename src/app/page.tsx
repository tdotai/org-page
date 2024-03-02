import Image from "next/image";


export default function Home() {
  return (
    <div className="flex h-fit flex-row flex-wrap-reverse items-center justify-center w-full m-auto p-3 max-w-[1200px]">
      <div className="mt-2 lg:w-1/2">
        <h1 className="text-[#E08AED] font-bold text-6xl">Exploring & Developing Possibilities of <span style={{'color': "#9DB3E2"}}>AI</span></h1>
        <p className="text-2xl my-6">We are a group of developers that are interested in developing products utilizing the continuously growing potential of <span style={{'color': "#9DB3E2"}}>artificial intelligence.</span></p>
        <button 
          style={{
            backgroundColor : "#9DB3E2", 
            width:"300px", 
            height:"64px", 
            fontWeight:"bold", 
            fontSize:"28px",
            boxShadow: "10px 10px #E08AED",
            }}
          >
          Our Projects
        </button>
      </div>
      <div className="lg:w-1/2">
        <Image src={`/image/homepage_ai.png`} 
          alt="" 
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          />
      </div>

    </div>
  );
}
