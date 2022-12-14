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
                <p className="text-blue-900 hover:text-blue font-semibold active:text-yellow-500">
                  Blockchain
                </p>
              </a>
            </Link>
            {/* token */}
            <Link href="/token">
              <a>
                <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold active:text-yellow-500">
                  Token
                </p>
              </a>
            </Link>
            {/* NFT */}
            <Link href="/nft">
              <a>
                <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold active:text-yellow-500">
                  NFT
                </p>
              </a>
            </Link>
            {/* Exchange */}
            <Link href="/exchange">
              <a>
                <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold active:text-yellow-500">
                  Exchange
                </p>
              </a>
            </Link>
            {/* Tokenization */}
            <Link href="/tokenization">
              <a>
                <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold active:text-yellow-500">
                  Tokenization
                </p>
              </a>
            </Link>
            {/* Company */}
            <Link href="/company">
              <a>
                <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold active:text-yellow-500">
                  Company
                </p>
              </a>
            </Link>
            {/* Contact */}
            <Link href="/contact">
              <a>
                <p className="text-blue-900 hover:text-darkGreyishBlue font-semibold active:text-yellow-500">
                  Contact Us
                </p>
              </a>
            </Link>
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
