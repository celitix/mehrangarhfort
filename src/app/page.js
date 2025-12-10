import HeroSection from "./components/hero";
import CardsCarousel from "./components/cardscarousel";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
   <>
   {/*=============== Hero Section ============*/}
   <HeroSection />

   {/*=============== Intro Section ============*/}
    <section className="relative py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase border-b-2 border-gray-400 pb-1">
              Historic Wonder of Rajasthan
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            The Majestic Crown of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-500">
              Jodhpur
            </span>
          </h2>
          <p className="text-xl font-semibold text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience the grandeur, history, and timeless beauty of one of India's most magnificent hill forts.
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Mehrangarh Fort stands majestically 410 feet above the enchanting Blue City of Jodhpur. Built in 1459 by <Link href="https://en.wikipedia.org/wiki/Rao_Jodha" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Rao Jodha</Link>, the fort is a symbol of Rajput valor, royal pride, and architectural brilliance. With its massive walls, ornate palaces, ancient temples, and panoramic city views, Mehrangarh offers an unforgettable journey into Rajasthan's royal heritage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are a history lover, culture explorer, photographer, or traveler—Mehrangarh Fort promises an immersive experience like no other.
            </p>
          </div>

          {/* Decorative bottom accent */}
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>

  {/*================ Second section ================ */}
  <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="font-raleway text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Main Attractions
        </h2>
      

        {/* Grid Section */}
        <div className="font-raleway grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-28 relative mb-4">
              <Image
                src="/assets/motimahal.jpg"   
                alt="Moti Mahal"
                fill
                className="object-cover rounded"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">Moti Mahal</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The Moti Mahal, or Pearl Palace, stands as one of Mehrangarh Fort's most elegant chambers, built during the reign of King <Link href="https://en.wikipedia.org/wiki/Sur_Singh" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Sur Singh</Link> in the 17th century. 
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-28 relative mb-4">
              <Image
                src="/assets/phul-mahal.jpeg"
                alt="Phool Mahal"
                fill
                className="object-cover rounded"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">Phool Mahal</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The Phool Mahal, meaning Palace of Flowers, is the most lavish and private chamber within Mehrangarh Fort, reserved exclusively for the Maharaja's personal enjoyment and pleasure. 
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-28 relative mb-4">
              <Image
                src="/assets/sheesh-mahal.jpg"
                alt="Sheesh Mahal"
                fill
                className="object-cover rounded"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">Sheesh Mahal</h3>
            <p className="text-gray-600 text-sm md:text-base  leading-relaxed">
              The Sheesh Mahal, or Palace of Mirrors, dazzles visitors with its extraordinary mirror work and plaster decorations that cover the walls and ceiling in intricate patterns. 
            </p>
          </div>

        </div>
      </div>
    </section>


  {/*================ Carousel Section ================ */}
  <CardsCarousel />
   </>
  );
}
