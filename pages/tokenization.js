import Image from "next/image"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import meet from "../public/meet.png"
import bit from "../public/bit.png"

export default function Tokenization() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(/backgroundCopy.png)`,
          width: "100vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Best Tokenization service in blockchain */}
        <div className="flex flex-col-reverse md:flex-row items-center px-6 space-y-0 md:space-y-0">
          {/* Left Item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2 justify-around mx-10">
            <h1 className="w-full text-4xl font-bold text-center md:text-5xl md:text-left text-white">
              Best Tokenization service in Blockchain
            </h1>
            <p className="justify-center items-center text-white w-full md:text-left leading-2 ">
              Our tokenization services helped busineeses unlock new channels by
              tokenizing financial assets and making them tradeable across
              digital platforms throughout the years. We provide end-to-end
              token lifecycle consulting for and not limited to fungible and
              non-fungible assets, with proven consulting across a broad range
              of fungible and non-fungible assets.
            </p>
            <div className="flex justify-center md:justify-start space-x-2 ">
              <a
                href="#"
                className="font-semibold p-3 px-4 pt-2 text-darkBlue bg-yellow-400 rounded-md baseline hover:bg-yellow-500"
              >
                Create Your Own Token
              </a>
              <a
                href="#"
                className="font-semibold p-3 px-4 pt-2 text-darkBlue bg-white rounded-md baseline hover:bg-white"
              >
                Know More
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            {/* <img alt="blockchaind-image" src= /> */}
            <Image src={meet} alt="blockchain-image" className="scale-75" />
          </div>
        </div>
        {/* Digital Asset Tokenization Services */}
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
          {/* The right side */}
          <div>
            <Image src={bit} alt="nft " className="scale-100" />
          </div>
          {/* the left side */}
          <div className="mx-10 space-y-5">
            <h1 className="text-yellow-500 font-bold text-3xl">
              Digital Asset Tokenization Services
            </h1>
            <p className="font-semibold text-white text-xl">
              Unlocking New Possibilities
            </p>
            <p className="text-white leading-2">
              Ensuring irrefutable Ownership of Digital Assets Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Cum adipisci,
              reiciendis odit ex sit saepe est illo libero minus dolorum quo
              atque sed perferendis blanditiis, quae nihil numquam fugit
              sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cum et ex iure? Similique enim nemo, asperiores modi a eos odio,
              iusto blanditiis est repellat molestiae cupiditate delectus qui
              minima sunt. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Delectus, illum adipisci quisquam exercitationem nulla
              explicabo quae temporibus non. Optio nihil id delectus ipsa itaque
              ducimus consequuntur commodi minus explicabo eligendi.
            </p>
          </div>
        </div>
        {/* Tokenization offering */}
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="font-bold text-white text-3xl">
            Tokenization offering
          </h1>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:pt-10 lg:pb-10 mx-12">
          {/* card 1 */}
          <div className="p-5 rounded-lg bg-[#23395f] h-full">
            <div className="flex flex-col items-start justify-start my-5 space-y-8">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Real Estate
              </h3>
              <p className="text-sm leading-6 text-white">
                NFT development company tokens are a dependable solution for
                combating the problem of product duplication since they create a
                unique product identity and authenticate ownership.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-5 rounded-lg bg-[#23395f]">
            <div className="flex flex-col items-start justify-start my-5 space-y-8">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Commodities
              </h3>
              <p className="text-sm leading-6 text-white">
                NFTs provide complete transparency in the product sales process,
                allowing creators and buyers to track the lifecycle of a product
                to the smallest detail.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-5 rounded-lg bg-[#23395f]">
            <div className="flex flex-col items-start justify-start my-5 space-y-4">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Documents
              </h3>
              <p className="text-sm leading-6 text-white">
                Because NFT token creation takes place on a blockchain platform,
                the certification is indestructible and timeless due to the high
                security code.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="p-5 rounded-lg bg-[#23395f]">
            <div className="flex flex-col items-start justify-start my-5 space-y-4">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Utility Assets
              </h3>
              <p className="text-sm leading-6 text-white">
                Because NFT token creation takes place on a blockchain platform,
                the certification is indestructible and timeless due to the high
                security code.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="p-5 rounded-lg bg-[#23395f]">
            <div className="flex flex-col items-start justify-start my-5 space-y-4">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Precious Metals
              </h3>
              <p className="text-sm leading-6 text-white">
                Because NFT token creation takes place on a blockchain platform,
                the certification is indestructible and timeless due to the high
                security code.
              </p>
            </div>
          </div>
          {/* card 6 */}
          <div className="p-5 rounded-lg bg-[#23395f]">
            <div className="flex flex-col items-start justify-start my-5 space-y-4">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Security Tokens
              </h3>
              <p className="text-sm leading-6 text-white">
                Because NFT token creation takes place on a blockchain platform,
                the certification is indestructible and timeless due to the high
                security code.
              </p>
            </div>
          </div>
        </div>
        {/* Reason for Tokenization */}
        <div className="flex flex-col items-center justify-center w-full bg-[#23395e]">
          <h1 className="font-bold text-white text-3xl">
            Reason for Tokenization
          </h1>
        </div>
        {/* sheets */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:pt-10 lg:pb-10 bg-[#23395e]">
          {/* sheet 1 */}
          <div className="p-5 rounded-lg">
            <div className="flex flex-col items-start justify-start my-5 space-y-4">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                High liquidity
              </h3>
              <p className="text-sm leading-2 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                totam porro maxime, unde veritatis earum minus corporis expedita
                adipisci? Possimus hic ad sed. Laboriosam, reiciendis incidunt!
                Quia eum aliquam debitis?
              </p>
            </div>
          </div>
          {/* sheet 2 */}
          <div className="p-5 rounded-lg">
            <div className="flex flex-col items-start justify-start my-5 space-y-4">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Faster and cheaper transactions
              </h3>
              <p className="text-sm leading-6 text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate quae libero eaque ab, inventore labore quaerat minus
                perferendis ullam cum voluptatum molestiae eos praesentium,
                illum dolores porro harum dolorum debitis?
              </p>
            </div>
          </div>
          {/* sheet 3 */}
          <div className="p-5 rounded-lg">
            <div className="flex flex-col items-start justify-start my-5 space-y-4">
              <h3 className="text-xl font-bold text-yellow-500 pt-5">
                Fractional Ownership
              </h3>
              <p className="text-sm leading-6 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                atque eligendi repudiandae culpa delectus quibusdam, sapiente
                minus provident eos tenetur ex. Aliquid qui sequi, ratione sunt
                quo eius dicta eveniet!
              </p>
            </div>
          </div>
        </div>
        {/* Why choose us for Tokenization of Real World Assets */}
        <div className="flex flex-col items-center justify-center w-full py-1">
          <h1 className="text-white font-bold text-2xl">
            Why choose us for Tokenization of Real World Assets
          </h1>
        </div>
        {/* white cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:pt-10 lg:pb-10 mx-8">
          {/* card 1 */}
          <div className="p-4 rounded-lg bg-white h-full">
            <div className="flex flex-col justify-start items-start my-5 space-y-8 w-full ">
              <h3 className="text-2xl font-bold text-[#23395f]">
                Mission-driven services
              </h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                Understanding your vision and doing everything you can do to
                support your community is what mission-driven customer service
                is all about.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-4 rounded-lg bg-white">
            <div className="flex flex-col justify-start items-start my-5 space-y-8 w-full ">
              <h3 className="text-2xl font-bold text-[#23395f]">
                Technology-agnostic solutions
              </h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                We are agnistic about the usage of any particular technology to
                solve your business problems
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-4 rounded-lg bg-white">
            <div className="flex flex-col justify-start items-start my-5 space-y-8 w-full ">
              <h3 className="text-2xl font-bold text-[#23395f]">
                Accelarated time-to-market
              </h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                The time between deciding to produce a product or service and
                actually launching it on the market.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="p-4 rounded-lg bg-white">
            <div className="flex flex-col justify-start items-start my-5 space-y-8 w-full ">
              <h3 className="text-2xl font-bold text-[#23395f]">
                Reduced development cost
              </h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                Tokenization development company provides a cost-efficient
                service.
              </p>
            </div>
          </div>
          {/* card 5 */}
          <div className="p-4 rounded-lg bg-white">
            <div className="flex flex-col justify-start items-start my-5 space-y-8 w-full ">
              <h3 className="text-2xl font-bold text-[#23395f]">
                Round-the-clock support
              </h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                Our service exceeds client standards, and you can reach out to
                us at any time.
              </p>
            </div>
          </div>
          {/* card 6 */}
          <div className="p-4 rounded-lg bg-white">
            <div className="flex flex-col justify-start items-start my-5 space-y-8 w-full ">
              <h3 className="text-2xl font-bold text-[#23395f]">
                +15 years of technical experience
              </h3>
              <p className="text-sm font-semibold leading-6 text-black">
                In the industry, the token development company have over 15
                years of technical experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
