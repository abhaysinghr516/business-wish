import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import heroImage from "../assets/images/hero.svg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-wrap">
          <div className="w-full pl-10 sm:w-2/3 p-4">
            <div className="bg-white rounded p-4">
              <h1 className="text-6xl font-bold p-4 w-full mt-20 ">
                Welcome to <span className="text-[#8B5CF6]">Business Wish</span>
              </h1>
              <h2 className="text-3xl p-4">
                Empower Your Business with Our UI Components
              </h2>
              <p className="p-4 text-lg w-10/12">
                Crafted with Tailwind CSS, Designed for React, Next.js, and
                HTML. Elevate your projects with visually appealing, intuitive,
                and efficient UI components.{" "}
              </p>
              <Link href="/components">
                <button className="p-4 ml-4 rounded bg-[#7C3AED] transition ease-in-out  text-white  font-semibold border border-white hover:bg-white hover:text-[#7C3AED] hover:border hover:border-[#7C3AED]">
                  Explore Components
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/3 -ml-32 p-4">
            <div className=" -skew-x-12 scale-90 rounded p-4">
              <Image src={heroImage} alt="hero" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
