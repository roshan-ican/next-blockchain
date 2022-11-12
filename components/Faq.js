import { Fragment, useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

const Faq = () => {
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <div className="grid grid-cols-1">
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="flex justify-center items-center mx-10"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-white active:text-white"
        >
          How does Token Exchange work ?
        </AccordionHeader>
        <AccordionBody className="text-white">
          A crypto exchange may launch its own token for a variety of reasons,
          and exchange owners often give tokens to users as incentives.
          Generally speaking, most exchange tokens are designed to increase an
          exchange's liquidity, incentivize trading activity, or facilitate an
          exchange's community governance process.
        </AccordionBody>
      </Accordion>
      {/* second accordain */}
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="flex justify-center items-center mx-10"
      >
        <AccordionHeader onClick={() => handleOpen(2)} className="text-white">
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-white">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      {/* thrid accordain */}
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="flex justify-center items-center mx-10"
      >
        <AccordionHeader onClick={() => handleOpen(3)} className="text-white">
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-white">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </div>
  )
}

export default Faq
