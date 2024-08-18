"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Page() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <div className="bg-[#0A0A0A] flex flex-col items-center mt-5 p-5 rounded-lg h-fit w-[1250px]">
      <h2 className="text-2xl font-bold">Frecuently Asked Questions</h2>
      <p className="text-gray-200 mt-5 text-center">
        Quick answers to questions you may have about GTracking and our
        services. <br /> Cant find what you are looking for? Contact us.
      </p>
      <button className="mt-5 border-2 rounded-lg px-10 p-2 hover:border-[#CCFF00] hover:text-[#CCFF00]">
        Contact Us
      </button>
      <section className="mt-10 w-[900px] mb-10">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion Item 1"
            title="Accordion Item 1"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion Item 2"
            title="Accordion Item 2"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion Item 3"
            title="Accordion Item 3"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion Item 4"
            title="Accordion Item 4"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion Item 5"
            title="Accordion Item 5"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion Item 6"
            title="Accordion Item 6"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
