import Layout from "../components/Layout"
import Image from "next/image"
import blockchain from "../public/crypto 11.png"
import network from "../public/crypto-network.jpg"
import teach from "../public/crypto 12.png"

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <div
          className="bg-center"
          style={{
            backgroundImage: `url(/backgroundCopy.png)`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        >
          <section style={{
            backgroundImage: `url(/cryptoWeb.png)`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover'
          }}>
            {/* Flex Container */}
            <div className="flex flex-col-reverse md:flex-row items-center px-6 space-y-0 md:space-y-0">
              {/* Left Item */}
              <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white">
                  Blockchain Development Comapany.
                </h1>
                <p className="text-center text-white max-w-sm md:text-left">
                  Manage makes it simple for software teams to plan day to day
                  tasks while keeping the larger team goals in view.
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
                <Image src={blockchain} alt="blockchain-image" />
              </div>
            </div>
          </section>
          {/* Features */}
          <section id="features">
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
              {/* Numbered List */}
              {/* <div class="flex flex-col space-y-8 md:w-1/2">
    <!-- list item 1 */}
              <div className="md:w-1/2">
                <Image
                  className="object-cover max-w-full h-auto "
                  src={teach}
                  alt="teach-crypto"
                />
              </div>
              {/* List Item 2 */}
              {/* List Item 3 */}
              <div className="flex flex-col space-y-12 md:w-1/2">
                <h1 className="max-w-d text-yellow-500 text-4xl font-bold text-center md:text-left">
                  Token Creation Services
                </h1>
                <p className="max-w-sm text-center text-white md:text-left">
                  Cryptocurrencies are upending the global financial economy and
                  redefining how we transact. Cryptocurrencies have established
                  themselves as a corner stone of more secure, rapid and
                  transparent transactions by reducing settlement time,
                  eliminating the middleman, and increasing security. Many
                  start-ups and established companies around the world are
                  entering into coin development to take advantage of the
                  benefits of digital currencies, which has increased demand for
                  cryptocurrency development services.
                </p>
              </div>
            </div>
            {/* What's different */}
          </section>
          {/* Leading Blockchain application section */}
          <section className="leading-blockchain">
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
              {/* Left Item */}
              <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-yellow-500">
                  Leading Blockchain Application Development Company
                </h1>
                <p className="text-center text-white max-w-sm md:text-left">
                  Crypto is india leading Blockchain development company,
                  specializing in providing bespole blockchain technological
                  solutions to match your specific business requirements. We
                  gain tremendous experience in the blockchain technology field
                  as one of the early adopters and serverd 300+ clients from
                  various fields such as business, banking &amp; finance, real
                  estate, healthcare, automobile &amp; transportation,
                  insurance, trading and many other industries as one of the
                  early adopters of the blockchain technology.
                </p>
                {/* <div class="flex justify-center md:justify-start space-x-2 ">
    <a
      href="#"
      class="p-3 px-4 pt-2 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
    >
      Create Your Own Token
    </a>
    <a
      href="#"
      class="p-3 px-4 pt-2 text-white bg-brightRed rounded-md baseline hover:bg-brightRedLight"
    >
      Know More
    </a>
  </div> */}
              </div>
              {/* Image */}
              <div className="md:w-1/2 object-fill">
                <Image
                  className="w-full h-full rounded-full"
                  src={network}
                  alt="network"
                />
              </div>
            </div>
          </section>
          {/* Card carasouls */}
          <section>
            <div className="flex flex-col mb-5 space-y-12 md:1/2 items-center">
              <h1 className="max-w-full text-4xl font-bold text-center md:text-5xl md:text-left text-white">
                Explore our blockchain development services
              </h1>
              <p className="max-w-full text-center text-white md:text-left">
                Crypto provides a wide range of services with a clear focus on
                providing our clients with bug-free software.
              </p>
            </div>
            <div className="flex">
              <div className="w-2/12 flex items-center">
                <div className="w-full text-right">
                  <button className="p-3 rounded-full bg-white border border-gray-700 shadow-lg mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div id="sliderContainer" className="w-full">
                <ul id="slider" className="flex w-full">
                  <li className="w-96 p-5">
                    <div className="min-h-full w-full border rounded-lg p-5 ">
                      <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                        Hyper Ledger Development
                      </h5>
                      <p className="mt-2 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex non fugit iste similique fugiat voluptas ullam
                        placeat perferendis, numquam neque, voluptatem pariatur
                        natus nam cum maxime eos. Delectus, esse veniam!
                      </p>
                    </div>
                  </li>
                  <li className="w-96 p-5">
                    <div className="min-h-full w-full border rounded-lg p-5 ">
                      <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                        Private Blockchain Development
                      </h5>
                      <p className="mt-2 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex non fugit iste similique fugiat voluptas ullam
                        placeat perferendis, numquam neque, voluptatem pariatur
                        natus nam cum maxime eos. Delectus, esse veniam!
                      </p>
                    </div>
                  </li>
                  <li className="w-96 p-5">
                    <div className="min-h-full w-full border rounded-lg p-5 ">
                      <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                        Smart contract development &amp; audit
                      </h5>
                      <p className="mt-2 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex non fugit iste similique fugiat voluptas ullam
                        placeat perferendis, numquam neque, voluptatem pariatur
                        natus nam cum maxime eos. Delectus, esse veniam!
                      </p>
                    </div>
                  </li>
                  {/* test */}
                </ul>
              </div>
              <div className="w-2/12 flex items-center">
                <div className="w-full">
                  <button className="p-3 rounded-full bg-white border border-gray-700 shadow-lg ml-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Features section */}
          <section>
            <div className="flex flex-col mb-5 space-y-12 md:1/2 items-center">
              <h1 className="max-w-full text-4xl font-bold text-center md:text-5xl md:text-left text-white">
                Features of our Blockchain-based supply chain solution
              </h1>
              <p className="max-w-full text-center text-white md:text-left">
                To ensure the great performance of our blockchain supply we've
                add the following features to our website
              </p>
            </div>
            {/* the features cards */}
            <div className="justify-around">
              <ul
                id="slider"
                className="grid grid-cols-3 max-w-full min-h-full gap-5 space-y-5 overflow-hidden"
              >
                <li className="w-full p-5">
                  <div className="min-h-full w-full border rounded-lg p-5 ">
                    <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                      Private Blockchain Development
                    </h5>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex non fugit iste similique fugiat voluptas ullam placeat
                      perferendis, numquam neque, voluptatem pariatur natus nam
                      cum maxime eos. Delectus, esse veniam!
                    </p>
                  </div>
                </li>
                <li className="w-full p-5">
                  <div className="min-h-full w-full border rounded-lg p-5 ">
                    <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                      Private Blockchain Development
                    </h5>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex non fugit iste similique fugiat voluptas ullam placeat
                      perferendis, numquam neque, voluptatem pariatur natus nam
                      cum maxime eos. Delectus, esse veniam!
                    </p>
                  </div>
                </li>
                <li className="w-full p-5">
                  <div className="min-h-full w-full border rounded-lg p-5 ">
                    <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                      Smart contract development &amp; audit
                    </h5>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex non fugit iste similique fugiat voluptas ullam placeat
                      perferendis, numquam neque, voluptatem pariatur natus nam
                      cum maxime eos. Delectus, esse veniam!
                    </p>
                  </div>
                </li>
                <li className="w-full p-5">
                  <div className="min-h-full w-full border rounded-lg p-5 ">
                    <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                      Smart contract development &amp; audit
                    </h5>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex non fugit iste similique fugiat voluptas ullam placeat
                      perferendis, numquam neque, voluptatem pariatur natus nam
                      cum maxime eos. Delectus, esse veniam!
                    </p>
                  </div>
                </li>
                <li className="w-full p-5">
                  <div className="min-h-full w-full border rounded-lg p-5 ">
                    <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                      Smart contract development &amp; audit
                    </h5>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex non fugit iste similique fugiat voluptas ullam placeat
                      perferendis, numquam neque, voluptatem pariatur natus nam
                      cum maxime eos. Delectus, esse veniam!
                    </p>
                  </div>
                </li>
                <li className="w-full p-5">
                  <div className="min-h-full w-full border rounded-lg p-5 ">
                    <h5 className="mt-4 mb-2 text-xl font-bold text-yellow-500">
                      Smart contract development &amp; audit
                    </h5>
                    <p className="mt-2 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex non fugit iste similique fugiat voluptas ullam placeat
                      perferendis, numquam neque, voluptatem pariatur natus nam
                      cum maxime eos. Delectus, esse veniam!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
