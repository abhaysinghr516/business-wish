import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-purple-600">
                We&apos;re launching templates soon
              </h1>
              <p className="text-gray-600 mb-12">
                Enter your email to be the first to know when we launch.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex items-center">
                  <input
                    type="email"
                    className="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;
