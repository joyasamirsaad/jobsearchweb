import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#00CBA3] flex flex-row flex-wrap pt-55 pb-20">
      <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 lg:grid-cols-8 gap-y-8 lg:gap-y-12">
        {/* JobNow Logo + Description */}
        <div className="col-span-1 w-[60%] lg:col-span-2 lg:w-auto flex flex-col items-start">
          <h1 className="text-2xl font-bold">
            <span className="text-black">Job</span>
            <span className="text-white">Now</span>
          </h1>
          <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.</p>
        </div>

        {/* Wrapper for Company + Pages + Contact Us */}
        <div className="col-span-1 lg:col-span-6 lg:col-start-5 grid grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company */}
          <div className="flex flex-col items-start text-left text-white">
            <h2 className="font-bold text-2xl mb-2">Company</h2>
            <ul className="space-y-1">
              <li>Address: 123 Fifth Avenue, New York - 1060, USA.</li>
              <li>Call Us: + (1600) 456 7890</li>
              <li>Email: yourid@example.com</li>
              <li>Mon - Sat: 9:00 AM - 19:00 PM</li>
            </ul>
          </div>

          {/* Pages */}
          <div className="flex flex-col items-center text-left text-white">
            <h2 className="font-bold text-2xl mb-2">Pages</h2>
            <ul className="space-y-1 list-none text-white">
              {["Home", "Booking", "Facilities", "About Us", "Location", "Contact"].map((item) => (
                <li key={item} className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-white before:font-bold hover:text-[#003a2c] hover:before:text-[#003a2c] transition-colors duration-300 ease-in-out">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start text-left text-white">
            <h2 className="font-bold text-2xl mb-2">Contact Us</h2>
            <div className="flex flex-row gap-3 text-xl">
              {["google", "facebook-f", "twitter", "linkedin-in"].map((platform) => (
                <Link key={platform} href="#" aria-label={platform} target="_blank">
                  <i className={`fab fa-${platform} hover:text-[#003a2c] transition-colors duration-300 ease-in-out`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}