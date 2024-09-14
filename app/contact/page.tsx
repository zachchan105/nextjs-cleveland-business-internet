import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative w-full h-40 bg-blue-600 flex flex-col items-center justify-center m-0 p-0">
        <h1 className="text-4xl font-extrabold text-white m-0">Get in Touch</h1>
        <div className="mt-2 text-white text-lg m-0">
          (216) 868-0090 | info@clevelandbusinessinternet.com
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full pt-4 pb-8 bg-gray-50 m-0"> {/* Ensure margin is 0 */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 m-0">We’d Love to Hear From You</h2>
          <p className="mb-4 text-lg text-gray-700 m-0">Fill out the form below and we’ll get back to you as soon as possible!</p>
          <form className="grid grid-cols-1 gap-4 m-0">
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
    </main>
  );
}
