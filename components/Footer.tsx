import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#00CBA3] flex flex-row flex-wrap pt-70 pb-20">
      <div className="container mx-auto px-4 md:px-20 text-white md:text-base">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Mobile Layout */}
          <div className="md:hidden col-span-full">
            {/* ROW 1: Logo and Description */}
            <div className="flex flex-col items-start max-w-xs mb-8">
              <h1 className="text-2xl font-bold">
                <span className="text-black">Job</span>
                <span className="text-white">Now</span>
              </h1>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.</p>
            </div>

            {/* ROW 2: Company on left, Pages on right */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Company */}
              <div className="flex flex-col items-start text-left">
                <h2 className="font-bold text-2xl mb-2">Company</h2>
                <ul className="space-y-1">
                  <li>Address: 123 Fifth Avenue, New York - 1060, USA.</li>
                  <li>Call Us: + (1600) 456 7890</li>
                  <li>Email: yourid@example.com</li>
                  <li>Mon - Sat: 9:00 AM - 19:00 PM</li>
                </ul>
              </div>
              
              {/* Pages */}
              <div className="flex flex-col items-end text-left">
                <h2 className="font-bold text-2xl mb-2">Pages</h2>
                <ul className="space-y-1 list-none text-white">
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Booking</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Facilities</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">About Us</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Location</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ROW 3: Contact Us on left */}
            <div className="flex flex-col items-start text-left">
              <h2 className="font-bold text-2xl mb-2">Contact Us</h2>
              <div className="flex flex-row gap-3 text-xl">
                <Link href="#" aria-label="Google" target="_blank"><i className="fab fa-google"></i></Link>
                <Link href="#" aria-label="Facebook" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                <Link href="#" aria-label="Twitter" target="_blank"><i className="fab fa-twitter"></i></Link>
                <Link href="#" aria-label="LinkedIn" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:contents">
            {/* Logo and Description */}
            <div className="flex flex-col items-start max-w-xs">
              <h1 className="text-2xl font-bold">
                <span className="text-black">Job</span>
                <span className="text-white">Now</span>
              </h1>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.</p>
            </div>

            {/* Company, Pages, and Contact Us grouped together */}
            <div className="grid grid-cols-3 gap-8">
              {/* Company */}
              <div className="flex flex-col items-start text-left">
                <h2 className="font-bold text-2xl mb-2">Company</h2>
                <ul className="space-y-1">
                  <li>Address: 123 Fifth Avenue, New York - 1060, USA.</li>
                  <li>Call Us: + (1600) 456 7890</li>
                  <li>Email: yourid@example.com</li>
                  <li>Mon - Sat: 9:00 AM - 19:00 PM</li>
                </ul>
              </div>
              
              {/* Pages */}
              <div className="flex flex-col items-start text-left">
                <h2 className="font-bold text-2xl mb-2">Pages</h2>
                <ul className="space-y-1 list-none text-white">
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Booking</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Facilities</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">About Us</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Location</Link>
                  </li>
                  <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col items-start text-left">
                <h2 className="font-bold text-2xl mb-2">Contact Us</h2>
                <div className="flex flex-row gap-3 text-xl">
                  <Link href="#" aria-label="Google" target="_blank"><i className="fab fa-google"></i></Link>
                  <Link href="#" aria-label="Facebook" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="#" aria-label="Twitter" target="_blank"><i className="fab fa-twitter"></i></Link>
                  <Link href="#" aria-label="LinkedIn" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}