import Image from "next/image"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import meet from "../public/meet.png"
import bit from "../public/bit.png"
import iconBthEth from "../public/smalliconBitEth.png"
import Faq from "../components/Faq"

export default function Exchange() {
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
        {/* Crypto Currency Software Development */}
        <div className="flex flex-col-reverse md:flex-row items-center px-6 space-y-0 md:space-y-0">
          {/* Left Item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2 justify-around">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white">
              Cryptocurrency Exchange Software Development
            </h1>
            <p className="text-center text-white max-w-sm md:text-left">
              Cryptocurrency exchange software development creates and offers
              highly secure and scalable exchange platforms that assits our
              clients in disrupting the cryptocurrency market.
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
        {/* Cryptocurrency Exchange Platform */}
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
          {/* The right side */}
          <div>
            <Image src={bit} alt="nft " className="scale-75" />
          </div>
          {/* the left side */}
          <div className="mx-10 space-y-5">
            <h1 className="text-yellow-500 font-bold text-3xl">
              Cryptocurrency Exchange Platform
            </h1>
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
        {/* Token Development */}
        <div className="flex flex-col items-center justify-center w-full py-1">
          <h1 className="text-white font-bold text-2xl">
            Token Development Solution
          </h1>
        </div>
        <div
          className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3 lg:pt-20 lg:pb-10 mx-8"
          // style={}
        >
          {/*  1 token*/}
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Image
                src={iconBthEth}
                alt="iconBthEth"
                className="scale-50 rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold text-yellow-500">
              Powerful Matching Engine
            </h3>
            <p className="text-sm leading-6 text-blue-900">
              We have a fantasic team of Non-fungible Token developers who can
              create one-of-a-kind and safe iconBthEth tokens of any complexity.
              With our unrivalled token development services, we gurantee to
              design and launch a non-fungible token with exceptional
              performance that is tailored to your company's demands. Our
              non-fungible token services company can help you whether you're a
              huge, medium or small business
            </p>
          </div>
          {/* 2 token */}
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Image
                src={iconBthEth}
                alt="iconBthEth"
                className="scale-50 rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold text-yellow-500">
              DeFi Token Development
            </h3>
            <p className="text-sm leading-6 text-blue-900">
              Decentralized Finance, often known DeFi, has number of advantages,
              including the use of smart contracts and distributed systems. It
              has grown more secure and complex to build a financial
              application. Most DApps are built on top of the Ethereum
              blockchain, which reduces costs and third-party involvemnet while
              also improving security.
            </p>
          </div>
          {/* 3rd token */}
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Image
                src={iconBthEth}
                alt="iconBthEth"
                className="scale-50 rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold text-yellow-500">
              DeFi Token Development
            </h3>
            <p className="text-sm leading-6 text-blue-900">
              Decentralized Finance, often known DeFi, has number of advantages,
              including the use of smart contracts and distributed systems. It
              has grown more secure and complex to build a financial
              application. Most DApps are built on top of the Ethereum
              blockchain, which reduces costs and third-party involvemnet while
              also improving security.
            </p>
          </div>
          {/* 4th token */}
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Image
                src={iconBthEth}
                alt="iconBthEth"
                className="scale-50 rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold text-yellow-500">
              DeFi Token Development
            </h3>
            <p className="text-sm leading-6 text-blue-900">
              Decentralized Finance, often known DeFi, has number of advantages,
              including the use of smart contracts and distributed systems. It
              has grown more secure and complex to build a financial
              application. Most DApps are built on top of the Ethereum
              blockchain, which reduces costs and third-party involvemnet while
              also improving security.
            </p>
          </div>
          {/* 5th token */}
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Image
                src={iconBthEth}
                alt="iconBthEth"
                className="scale-50 rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold text-yellow-500">
              DeFi Token Development
            </h3>
            <p className="text-sm leading-6 text-blue-900">
              Decentralized Finance, often known DeFi, has number of advantages,
              including the use of smart contracts and distributed systems. It
              has grown more secure and complex to build a financial
              application. Most DApps are built on top of the Ethereum
              blockchain, which reduces costs and third-party involvemnet while
              also improving security.
            </p>
          </div>
          {/* 6th token */}
          <div className="p-6 bg-white rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Image
                src={iconBthEth}
                alt="iconBthEth"
                className="scale-50 rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold text-yellow-500">
              DeFi Token Development
            </h3>
            <p className="text-sm leading-6 text-blue-900">
              Decentralized Finance, often known DeFi, has number of advantages,
              including the use of smart contracts and distributed systems. It
              has grown more secure and complex to build a financial
              application. Most DApps are built on top of the Ethereum
              blockchain, which reduces costs and third-party involvemnet while
              also improving security.
            </p>
          </div>
        </div>
        {/* Fuel your token exchange platform development */}
        <div className="flex flex-col items-center justify-center w-full py-1">
          <h1 className="text-white font-bold text-2xl">
            Fuel your token exchange platform development
          </h1>
        </div>
        {/* Cards white*/}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:pt-10 lg:pb-10 mx-8">
          {/* card 1 */}
          <div className="p-4 rounded-lg bg-white h-full">
            <div className="flex flex-col justify-start items-start my-5 space-y-8 w-full ">
              <h3 className="text-2xl font-bold text-color-[#23395f]">
                99% Uptime
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
              <h3 className="text-2xl font-bold text-color-[#23395f]">
                Continuous Support
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
              <h3 className="text-2xl font-bold text-color-[#23395f]">
                Modular Architecture
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
              <h3 className="text-2xl font-bold text-color-[#23395f]">
                Market-leading Features
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
              <h3 className="text-2xl font-bold text-color-[#23395f]">
                Cost-efficient Services
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
              <h3 className="text-2xl font-bold text-color-[#23395f]">
                Design Thinking Driven Solutions
              </h3>
              <p className="text-sm font-semibold leading-6 text-color-[#23395f]">
                In the industry, the token development company have over 15
                years of technical experience.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="flex flex-col items-center justify-center w-full py-1">
          <p className="font-bold text-yellow-500 text-xl">FAQ</p>
          <h1 className="text-white font-bold text-2xl">
            Frequently Asked Questions
          </h1>
          <p className="font-semibold text-white">
            About our cryptocurrency Development Services
          </p>
        </div>
        <div className="pb-5">
          <Faq />
        </div>
      </div>
      <Footer />
    </>
  )
}
