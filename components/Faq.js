import React from "react"

export default function Faq() {
  return (
    <div>
      <div className="w-full px-4 mx-auto mt-10 space-y-2 shadow lg:max-w-md">
        <details className="p-4 rounded-lg bg-white">
          <summary className="font-semibold ">
            How to create Accordion (FAQ) in react ?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-900">
              React with Tailwind CSS Faq Accordion, can be made using simple
              HTML tags like Details and Summery and the useful styling classes
              of tailwindcss.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg bg-white">
          <summary className="font-semibold">
            What is a <code>details</code> tag?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-900">
              The <code>details</code> tag is often used to create an
              interactive widget that the user can open & close.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg bg-white">
          <summary className="font-semibold">
            What is the <code>summery</code> tag ?
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-900">
              The <code>summery</code> tag defines a visible heading for the
              details
            </p>
          </div>
        </details>
      </div>
    </div>
  )
}
