import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-6 bg-gray-50">
      {/* Header */}
<header className="w-full py-6 bg-white shadow-lg">
  <nav className="flex items-center justify-between max-w-6xl mx-auto">
    {/* Logo as a Link to the Homepage */}
    <a href="/" className="flex items-center">
      <Image 
        src="/cbilogo.png" 
        alt="Cleveland Business Internet Logo" 
        width={200}  // Adjust width as needed
        height={50}  // Adjust height as needed
        priority
      />
    </a>
    
    {/* Navigation Links */}
    <ul className="flex space-x-6">
      <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
      <li><a href="#" className="text-gray-700 hover:text-blue-600">Services</a></li>
      <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
      <li><a href="#" className="text-gray-700 hover:text-blue-600">Testimonials</a></li>
      <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
    </ul>
    
    {/* Call-to-Action Button */}
    <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
      Get a Quote
    </a>
  </nav>
</header>


{/* Hero Section */}
<section className="relative flex items-center justify-center w-full h-[70vh] bg-gray-800">
  {/* Image as Background */}
  <Image 
    src="/cleveland-skyline.jpg" 
    alt="Cleveland Skyline" 
    fill 
    style={{ objectFit: "cover" }} 
    quality={100} 
    className="absolute inset-0" 
    priority
  />

  {/* Overlay for Darkening the Image */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Text Content */}
  <div className="relative z-10 text-center text-white">
    <h1 className="text-4xl font-extrabold lg:text-6xl">
      Fast, Reliable Internet for Cleveland Businesses
    </h1>
    <p className="mt-4 text-lg lg:text-2xl">
      Tailored Internet Solutions with Dedicated Support
    </p>
    <a 
      href="#" 
      className="inline-block px-6 py-3 mt-6 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-200"
    >
      Learn More
    </a>
  </div>
</section>



      {/* About Section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Why Choose Cleveland Business Internet?</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">Dedicated Installation and Support</h3>
              <p className="text-gray-600">CBI is unlike any other local business internet broker. We have extensive experience installing and supporting internet connections in the Cleveland OH area.</p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">Network Security</h3>
              <p className="text-gray-600">CBI takes security seriously. 90% of security threats come from the internet, and CBI takes all measures to ensure you are protected.</p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">Free Uptime Monitoring</h3>
              <p className="text-gray-600">CBI offers 100% free monitoring to all of our clients to ensure your internet connection is stable and reliable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">Network Management</h3>
              <p className="text-gray-600">CBI can manage your network for a small monthly fee and ensure everything is working smoothly.</p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">Price Shopping</h3>
              <p className="text-gray-600">CBI seeks out the best prices for your business internet connection, offering discounts on solid and fast internet connections.</p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">Top Speeds</h3>
              <p className="text-gray-600">CBI tailors internet package speeds to your business so that you get the best possible speeds without breaking the bank.</p>
            </div>
          </div>
          <a href="#" className="inline-block px-6 py-3 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">Explore All Services</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Customers Love Us</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="italic text-gray-600">“Cleveland Business Internet knew exactly what we needed and took the hassle out of shopping for a new internet connection.”</p>
              <p className="mt-4 font-semibold text-gray-700">- Mike L.</p>
            </div>
            <div>
              <p className="italic text-gray-600">“CBI came in, installed our new connection with 0 downtime. Very impressive!”</p>
              <p className="mt-4 font-semibold text-gray-700">- Cynthia V.</p>
            </div>
            <div>
              <p className="italic text-gray-600">“One call to CBI and we had a new, fast, and reliable internet connection within a week.”</p>
              <p className="mt-4 font-semibold text-gray-700">- David P.</p>
            </div>
            <div>
              <p className="italic text-gray-600">“Thanks again guys! We have had 0 problems with our new connection since you did the install last month.”</p>
              <p className="mt-4 font-semibold text-gray-700">- Meredith G.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Get in Touch</h2>
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button type="submit" className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800">
        <div className="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-4 text-center text-white lg:flex-row">
          <div className="text-lg font-bold">Cleveland Business Internet</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
          <div className="flex space-x-6">
            <a href="#"><Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></a>
            <a href="#"><Image src="/facebook.png" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/twitter.png" alt="Twitter" width={24} height={24} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
