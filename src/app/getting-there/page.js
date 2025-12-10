import Image from "next/image";
import { MdFlight, MdTrain, MdDirectionsCar, MdLocationOn } from "react-icons/md";
import Link from "next/link";

export default function HowToReach() {
  return (
    <div className="w-full">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/assets/hero2.jpg"
          alt="Mehrangarh Fort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-yellow-700/20 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide text-center">
            How to Reach Mehrangarh Fort
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* ------------------ INTRO ------------------ */}
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Mehrangarh Fort, one of India’s most majestic forts, is located in the
          heart of Jodhpur, <Link href="https://en.wikipedia.org/wiki/Rajasthan" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Rajasthan.</Link> Here’s your complete travel guide on how
          to reach this iconic destination.
        </p>

        {/* ------------------ BY AIR ------------------ */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/assets/air.png"
            alt="Jodhpur Airport"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <MdFlight className="text-blue-600" /> By Air
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Jodhpur Airport is located around <strong>8 kilometers</strong> from
              Mehrangarh Fort. Regular flights operate from major Indian cities,
              making air travel comfortable and time-efficient. Taxis,
              auto-rickshaws, and app-based cabs are easily available from the
              airport to the fort.
            </p>
          </div>
        </section>

        {/* ------------------ BY TRAIN ------------------ */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <MdTrain className="text-red-600" /> By Train
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Jodhpur Junction Railway Station is just{" "}
              <strong>6 kilometers</strong> from the fort and is one of the busiest
              railheads in Rajasthan. It connects Jodhpur to major cities across
              India, including Delhi, Mumbai, Kolkata, Chennai, Bengaluru,
              Ahmedabad, and Jaipur. From the station, travelers can reach the
              fort using autos, cabs, or local buses.
            </p>
          </div>
          <Image
            src="/assets/railwayy.jpg"
            alt="Jodhpur Railway Station"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </section>

        {/* ------------------ BY ROAD ------------------ */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/assets/bus.jpg"
            alt="Road to Jodhpur"
            width={700}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <MdDirectionsCar className="text-green-600" /> By Road
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Jodhpur is connected by National Highways 62, 25, and 114, linking
              it to Jaipur, Udaipur, Jaisalmer, Bikaner, and Ahmedabad. Buses,
              private vehicles, rental cabs, and tourist coaches operate
              frequently, making road travel comfortable and scenic.
            </p>
          </div>
        </section>

        {/* ------------------ ONCE IN JODHPUR ------------------ */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <MdLocationOn className="text-purple-600" /> Once You Reach Jodhpur
          </h2>

          <p className="text-gray-700 leading-relaxed">
            After arriving in Jodhpur, traveling to Mehrangarh Fort is simple
            and convenient. The city welcomes you with warm Rajasthani
            hospitality and vibrant streets filled with colors, culture, and
            tradition.
          </p>

          <p className="font-medium">Local transport options include:</p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Auto-rickshaws</li>
            <li>Private taxis</li>
            <li>App-based cabs (Ola / Uber)</li>
            <li>Tourist buses</li>
            <li>Bike rentals</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            The fort sits at the top of a hill, and the ride takes you through
            narrow lanes, blue houses, and traditional neighborhoods—adding charm
            to your journey.
          </p>
        </section>

        {/* ------------------ TOURISM TRANSPORT ------------------ */}
        <section className="space-y-4 bg-gray-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold">Tourism Transport</h2>
          <p className="text-gray-700 leading-relaxed">
            The Rajasthan tourism department and local authorities ensure smooth
            travel for visitors. City buses and tourist vehicles frequently ply
            to Mehrangarh, dropping passengers at the entrance of the fort.
          </p>
          <p className="text-gray-700">
            From there, visitors can explore the fort on foot, take an elevator
            (paid), or enjoy scenic walking pathways.
          </p>
        </section>
      </div>
    </div>
  );
}
