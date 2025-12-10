import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero2.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-[#daa520]">Mehrangarh Fort</div></Link>
          <p className="text-gray-300 text-sm ">
           Mehrangarh Fort in Jodhpur is one of India’s most majestic forts, showcasing rich history and royal heritage. Rising high above the Blue City, it offers breathtaking views and unforgettable cultural experiences.Discover Rajasthan’s pride and experience the timeless charm of Mehrangarh Fort today.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/mehrangarh-fort-complete-journey-majesty-soul-jodhpur" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/hero3.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-[#daa520] transition leading-snug">
              Mehrangarh Fort: A Complete Journey Into the Majesty & Soul of Jodhpur
              </p>
            </Link>

      
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-[#daa520] transition">Home</Link></li>
            <li><Link href="/about-mehrangarh" className="hover:text-[#daa520] transition">About</Link></li>
            <li><Link href="/nearby-places" className="hover:text-[#daa520] transition">Nearby Places</Link></li>
            <li><Link href="/getting-there" className="hover:text-[#daa520] transition">Getting There</Link></li>
            <li><Link href="/blog" className="hover:text-[#daa520] transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7153.747758648936!2d73.00959757770995!3d26.2981883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418db7f5a4e8d5%3A0x91c3eb1d93338906!2sMehrangarh%20Fort!5e0!3m2!1sen!2sus!4v1764740493381!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
