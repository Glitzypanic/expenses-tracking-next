"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faqData } from "@/app/lib/utils/dataFaq";

export default function Page() {
  return (
    <div className="bg-[#0A0A0A] flex flex-col items-center p-5 rounded-lg mb-5">
      <h2 className="text-3xl font-bold">Frecuently Asked Questions</h2>
      <p className="text-gray-200 mt-3 text-center">
        Quick answers to questions you may have about GTracking and our
        services. Cant find what you are looking for? Contact us.
      </p>
      <button
        className="mt-5 border-2 rounded-lg px-6 p-1 hover:border-[#CCFF00] hover:text-[#CCFF00]"
        aria-label="button"
      >
        Contact Us
      </button>
      <section className="mt-10 w-full mb-10">
        <Accordion>
          {faqData.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
