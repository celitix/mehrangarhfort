import React from 'react';
import Image from 'next/image';
import { Castle, Crown, Eye, Shield, Sparkles, Mountain, Camera, Users, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';


export default function MehrangarhAbout() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
   <div className="relative h-[70vh] overflow-hidden">
  <Image
    src="/assets/hero3.jpg"
    alt="Mehrangarh Fort"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/40 z-10"></div>
  <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
    <Castle className="w-20 h-20 text-amber-300 mb-6 " />
    <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
     About Mehrangarh Fort
    </h1>
  
  </div>
</div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block  rounded-full mb-6">
            <Crown className="w-8 h-8 text-amber-900" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Mehrangarh Fort</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mehrangarh Fort, standing 410 feet above Jodhpur, is one of India's most magnificent hill forts and a symbol of Rajput strength, courage, and artistic brilliance. Founded in 1459 by Rao Jodha, the fort has evolved over centuries into a vibrant cultural and historical landmark.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Its towering walls, royal palaces, museums, temples, and breathtaking views make it a world-renowned heritage destination.
          </p>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legacy & History</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mehrangarh Fort was established by the Rathore rulers as a stronghold of <Link href="https://en.wikipedia.org/wiki/Marwar" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Marwar's</Link> royal identity. Over generations, different kings expanded the fort by adding palaces, gateways, courtyards, and cultural spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Castle className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Royal Rajput Architecture</h3>
              <p className="text-gray-700">Stunning architectural designs that showcase the grandeur of Rajput heritage</p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Shield className="w-12 h-12 text-red-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Military History</h3>
              <p className="text-gray-700">Tales of battles, victories, and strategic defense systems</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Sparkles className="w-12 h-12 text-yellow-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Artistic Excellence</h3>
              <p className="text-gray-700">Exquisite paintings, carvings, and decorative elements throughout</p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-orange-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Traditions</h3>
              <p className="text-gray-700">Preserved through festivals, exhibitions, and royal ceremonies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Highlights */}
      <div className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Glorious History</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded in 1459 by Rao Jodha, the fort was built to establish a secure and commanding capital for the Marwar kingdom. Over the centuries, kings expanded and beautified it, adding palaces, courtyards, temples, and gateways.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <Mountain className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Strategic Location</h3>
                <p className="text-gray-600">Rao Jodha selected the rugged Bhakurcheeria Hill for its strategic height and defense advantage</p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <Crown className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Royal Palaces</h3>
                <p className="text-gray-600">Successive rulers added palaces such as Moti Mahal, Phool Mahal, and Takhat Vilas</p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <Shield className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Battle Scars</h3>
                <p className="text-gray-600">The fort walls still bear cannonball marks from historic battles fought to defend Marwar</p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <Castle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">UNESCO Heritage</h3>
                <p className="text-gray-600">Part of the UNESCO-listed Hill Forts of Rajasthan, celebrating its heritage value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Palace Sections */}
   <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Explore the Fort
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Ghanta Ghar */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
           

            {/* Local Image */}
            <Image
              src="/assets/Ghantaghar.jpg"
              alt="Ghanta ghar"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Ghanta ghar</h3>
              <p className="text-sm">
                First courtyard with a marble throne where newly crowned rulers are presented
              </p>
            </div>
          </div>

          {/* Daulat Khana */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-yellow-400 to-amber-500"></div>

            <Image
              src="/assets/Daulat Khana.jpg"
              alt="Daulat Khana"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Daulat Khana</h3>
              <p className="text-sm">
                Three-storey "Wealth Store" showcasing the museum's most treasured exhibits
              </p>
            </div>
          </div>

          {/* Howdah Room */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500"></div>

            <Image
              src="/assets/Howdah.jpg"
              alt="Howdah Room"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Howdah Room</h3>
              <p className="text-sm">
                Collection of ornate elephant seats with intricate silver repoussé work
              </p>
            </div>
          </div>

          {/* Palki Khana */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-red-400 to-pink-500"></div>

            <Image
              src="/assets/palki-khana.jpg"
              alt="Palki Khana"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Palki Khana</h3>
              <p className="text-sm">
                Impressive collection of royal palanquins used until the early 20th century
              </p>
            </div>
          </div>

          {/* Moti Mahal */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500"></div>

            <Image
              src="/assets/motimahal.jpg"
              alt="Moti Mahal"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Moti Mahal</h3>
              <p className="text-sm">
                Picturesque palace with high walls providing magical views of the entire area
              </p>
            </div>
          </div>

          {/* Phool Mahal */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500"></div>

            <Image
              src="/assets/phool-mahal.jpg"
              alt="Phool Mahal"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Phool Mahal</h3>
              <p className="text-sm">
                Massive structure with unending walls showcasing Rajasthan's architectural story
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

      {/* Scenic Views Section */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Majestic Views Over the Blue City</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Situated atop a rocky hill, Mehrangarh Fort offers spectacular panoramic views of Jodhpur's iconic Blue City and the sweeping landscape of the Thar desert.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <MapPin className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rooftop Viewpoints</h3>
              <p className="text-gray-600">Unmatched visuals of endless blue houses spread across Jodhpur</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Castle className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chamunda Devi Temple</h3>
              <p className="text-gray-600">Serene temple perched on the edge with city-wide views</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Mountain className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rao Jodha Desert Rock Park</h3>
              <p className="text-gray-600">Native desert flora along scenic walking trails at the fort's base</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Eye className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Royal Courtyards</h3>
              <p className="text-gray-600">Singhoria Gate and Shringar Chowk provide perfect photography backdrops</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Camera className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Golden Hour Magic</h3>
              <p className="text-gray-600">At sunset, the fort glows in golden hues - truly mesmerizing</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Sparkles className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Museum Excellence</h3>
              <p className="text-gray-600">Vintage artifacts and hand-drawn plans of nearby places on display</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-amber-900 to-orange-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <Castle className="w-16 h-16 text-amber-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the Majesty of Mehrangarh Fort
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Every stone narrates stories of battles, victories, coronations, and royal life
          </p>
          <button className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Plan Your Visit
          </button>
        </div>
      </div>
    </div>
  );
}