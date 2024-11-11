
import Image from "next/image";
import HomeCarrousel from "../components/home-carrousel"

export default function Home() {
  return (
<div className=" min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-center mb-8">

          <Image
            src="/banner.png"
            alt="banner"
            width={2000}
            height={50}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-gray-800">PRODUCTOS DESTACADOS</h2>
          </div>
          <div className="w-full">
            <HomeCarrousel/>
          </div>
        </div>

         <div className="flex flex-col items-center">
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-gray-800">NUESTRA SELECCION ESPECIAL</h2>
          </div>
          <div className="w-full">
            < HomeCarrousel/>
          </div>
        </div>
      </div>  
    </div> 

  );
}
