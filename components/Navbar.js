import React from "react"
import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <nav className="relative container items-center bg-white max-w-full px-4 shadow-md h-12">
        {/* flex container */}
        <div className="flex items-center justify-around">
          {/* Logo */}
          <div className="m-auto p-6">
            <img
              src="https://www.fastxpo.com/fxp/images/logo.png"
              alt=""
              className="absolute mx-4 left-0 bottom-1 my-0"
            />
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-8 mx-4 md:flex">
            <Link href="/">
              <a>
                <p className="text-blue-900 hover:text-blue font-semibold">
                  Blockchain
                </p>
              </a>
            </Link>
            {/* token */}
            <a>
              <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold">
                Token
              </p>
            </a>
            {/* NFT */}
            <a>
              <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold">
                NFT
              </p>
            </a>
            {/* Exchange */}
            <a>
              <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold">
                Exchange
              </p>
            </a>
            {/* Tokenization */}
            <a>
              <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold">
                Tokenization
              </p>
            </a>
            {/* Company */}
            <a>
              <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold">
                Company
              </p>
            </a>
            <a>
              <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold">
                Contact Us
              </p>
            </a>
          </div>
          {/* Button */}
          {/* <a
    
    class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight hidden md:block"
    >Get Started</a
  > */}
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top" />
            <span className="hamburger-middle" />
            <span className="hamburger-bottom" />
            &gt;
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    </>
  )
}
