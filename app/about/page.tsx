import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-64 bg-gray-800">
        {/* Image as Background */}
        <Image 
          src="/servers2.jpg" 
          alt="Servers" 
          fill 
          style={{ objectFit: "cover" }} 
          quality={100} 
          className="absolute inset-0" 
          priority
        />
      </section>

      {/* Feature Cards Section */}
      <section className="w-full py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 text-center px-4 sm:px-6"> {/* Adjusted padding for mobile */}
          {/* Card 1 */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">No Cat Memes or Facebook Games Here</h2>
            <p className="mt-4 text-gray-600">
              We know that your internet connection is serious business. CBI helps companies in northeast Ohio secure the best deal and the most reliable connection when upgrading or installing new internet.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">On-Site Installation Assistance</h2>
            <p className="mt-4 text-gray-600">
              We assist ISPs on-site and ensure the installation is done correctly. CBI has extensive experience across various environments, ensuring a smooth and seamless setup.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Free Network Assessments</h2>
            <p className="mt-4 text-gray-600">
              CBI provides a free network assessment during most on-site visits. We ensure everything is done right the first time, saving your business time and money.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Commitment Section */}
      <section className="w-full py-8 sm:py-12 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Adjusted padding for mobile */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">100% Committed to Your Business</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            We shop all ISPs and aren’t beholden to any one of them. We help you find the best deal and ensure everything goes smoothly. In most cases, our service is free and comes with a free network assessment.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-8 sm:py-12 bg-gray-800 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Partners</h2>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-6 lg:grid-cols-4"> {/* 2x2 grid on mobile, 4x1 on large screens */}
            {/* Partner logos are centered and scaled down for mobile */}
            <div className="flex justify-center">
              <Image 
                src="/partner1.png" 
                alt="Partner 1" 
                width={150} 
                height={80} 
                className="w-32 sm:w-36 lg:w-40 h-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src="/partner2.png" 
                alt="Partner 2" 
                width={150} 
                height={80} 
                className="w-32 sm:w-36 lg:w-40 h-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src="/partner3.png" 
                alt="Partner 3" 
                width={150} 
                height={80} 
                className="w-32 sm:w-36 lg:w-40 h-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src="/partner4.png" 
                alt="Partner 4" 
                width={150} 
                height={80} 
                className="w-32 sm:w-36 lg:w-40 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="w-full py-8 sm:py-12 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Adjusted padding for mobile */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Join Our Team</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Interested in working with Cleveland Business Internet? We’re always looking for talented individuals to join our team.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-6 text-base sm:text-lg font-semibold text-white bg-[#e84c42] rounded-lg hover:bg-[#d43a34]"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
