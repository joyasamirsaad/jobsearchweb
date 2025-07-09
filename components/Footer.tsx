import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#00CBA3] flex flex-row justify-center items-center gap-8 flex-wrap pt-70 pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-center items-start gap-12 flex-wrap text-white md:text-base">
        <div className="flex flex-col items-start max-w-xs">
          <h1 className="text-2xl font-bold"><span className="text-black">Job</span><span className="text-white">Now</span></h1>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.</p>
        </div>

        <div className="flex flex-row gap-8 items-start md:text-left justify-between w-full md:w-auto">
          <div className="flex flex-col items-start text-left">
            <h2 className="font-bold text-2xl mb-2">Company</h2>
            <ul className="space-y-1">
              <li>Address: 123 Fifth Avenue, New York - 1060, USA.</li>
              <li>Call Us: + (1600) 456 7890</li>
              <li>Email: yourid@example.com</li>
              <li>Mon - Sat: 9:00 AM - 19:00 PM</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-end md:items-start text-left">
            <h2 className="font-bold text-2xl mb-2">Pages</h2>
            <ul className="space-y-1">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Booking</Link></li>
              <li><Link href="#">Facilities</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Location</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>
        

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
    </footer>
  );
}