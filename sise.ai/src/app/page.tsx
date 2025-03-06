import Image from "next/image";
import { SquaresDemo }   from "@/app/components/squaresdemo"
export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
    {/* Squares background layer */}
    <div className="absolute inset-0 bg-[#060606]">
      <SquaresDemo 
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="#4F894F" 
        hoverFillColor="#222"
      />
    </div>

    {/* Content layer */}
    <div className="relative z-10">
      <h1 className="text-white text-4xl font-bold text-center ">Sise.ai</h1>
      <p className="text-gray-300 mt-4 text-center font-semibold italic">
      Automated Job Application Trackerpowered by AI
      </p>
    </div>
  </main>
  );
}
