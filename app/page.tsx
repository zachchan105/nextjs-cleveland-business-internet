import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gray-50">

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
        <div className="relative z-10 text-center text-white px-4"> {/* Added padding for mobile */}
          <h1 className="text-3xl font-extrabold lg:text-6xl md:text-5xl sm:text-4xl">
            Fast, Reliable Internet for Cleveland Businesses
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
            Tailored Internet Solutions with Dedicated Support
          </p>
          <a 
            href="#" 
            className="inline-block px-4 py-2 mt-6 text-sm font-semibold text-blue-600 bg-white rounded-lg sm:px-6 sm:py-3 sm:text-lg hover:bg-gray-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-8 sm:py-12 bg-white"> {/* Reduced padding for mobile */}
        <div className="max-w-6xl mx-auto text-center px-4"> {/* Added padding for mobile */}
          <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">Why Choose Cleveland Business Internet?</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-700 sm:text-2xl">Dedicated Installation and Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">CBI is unlike any other local business internet broker. We have extensive experience installing and supporting internet connections in the Cleveland OH area.</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-700 sm:text-2xl">Network Security</h3>
              <p className="text-gray-600 text-sm sm:text-base">CBI takes security seriously. 90% of security threats come from the internet, and CBI takes all measures to ensure you are protected.</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-700 sm:text-2xl">Free Uptime Monitoring</h3>
              <p className="text-gray-600 text-sm sm:text-base">CBI offers 100% free monitoring to all of our clients to ensure your internet connection is stable and reliable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-8 sm:py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 text-white sm:text-4xl">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-16">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-700 text-white sm:text-2xl">Network Management</h3>
              <p className="text-gray-600 text-white text-sm sm:text-base">CBI can manage your network for a small monthly fee and ensure everything is working smoothly.</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-700 text-white sm:text-2xl">Price Shopping</h3>
              <p className="text-gray-600 text-white text-sm sm:text-base">CBI seeks out the best prices for your business internet connection, offering discounts on solid and fast internet connections.</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-700 text-white sm:text-2xl">Top Speeds</h3>
              <p className="text-gray-600 text-sm text-white sm:text-base">CBI tailors internet package speeds to your business so that you get the best possible speeds without breaking the bank.</p>
            </div>
          </div>
          <a href="#" className="inline-block px-4 py-2 mt-6 text-sm font-semibold text-white bg-blue-600 rounded-lg sm:px-6 sm:py-3 sm:text-lg hover:bg-blue-700">Explore All Services</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">Our Customers Love Us</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="italic text-gray-600 text-sm sm:text-base">“Cleveland Business Internet knew exactly what we needed and took the hassle out of shopping for a new internet connection.”</p>
              <p className="mt-4 font-semibold text-gray-700">- Mike L.</p>
            </div>
            <div>
              <p className="italic text-gray-600 text-sm sm:text-base">“CBI came in, installed our new connection with 0 downtime. Very impressive!”</p>
              <p className="mt-4 font-semibold text-gray-700">- Cynthia V.</p>
            </div>
            <div>
              <p className="italic text-gray-600 text-sm sm:text-base">“One call to CBI and we had a new, fast, and reliable internet connection within a week.”</p>
              <p className="mt-4 font-semibold text-gray-700">- David P.</p>
            </div>
            <div>
              <p className="italic text-gray-600 text-sm sm:text-base">“Thanks again guys! We have had 0 problems with our new connection since you did the install last month.”</p>
              <p className="mt-4 font-semibold text-gray-700">- Meredith G.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">Get in Touch</h2>
          <form className="grid grid-cols-1 gap-4 sm:gap-6"> {/* Adjusted gap for mobile */}
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 sm:text-base sm:py-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 sm:text-base sm:py-3"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 sm:text-base sm:py-3"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 sm:text-base sm:py-3"
            ></textarea>
            <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg sm:px-6 sm:py-3 sm:text-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
