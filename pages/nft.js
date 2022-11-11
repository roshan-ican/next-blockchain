import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Image from "next/image"
import nft from "../public/nft15.png"
import teachingBitcoin from "../public/teachingBitcoin.png"
import cryptoCoin from "../public/cryptoCoin.png"

export default function Nft() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(/backgroundCopy.png)`,
          width: "100vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col-reverse items-center px-6 space-y-0 md:flex-row md:space-y-0">
          {/* Left Item */}
          <div className="flex flex-col mb-32 space-x-4 space-y-8 md:w-1/2">
            <h1 className="mx-4 mt-32 text-4xl font-bold text-center text-white md:text-5xl md:text-left">
              NON FUNGIBLE TOKEN DEVELOPMENT SERVICES
            </h1>
            <p className="font-semibold text-center text-white w-2/2 md:text-left">
              Crypto, an NFT token development company, has helped a number of
              crypto enterprises by providing industry-leading token development
              solutions on blockchain platforms including as Ethereun, EOS,Tron,
              Finance Smart Chain and others.
            </p>
          </div>
        </div>
        {/* NFT Token Development Services */}
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
          {/* The right side */}
          <div className="mx-10 space-y-5">
            <h1 className="text-yellow-500 font-bold text-3xl">
              NFT TOKEN DEVELOPEMENT SERVICES
            </h1>
            <p className="font-bold text-white text-xl">
              Ensuring irrefutable Ownership of Digital Assets
            </p>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              adipisci, reiciendis odit ex sit saepe est illo libero minus
              dolorum quo atque sed perferendis blanditiis, quae nihil numquam
              fugit sapiente. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cum et ex iure? Similique enim nemo, asperiores modi a eos
              odio, iusto blanditiis est repellat molestiae cupiditate delectus
              qui minima sunt. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Delectus, illum adipisci quisquam exercitationem
              nulla explicabo quae temporibus non. Optio nihil id delectus ipsa
              itaque ducimus consequuntur commodi minus explicabo eligendi.
            </p>
          </div>
          {/* the left image */}
          <div>
            <Image src={nft} alt="nft " className="scale-75" />
          </div>
        </div>
        {/* Token development solution cards */}
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="font-bold text-white text-3xl">
            NFT Development solution
          </h1>
          <p className="font-semibold text-white text-xl">
            Creating a change in perception
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:pt-10 lg:pb-10 mx-8">
          {/* card 1 */}
          <div className="p-5 rounded-lg bg-[#23395f] h-full">
            <div className="flex flex-col items-start justify-start my-5 space-y-8">
              <h3 className="text-lg font-bold text-yellow-500">Uniqueness</h3>
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
              <h3 className="text-lg font-bold text-yellow-500">
                Resale and Royality
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
              <h3 className="text-lg font-bold text-yellow-500">Permanence</h3>
              <p className="text-sm leading-6 text-white">
                Because NFT token creation takes place on a blockchain platform,
                the certification is indestructible and timeless due to the high
                security code.
              </p>
            </div>
          </div>
        </div>
        {/* Create NFT TOKEN with crypto */}
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
          {/* The right side */}
          <div>
            <Image src={teachingBitcoin} alt="nft " className="scale-100" />
          </div>
          {/* the left side */}
          <div className="mx-10 space-y-5">
            <h1 className="text-white font-bold text-3xl">
              Create NFT TOKEN with CRYPTO
            </h1>
            <p className="text-white leading-5">
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
            {/* test */}
          </div>
        </div>
        {/* Decentralized Non-fungible TOKEN Development */}
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
          {/* The right side */}
          <div className="mx-10 space-y-5">
            <h1 className="text-white font-bold text-2xl leading-2">
              Decentralized Non-fungible TOKEN Development
            </h1>
            <p className="text-white leading-1">
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
          {/* the left image */}
          <div>
            <Image src={cryptoCoin} alt="nft " className="scale-75" />
          </div>
        </div>
        {/* Why Choose us as a NFT Token Development Company */}
        <div className="flex flex-col items-center justify-center w-full py-2 space-y-2">
          <h1 className="font-bold text-white text-4xl">
            Why Choose us as a NFT Token Development Company
          </h1>
          <p className="font-normal text-white justify-center items-center tracking-widest">
            you can rely on of team seasoned NFT developers with real world
            experience building success stories when you work with cryto
          </p>
        </div>
        {/* Cards white*/}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:pt-20 lg:pb-10 mx-8">
          {/* card 1 */}
          <div className="p-4 rounded-lg bg-white h-full">
            <div className="flex flex-col items-center justify-center my-5 space-y-4 w-full">
              <h3 className="text-lg font-bold text-yellow-500">Technical Prowess</h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                NFT development company tokens are a dependable solution for
                combating the problem of product duplication since they create a
                unique product identity and authenticate ownership.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-4 rounded-lg bg-white">
            <div className="flex flex-col items-center justify-center my-5 space-y-4 w-full">
              <h3 className="text-lg font-bold text-yellow-500">
               Expert Team
              </h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                NFTs provide complete transparency in the product sales process,
                allowing creators and buyers to track the lifecycle of a product
                to the smallest detail.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-4 rounded-lg bg-white">
            <div className="flex flex-col items-center justify-center my-5 space-y-8 w-full ">
              <h3 className="text-lg font-bold text-yellow-500">Rapid Development</h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                Because NFT token creation takes place on a blockchain platform,
                the certification is indestructible and timeless due to the high
                security code.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
