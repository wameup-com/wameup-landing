import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this template free?",
    answer:
      "Yes, completely free. Clone the repo, customize it however you like, and ship it — no license fees, no attribution required beyond keeping the MIT license file.",
    value: "item-1",
  },
  {
    question: "Can I use this for a commercial project?",
    answer:
      "Absolutely. The template is released under the MIT license, which allows personal and commercial use, modification, and redistribution.",
    value: "item-2",
  },
  {
    question: "What stack does this template use?",
    answer:
      "React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. All open-source, no paid dependencies.",
    value: "item-3",
  },
  {
    question: "How do I customize the design?",
    answer:
      "All colors, fonts, and spacing are controlled via CSS variables in src/App.css. Swap the values there and every component updates automatically.",
    value: "item-4",
  },
  {
    question: "Does it support dark mode?",
    answer:
      "Yes. Light and dark themes are built in and toggled via the button in the navbar. Both themes use the Airbnb-inspired color palette we applied at WAMEUP.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="https://wameup.com/"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
