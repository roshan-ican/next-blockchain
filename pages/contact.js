import Image from "next/image"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import contact from "../public/contact.png"
import chat from "../public/Bigchat.png"
import email from "../public/email.png"
import call from "../public/call.png"

export default function Contact() {
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
        {/* Flex Container */}
        <div className="flex flex-col-reverse md:flex-row items-center ">
          {/* Left Item */}
          <div className="flex flex-col space-y-6 md:w-1/2 px-6">
            <h1 className="text-4xl font-bold text-center md:text-5xl md:text-left text-white">
              Contact Us
            </h1>
            <p className="text-center text-white w-full md:text-left text-xl">
              Through flawless expertise, seamlessly materialise <br />{" "}
              client-based users based on out-of-the-box
              <br /> value data.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            {/* <img alt="blockchaind-image" src= /> */}
            <Image src={contact} alt="Contact" />
          </div>
        </div>
        {/* Give us a call, Email Us and Chat with us */}
        <section className="bg-[#23395e]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:pt-20 lg:pb-10 mx-8 ">
            {/* Chat with us */}
            <div className="p-6 bg-[#e9eef4] rounded-lg justify-center items-center text-center space-y-2">
              <div className="flex items-center justify-center">
                <Image src={chat} alt="Chat" className="scale-50 rounded" />
              </div>
              <h3 className="text-lg font-bold text-[#23395e]">Chat with Us</h3>
              <p className="text-sm leading-6 text-[#23395e] font-semibold">
                We've got live Social Experts waiting <br />
                to help you monday to friday from <br />
                9am to 5pm IST.
              </p>
              <button className="bg-[#192943] text-white rounded-md font-bold px-8 py-2 border-b-2 border-gray-500">
                Chat with us
              </button>
            </div>
            {/* Email Us */}
            <div className="p-6 bg-[#e9eef4] rounded-lg justify-center items-center text-center space-y-2">
              <div className="flex items-center justify-center">
                <Image
                  src={email}
                  alt="email-us"
                  className="scale-50 rounded"
                />
              </div>
              <h3 className="text-lg font-bold text-[#23395e]">Email Us</h3>
              <p className="text-sm leading-6 text-[#23395e] font-semibold">
                Simple drop us an email at <br />
                fastxpo@gmail.com and you'll <br />
                receive a reply with 24 hours.
              </p>
              <button className="bg-[#192943] text-white rounded-md font-bold px-8 py-2 border-b-2 border-gray-500">
                Email us
              </button>
            </div>
            {/* Give us a call */}
            <div className="p-6 bg-[#e9eef4] rounded-lg justify-center items-center text-center space-y-2">
              <div className="flex items-center justify-center">
                <Image src={call} alt="call-us" className="scale-50 rounded" />
              </div>
              <h3 className="text-lg font-bold text-[#23395e]">
                Give us a call
              </h3>
              <p className="text-sm leading-6 text-[#23395e] font-semibold">
                Give us a ring, our Experts are <br />
                standing by monday to friday <br />
                from 9am to 5pm IST.
              </p>
              <button className="bg-[#192943] text-white rounded-md font-bold px-8 py-2 border-b-2 border-gray-500">
                Call Now
              </button>
            </div>
          </div>
        </section>
        {/* Reach our Marketing Team */}
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          <h1 className="font-bold text-yellow-800 text-3xl">
            Reach our Marketing Team
          </h1>
          <p className="font-semibold text-white text-center">
            Using standardised infrastructures, collaboratively support
            client-focused convergence over <br />
            customer-directed alignments.
          </p>
        </div>
        {/* form */}
        <section className="bg-white rounded-md mx-10 p-4 mt-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-5 lg:pt-10 lg:pb-10 mx-20">
            {/* first name */}
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">First Name*</p>
              <input
                type="text"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">Last Name</p>
              <input
                type="text"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            {/* Phone */}
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">Phone*</p>
              <input
                type="number"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            {/* Email */}
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">Email*</p>
              <input
                type="text"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            {/* Company website*/}
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">Company Website*</p>
              <input
                type="text"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            {/* Work Email */}
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">Work Email</p>
              <input
                type="text"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            {/* Budget */}
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">Budget*</p>
              <input
                type="text"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            {/* Country */}
            <div className="items-center justify-start space-y-2">
              <p className="font-semibold text-dark">Country*</p>
              <input
                type="text"
                className="bg-[#e9eef4] p-2 rounded-lg px-20 w-full "
                placeholder=""
              />
            </div>
            
          </div>
          <div className="flex items-center justify-center m-0">
              <button className="bg-[#192943] text-white rounded-md font-bold px-8 py-2 border-b-4 border-gray-500 text-center">
                Get in touch
              </button>
            </div>

          {/*  */}
        </section>
      </div>
      <Footer />
    </>
  )
}
