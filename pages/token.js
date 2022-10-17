import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Image from "next/image"
import cryptoCoin from "../public/cryptoCoin.png"
import Tcoins from "../public/Tcoins.png"
import nft from "../public/nft.png"

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
              voluptas cum nesciunt magnam molestiae hic praesentium earum unde,
              voluptatem voluptate nam! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Iure ullam dignissimos perspiciatis sit
              distinctio consequatur eius. Suscipit tenetur beatae ipsum sit
              adipisci hic temporibus odit dignissimos nesciunt dolores? Saepe,
              quibusdam.
            </p>
          </div>
        </div>
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
            className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3 lg:pt-40 lg:pb-20"
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
            {/* Types of Token */}
            {/* Benefits of Tokens */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
