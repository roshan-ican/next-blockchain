import React from "react"

function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="bg-black"
        style={{
          backgroundImage: `url(/cryptoWeb.png)`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        {/* Flex Container */}
        <div className="container flex justify-start px-15 py-10 space-y-8 mx-5 md:flex-row md:space-y-0">
          {/* Logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright © 2022, All Rights Reserved
            </div>
            {/* Logo */}
            <div className="bg-white px-2 p-2">
              <img
                src="https://www.fastxpo.com/fxp/images/logo.png"
                className="h-8 w-full"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center space-y-2 py-2">
              <p className="text-white font-medium">phone: +91 9790033633</p>
              <p className="text-white font-medium">whatsapp: +91 9790033633</p>
              <p className="text-white font-medium">Email: vsjayan@gmail.com</p>
              <p className="text-white space-y-5 font-medium">
                Address: AA Block 149, Avenue, Anna Nagar,
                <br />
                Near Anna Nagar Roundana <br />
                Land Mark - Next building <br />
                Jayam &amp; Co Chennai, <br />
                Tamil Nadu 600040
              </p>
            </div>
            {/* Social Links Container */}
            <div className="flex justify-center pt-4 space-x-4">
              {/* Link 1 */}
              <a href="#">
                <img src="images/icon-facebook.svg" alt="" className="h-8" />
              </a>
              {/* Link 2 */}
              <a href="#">
                <img src="images/icon-youtube.svg" alt="" className="h-8" />
              </a>
              {/* Link 3 */}
              <a href="#">
                <img src="images/icon-twitter.svg" alt="" className="h-8" />
              </a>
              {/* Link 4 */}
              <a href="#">
                <img src="images/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              {/* Link 5 */}
              <a href="#">
                <img src="images/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* List Container */}
          <div className="flex pl-60 justify-evenly space-x-40">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="text-yellow-500 font-medium">
                Links
              </a>
              <a href="#" className="text-white font-medium">
                Blockchain
              </a>
              <a href="#" className="text-white font-medium">
                Token
              </a>
              <a href="#" className="text-white font-medium">
                NFT
              </a>
              <a href="#" className="text-white font-medium">
                Exchange
              </a>
              <a href="#" className="text-white font-medium">
                Tokenization
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="text-yellow-500 font-medium">
                Company
              </a>
              <a href="#" className="text-white font-medium">
                About us
              </a>
              <a href="#" className="text-white font-medium">
                Carrer
              </a>
              <a href="#" className="text-white font-medium">
                Contact us
              </a>
              <a href="#" className="text-white font-medium">
                Terms &amp; Conditions
              </a>
              <a href="#" className="text-white font-medium">
                Privacy &amp; Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
