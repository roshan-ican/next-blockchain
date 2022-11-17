import Image from "next/image"
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import vision from "../public/vision.png"

export default function Company() {
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
        {/* Build a carrer with us */}
        <div className="flex flex-col-reverse md:flex-row items-center px-6 space-y-0 md:space-y-0">
          {/* Left Item */}
          <div className="flex flex-col m-10 space-y-12 md:w-1/2 justify-around mx-10">
            <h1 className="w-full text-4xl font-bold text-center md:text-5xl md:text-left text-white">
              Build A Carrer with us
            </h1>
            <p className="justify-center items-center text-white w-full md:text-left leading-2 text-lg ">
              Continually update client-based users based on out of the box
              value. Through seamless expertise, embrace strategic data
              globally. Before enabling interfaces, phosphorescently
              disintermediate revolutionary paradigms. Transform abilities to
              virtual customer service in a dynamic way through meaningful
              partnerships with technically sound paradigms and cutting-edge
              initiatives.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 m-4">
            {/* <img alt="blockchaind-image" src= /> */}
            <Image src={vision} alt="blockchain-image" className="scale-75" />
          </div>
        </div>
        {/* Our Jobs */}
        <div className="flex flex-col items-center justify-center w-full py-2 space-y-3">
          <h1 className="text-white font-bold text-3xl">Our Jobs</h1>
          <h2 className="text-yellow-500 font-semibold text-2xl">
            Available Vaccancies
          </h2>
          <p className="text-white font-normal tracking-wider text-center space-y-2">
            Phosfluorescently disintermediate revolutionary paradigms before
            enabled interfaces.
            <br /> Dynamically transition skills vis-a-vis virtual customer
            service impactful <br /> partnerships with technically sound
            paradigms with cutting-edge initiatives.
          </p>
        </div>
        {/* Four Jobs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-5 lg:pt-10 lg:pb-10 mx-20">
          {/* card 1 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-lg font-semibold text-[#23395f] p-2">
                Remote - Full Time
              </p>
              <p className="text-2xl font-semibold text-[#23395f] p-2">
                Frontend Developer
              </p>
              <button className="bg-[#192943] text-white rounded-md font-bold px-4 py-2 border-b-4 border-gray-500">
                Apply Now
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-lg font-semibold text-[#23395f] p-2">
                Remote - Full Time
              </p>
              <p className="text-2xl font-semibold text-[#23395f] p-2">
                UX/UI Desinger
              </p>
              <button className="bg-[#192943] text-white rounded-md font-bold px-4 py-2 border-b-4 border-gray-500">
                Apply Now
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-lg font-semibold text-[#23395f] p-2">
                Remote - Full Time
              </p>
              <p className="text-2xl font-semibold text-[#23395f] p-2">
                Senior Office Manager
              </p>
              <button className="bg-[#192943] text-white rounded-md font-bold px-4 py-2 border-b-4 border-gray-500">
                Apply Now
              </button>
            </div>
          </div>
          {/* card 4 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-lg font-semibold text-[#23395f] p-2">
                Remote - Full Time
              </p>
              <p className="text-2xl font-semibold text-[#23395f] p-2 ">
                Senior Backend Developer
              </p>
              <button className="bg-[#192943] text-white rounded-md font-bold px-4 py-2 border-b-4 border-gray-500">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        {/* Why Join Us */}
        <div className="flex flex-col items-center justify-center w-full py-2 space-y-3">
          <h1 className="text-white font-bold text-3xl">Why Join Us</h1>
          <h2 className="text-yellow-500 font-semibold text-2xl">
            Great Working Environment
          </h2>
          <p className="text-white font-normal tracking-wider text-center space-y-2">
            Before enabling interfaces, revolutionary ideas dynamically
            transitioned
            <br /> technically sound frameworks with cutting-edge ambitions.{" "}
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-5 lg:pt-10 lg:pb-10 mx-20">
          {/* card 1 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-2xl font-semibold text-[#23395f] p-2">
                Remote Working Facilitis
              </p>
              <p className="text-sm font-semibold text-[#23395f] p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                commodi deleniti exercitationem rerum suscipit eveniet? Autem,
                neque repellendus. Nobis eos culpa dolores temporibus
                consequuntur placeat numquam dolorem labore inventore
                recusandae.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-2xl font-semibold text-[#23395f] p-2">
                Flexible Working Hours
              </p>
              <p className="text-sm font-semibold text-[#23395f] p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                commodi deleniti exercitationem rerum suscipit eveniet? Autem,
                neque repellendus. Nobis eos culpa dolores temporibus
                consequuntur placeat numquam dolorem labore inventore
                recusandae.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-2xl font-semibold text-[#23395f] p-2">
                Friendly Skilled Team
              </p>
              <p className="text-sm font-semibold text-[#23395f] p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                commodi deleniti exercitationem rerum suscipit eveniet? Autem,
                neque repellendus. Nobis eos culpa dolores temporibus
                consequuntur placeat numquam dolorem labore inventore
                recusandae.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="p-2 rounded-lg bg-[#e9eef4] h-full ">
            <div className="flex flex-col justify-start items-start space-y-2 mx-4 w-full ">
              <p className="text-2xl font-semibold text-[#23395f] p-2">
                Medical Insurance Facilitis
              </p>
              <p className="text-sm font-semibold text-[#23395f] p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                commodi deleniti exercitationem rerum suscipit eveniet? Autem,
                neque repellendus. Nobis eos culpa dolores temporibus
                consequuntur placeat numquam dolorem labore inventore
                recusandae.
              </p>
            </div>
          </div>
        </div>
        {/* Let's try get free support */}
        <div className="flex flex-col items-center justify-center w-full py-2 space-y-8">
          <h2 className="text-yellow-500 font-semibold text-3xl">
            Let's Try! Get Free Support
          </h2>
          <p className="text-white text-2xl font-normal tracking-wider text-center space-y-2">
            We can help you create your dream website for
            <br /> better business revenue.
          </p>
          <button className="bg-white text-[#192943] rounded-md font-bold px-4 py-2 border-b-4 border-gray-500">
            Contact Us
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
