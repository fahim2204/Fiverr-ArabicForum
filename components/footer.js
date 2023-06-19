import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/image/instagram.webp";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <footer className="border-t w-full  text-gray-600 body-font bg-black/10">
        <div className="sm:max-w-6xl md:mx-auto  py-6 text-center">
          <div className="grid md:grid-cols-4 md:gap-20 px-5 py-12 m-auto  items-center lg:items-start">
            <div className="mx-auto text-center md:text-left">
              <a href="/">
                <Image
                  src={logo}
                  alt="..."
                  className="cursor-pointer m-auto lg:m-0 mb-10"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="mx-auto text-center md:text-left">
              <h2 className=" text-gray-900 font-bold text-md md:text-lg tracking-widest mb-3">
                Who we are
              </h2>
              <nav className="list-none mb-5">
                <li>
                  <Link
                    href={"/#"}
                    className="text-gray-600 text-sm md:text-md mb-2 hover:text-gray-800 cursor-pointer"
                  >
                    About our site
                  </Link>
                </li>
              </nav>
            </div>
            <div className="mx-auto text-center md:text-left">
              <h2 className=" text-gray-900 font-bold text-md md:text-lg tracking-widest mb-4">
                Quick Links
              </h2>
              <nav className="list-none mb-2">
                <li>
                  <Link
                    href={"/#"}
                    className="text-gray-600 text-sm md:text-md hover:text-gray-800 cursor-pointer"
                  >
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#"}
                    className="text-gray-600 text-sm md:text-md hover:text-gray-800 cursor-pointer"
                  >
                    Terms & condition
                  </Link>
                </li>
              </nav>
            </div>
            <div className="mx-auto text-center md:text-left ">
              <h2 className=" text-gray-900 font-bold text-md md:text-lg tracking-widest mb-4">
                Email subscription
              </h2>
              <div className="flex space-x-2 justify-center md:justify-start  mb-4">
                <AiFillMail className="text-2xl" />
                <a
                  className="text-sm md:text-md cursor-pointer"
                  href="mailto:arabic@gmail.com"
                >
                  {" "}
                  arabic@gmail.com
                </a>
              </div>
              <nav className="list-none mb-2">
                <div className="py-2 ">
                  <ul className="flex space-x-2 text-4xl justify-center md:justify-start">
                    <li className="">
                      <AiFillFacebook />
                    </li>
                    <li>
                      <AiFillInstagram />
                    </li>
                    <li>
                      <AiOutlineTwitter />
                    </li>
                    <li>
                      <AiFillLinkedin />
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100">
          <div className=" items-center justify-center py-4  flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-800 text-md text-center ">
              Copyright © 2022 Treasure of Islam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Navbar;
