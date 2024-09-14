import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative w-full h-40 bg-gray-800 flex flex-col items-center justify-center m-0 p-0">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white m-0">Contact Us</h1>
        <div className="mt-2 text-sm sm:text-lg text-white m-0">
          (216) 868-0090 | info@clevelandbusinessinternet.com
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full pt-6 pb-8 bg-gray-50 m-0 flex-grow"> {/* Adjusted padding for better mobile space */}
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6"> {/* Added padding for mobile */}
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-800 m-0">We’d Love to Hear From You</h2>
          <p className="mb-4 text-base sm:text-lg text-gray-700 m-0">Fill out the form below and we’ll get back to you as soon as possible!</p>
          <form className="grid grid-cols-1 gap-4 m-0">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#e84c42]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#e84c42]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#e84c42]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#e84c42]"
            ></textarea>
            <button type="submit" className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-[#e84c42] rounded-lg hover:bg-[#d43a34]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
