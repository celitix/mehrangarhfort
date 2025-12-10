import Image from "next/image";
import Link from "next/link";

export default function NearbyPlaces() {
  return (
    <div className="w-full">
      {/* ------------------ HERO ------------------ */}
      <section className="relative w-full h-[55vh]">
        <Image
          src="/assets/hero1.jpg"
          alt="Jodhpur Mehrangarh Fort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Nearby Places
          </h1>
        </div>
      </section>

      {/* ------------------ CONTENT WRAPPER ------------------ */}
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-16">

        {/* ------------------ Toorji Ka Jhalra ------------------ */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/assets/toorji.jpg"
            alt="Toorji ka Jhalra Stepwell"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Toorji Ka Jhalra (Stepwell)
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Toorji ka Jhalra is a beautifully restored 18th-century stepwell built 
              by a royal queen of Jodhpur. Crafted in red sandstone, this architectural 
              wonder showcases intricate carvings and an impressive multi-level step design. 
              Today, it is a popular spot for photography, sightseeing, and experiencing 
              Jodhpur’s historic water-conservation heritage.
            </p>
          </div>
        </section>

        {/* ------------------ Ghanta Ghar ------------------ */}
        <section className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Ghanta Ghar (Clock Tower)
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Located in the heart of the bustling Sardar Market, Ghanta Ghar is one of 
              Jodhpur’s most iconic landmarks. Built by <Link href="https://en.wikipedia.org/wiki/Sardar_Singh_of_Jodhpur" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Maharaja Sardar Singh,</Link> this tall 
              sandstone clock tower stands at the center of the old city. Surrounded by shops, 
              spices, handicrafts, and vibrant street life, it offers a lively glimpse into 
              everyday Jodhpur culture.
            </p>
          </div>

          <Image
            src="/assets/ghantagharr.jpg"
            alt="Ghanta Ghar Clock Tower Jodhpur"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </section>

        {/* ------------------ Jaswant Thada ------------------ */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/assets/jaswantthada.jpg"
            alt="Jaswant Thada"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Jaswant Thada
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Often referred to as the Taj Mahal of Marwar, Jaswant Thada is an elegant 
              marble cenotaph built in memory of Maharaja Jaswant Singh II. With its 
              intricately carved lattice work, peaceful gardens, and serene lakeside setting, 
              it is a must-visit attraction near Mehrangarh Fort. The reflective marble glows 
              beautifully under the sun, making it a favorite among photographers.
            </p>
          </div>
        </section>

        {/* ------------------ Sardar Government Museum ------------------ */}
        <section className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Sardar Government Museum
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Sardar Government Museum features a rich collection of artifacts, sculptures, 
              weapons, miniature paintings, and archaeological discoveries from the Marwar region. 
              Located in Umaid Garden, this museum gives visitors a deeper understanding of 
              Jodhpur’s culture, history, and royal legacy. It is an ideal stop for travelers 
              wanting to explore the city’s cultural heritage.
            </p>
          </div>

          <Image
            src="/assets/museum.jpg"
            alt="Sardar Government Museum"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </section>

        {/* ------------------ Additional Info ------------------ */}
        <section className="bg-gray-100 p-8 rounded-xl shadow-sm space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            About Mehrangarh & Jodhpur
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Mehrangarh Fort, one of the grandest hill forts of Rajasthan, rises 
            410 feet above the Blue City of Jodhpur. Known for its massive gates, 
            royal palaces, intricately carved windows, and panoramic views, it attracts 
            visitors from around the world.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Located in the western part of Rajasthan, Jodhpur shares deep cultural and 
            geographical ties with Bikaner, Jaisalmer, and Udaipur. Situated on the edge 
            of the Thar Desert, the city blends heritage, architecture, and desert landscapes 
            in a unique way.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Travelers wishing to visit Mehrangarh Fort must first reach the historic 
            city of Jodhpur, which is well-connected to major Indian cities such as 
            Delhi, Mumbai, Jaipur, Ahmedabad, and Hyderabad.
          </p>
        </section>
      </div>
    </div>
  );
}
