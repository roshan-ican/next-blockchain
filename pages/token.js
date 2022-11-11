import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Image from "next/image"
import cryptoCoin from "../public/cryptoCoin.png"
import Tcoins from "../public/Tcoins.png"
import nft from "../public/nft.png"
import longCoin from "../public/longCoin.png"
import detail from "../public/detailcrypto.png"
import yellowicon from "../public/yellowicon.png"

import pinkicon from "../public/pinkicon.png"
export default function Token() {
  return (
    <>
      <Navbar />
      <div
        // className="bg-center"
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
              TOKEN DEVELOPMENT
            </h1>
            <p className="font-semibold text-center text-white w-2/2 md:text-left">
              Token Development company is a company that develops tokens.
              Crypto, a token development company that offers, best-in-class
              crypto token development services on a variaty of blockchain
              platforms, including ethereum, finance smart chain, TRON, Solana
              and polygon.
            </p>
          </div>
          {/* Image */}
        </div>
        {/* crypto coin section */}
        <section>
          <div className="flex flex-col-reverse items-start justify-center md:flex-row">
            <div className="mx-2 md:w-1/3">
              {/* <img alt="blockchaind-image" src= /> */}
              <Image
                className="scale-100"
                src={cryptoCoin}
                alt="blockchain-image"
              />
            </div>
            <div className="flex flex-col space-x-4 space-y-8 md:w-1/2">
              <p className="mx-4 text-2xl font-bold text-yellow-500 md:text-left">
                Cryptocurrencies Token Development Services
              </p>
              <p className="w-full font-semibold text-center text-white md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                officiis ex aspernatur sit non quis labore asperiores molestias
                voluptas cum nesciunt magnam molestiae hic praesentium earum
                unde, voluptatem voluptate nam! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Iure ullam dignissimos
                perspiciatis sit distinctio consequatur eius. Suscipit tenetur
                beatae ipsum sit adipisci hic temporibus odit dignissimos
                nesciunt dolores? Saepe, quibusdam.
              </p>
            </div>
          </div>
        </section>
        {/* token development */}
        <section className="leading-blockchain">
          <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
            {/* Left Item */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h3 className="w-full font-bold text-center text-yellow-500 md:text-5xl md:text-left">
                Token Development
              </h3>
              <p className="max-w-sm text-center text-white md:text-left">
                We specialize in the creation of crypto tokens ranging from
                ERC20 to NFT. Our expert crypto token developers are capable of
                creating any crypto token based on your specifications. It is
                now simple to promote your crypto-based ventures using your
                brand native coin. Create your own crypto token on a well-known
                blockchain network and raise capital by allowing people to
                invest without fear.
              </p>
            </div>
            {/* Image */}
            <div className="object-fill md:w-1/2">
              <Image
                className="w-full h-full scale-75"
                src={Tcoins}
                alt="network"
              />
            </div>
          </div>
        </section>
        {/* token development solution */}
        <section className="bg-[#e9eef4]">
          <div className="flex flex-col items-center justify-center w-full py-2">
            <h1 className="text-color-[#29374d] font-bold text-2xl">
              Token Development Solution
            </h1>
            <p className="font-semibold text-color-[#29374d]">
              Get your chosen token and use Crypto to go worldwide
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3 lg:pt-20 lg:pb-10"
            // style={}
          >
            {/*  1 token*/}
            <div className="p-6 bg-[#29374d] rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Image src={nft} alt="nft" className="scale-75 rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Non Fungiable Token
              </h3>
              <p className="text-sm leading-6 text-white">
                We have a fantasic team of Non-fungible Token developers who can
                create one-of-a-kind and safe NFT tokens of any complexity. With
                our unrivalled token development services, we gurantee to design
                and launch a non-fungible token with exceptional performance
                that is tailored to your company's demands. Our non-fungible
                token services company can help you whether you're a huge,
                medium or small business
              </p>
            </div>
            {/* 2 token */}
            <div className="p-6 bg-[#29374d] rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Image src={nft} alt="nft" className="scale-75 rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-white">
                DeFi Token Development
              </h3>
              <p className="text-sm leading-6 text-white">
                Decentralized Finance, often known DeFi, has number of
                advantages, including the use of smart contracts and distributed
                systems. It has grown more secure and complex to build a
                financial application. Most DApps are built on top of the
                Ethereum blockchain, which reduces costs and third-party
                involvemnet while also improving security.
              </p>
            </div>
            {/* 3rd token */}
            <div className="p-6 bg-[#29374d] rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Image src={nft} alt="nft" className="scale-75 rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Ethereum Token Development
              </h3>
              <p className="text-sm leading-6 text-white">
                We have a fantasic team of Non-fungible Token developers who can
                create one-of-a-kind and safe NFT tokens of any complexity. With
                our unrivalled token development services, we gurantee to design
                and launch a non-fungible token with exceptional performance
                that is tailored to your company's demands. Our non-fungible
                token services company can help you whether you're a huge,
                medium or small business
              </p>
            </div>
            {/* 4th token */}
            <div className="p-6 bg-[#29374d] rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Image src={nft} alt="nft" className="scale-75 rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Tron Token Development
              </h3>
              <p className="text-sm leading-6 text-white">
                We have a fantasic team of Non-fungible Token developers who can
                create one-of-a-kind and safe NFT tokens of any complexity. With
                our unrivalled token development services, we gurantee to design
                and launch a non-fungible token with exceptional performance
                that is tailored to your company's demands. Our non-fungible
                token services company can help you whether you're a huge,
                medium or small business
              </p>
            </div>
            {/* 5th token */}
            <div className="p-6 bg-[#29374d] rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Image src={nft} alt="nft" className="scale-75 rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-white">
                BEP20 Token Development
              </h3>
              <p className="text-sm leading-6 text-white">
                We have a fantasic team of Non-fungible Token developers who can
                create one-of-a-kind and safe NFT tokens of any complexity. With
                our unrivalled token development services, we gurantee to design
                and launch a non-fungible token with exceptional performance
                that is tailored to your company's demands. Our non-fungible
                token services company can help you whether you're a huge,
                medium or small business
              </p>
            </div>
            {/* 6th token */}
            <div className="p-6 bg-[#29374d] rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Image src={nft} alt="nft" className="scale-75 rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Solana Token Development
              </h3>
              <p className="text-sm leading-6 text-white">
                We have a fantasic team of Non-fungible Token developers who can
                create one-of-a-kind and safe NFT tokens of any complexity. With
                our unrivalled token development services, we gurantee to design
                and launch a non-fungible token with exceptional performance
                that is tailored to your company's demands. Our non-fungible
                token services company can help you whether you're a huge,
                medium or small business
              </p>
            </div>
          </div>
        </section>
        {/* Types of Token */}
        <div class="text-white justify-around">
          <div class="font-bold w-full text-center text-xl">
            Types Of Tokens
          </div>
          <div class="flex justify-around space-x-10">
            <Image src={longCoin} alt="long coin" />
            <div class="space-y-5">
              <div class="flex items-center space-x-10">
                <div class="w-14 h-14 bg-white rounded-md"></div>
                <div class="space-y-4">
                  <div class="font-medium">Security Tokens</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    <br />
                    ullam praesentium dignissimos illum libero aliquid,
                    <br />
                    ullam praesentium dignissimos illum libero aliquid,
                    <br />
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-10">
                <div class="w-14 h-14 bg-white rounded-md"></div>
                <div class="space-y-4">
                  <div class="font-medium">Security Tokens</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    <br />
                    ullam praesentium dignissimos illum libero aliquid,
                    <br />
                    ullam praesentium dignissimos illum libero aliquid,
                    <br />
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-10">
                <div class="w-14 h-14 bg-white rounded-md"></div>
                <div class="space-y-4">
                  <div class="font-medium">Security Tokens</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    <br />
                    ullam praesentium dignissimos illum libero aliquid,
                    <br />
                    ullam praesentium dignissimos illum libero aliquid,
                    <br />
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-10">
                <div class="w-14 h-14 bg-white rounded-md"></div>
                <div class="space-y-4">
                  <div class="font-medium">Utility Tokens</div>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />
                    Blanditiis corrupti a quos aspernatur, dolorum iste.
                    <br />
                    ullam praesentium dignissimos illum libero aliquid,
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* benefits of token */}
        <div className="flex flex-col justify-center items-center my-2 text-white">
          <h1 className="font-bold text-xl">Benefits of Token</h1>
          <p className=" font-semibold">
            Here are several ways your token can help you with your business and
            your users
          </p>
        </div>
        {/* Cards */}
        <section>
          <div className="grid lg:grid-cols-3 justify-items-center">
            <div className="w-full p-4 lg:w-80">
              <div className="p-8 bg-[#efeef2] rounded shadow-md">
                <h2 className="text-2xl font-bold text-dark-800 pb-4">
                  Branding
                </h2>
                <p className="text-dark-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eligendi, nobis totam quaerat ipsum ex quod earum ea dicta
                  sint
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="w-full p-4 lg:w-80">
              <div
                className="p-8 bg-[#e9eef4]
              rounded shadow-md"
              >
                <h2 className="text-2xl font-bold text-dark-800 pb-4">
                  Popularity
                </h2>
                <p className="text-dark-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eligendi, nobis totam quaerat ipsum ex quod earum ea dicta
                  sint
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="w-full p-4 lg:w-80">
              <div className="p-8 bg-[#e9eef4]  rounded shadow-md">
                <h2 className="text-2xl font-bold text-dark-800 pb-4">
                  Exchange
                </h2>
                <p className="text-dark-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eligendi, nobis totam quaerat ipsum ex quod earum ea dicta
                  sint
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Features of Token */}
        <section>
          <div className="pt-2 bg-[#E9EEF4]">
            <h1 className="flex flex-col justify-center items-center font-bold text-3xl text-[#1C2D49] ">
              Features of Token
            </h1>
            <div className="grid lg:grid-cols-3 justify-items-center">
              {/* 1 */}
              <div className="w-full p-4 lg:w-80">
                <div className="p-8 bg-[#efeef2] rounded shadow-md">
                  <Image src={detail} alt="detail icon" />
                  <h2 className="text-2xl font-bold text-blue-800 pb-4">
                    Detailed
                  </h2>
                  <p className="text-dark-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi eligendi, nobis totam quaerat ipsum ex quod earum ea
                    dicta sint
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full p-4 lg:w-80">
                <div className="p-8 bg-[#efeef2] rounded shadow-md">
                  <Image src={pinkicon} alt="blue icon" />
                  <h2 className="text-2xl font-bold text-blue-800 pb-4">
                    Burnable
                  </h2>
                  <p className="text-dark-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi eligendi, nobis totam quaerat ipsum ex quod earum ea
                    dicta sint
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="w-full p-4 lg:w-80">
                <div className="p-8 bg-[#efeef2] rounded shadow-md">
                  <Image src={yellowicon} alt="yellow icon" className="scale-100" />
                  <h2 className="text-2xl font-bold text-blue-800 pb-4">
                    Mintable
                  </h2>
                  <p className="text-dark-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi eligendi, nobis totam quaerat ipsum ex quod earum ea
                    dicta sint
                  </p>
                </div>
              </div>
              {/* 4 */}

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
