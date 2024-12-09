import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function Footer() {
  return (
    <div className="w-full text-[#8A8FB9] bg-[#EEEFFB] md:hidden">
      {/* Footer */}
      <footer className="px-6 py-10  text-base font-normal text-ç">
        {/* Hekto Section */}
        <div className="mb-10 flex flex-col justify-center items-center  gap-6">
          <h2 className="text-[38px] font-bold text-black">Hekto</h2>

          <div className="mt-4 flex w-[300px] items-center justify-end gap-4 rounded-[3px] bg-white lg:h-[44px] lg:w-[377px]">
            <input
              type="email"
              placeholder="Enter Email Address"
              className={`${lato.className} px-4`}
            />

            <button
              className={`h-[39px] w-[70px] rounded-[3px] bg-[#FB2E86] font-medium text-white lg:w-[135px] ${roboto.className} `}
            >
              Sign Up
            </button>
          </div>
          <p>Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        {/* Categories Section */}
        <div className="mb-10 flex justify-center items-center text-center flex-col gap-6">
          <h5 className="text-[22px]   text-black">Categories</h5>
          <ul className="flex flex-col  gap-4">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div className="mb-10 flex  justify-center items-center text-center flex-col gap-6">
          <h5 className="text-[22px] text-black">Customer Care</h5>
          <ul className="flex flex-col gap-4">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages Section */}
        <div className="flex  justify-center items-center text-center flex-col gap-6">
          <h5 className="text-[22px] text-black">Pages</h5>
          <ul className="flex flex-col gap-4">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="flex flex-col items-center bg-[#E7E4F8] py-4">
        <span className="text-center text-[#8A8FB9] font-bold">
          © Webecy - All Rights Reserved
        </span>
        <div className="mt-2">
          <Image
            src="/Group205.png"
            alt="Social Media Icons"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
