import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What are FRP planters?",
      answer: "FRP (Fiber Reinforced Plastic) planters are made from a composite material combining glass fibers and resin, creating lightweight yet durable containers perfect for plants."
    },
    {
      question: "Are fiberglass planters suitable for outdoor use?",
      answer: "Yes! Our fiberglass planters are specifically designed for both indoor and outdoor use. They are weather-resistant, UV-protected, and can withstand various climate conditions."
    },
    {
      question: "How do I clean my fiberglass planter?",
      answer: "Simply use mild soap and water with a soft cloth. Avoid abrasive cleaners or harsh chemicals that might damage the finish."
    },
    {
      question: "Can I customize the size and color?",
      answer: "Absolutely! We offer custom-made solutions to match your specific requirements in terms of size, shape, color, and style."
    },
    {
      question: "How long do fiberglass planters last?",
      answer: "With proper care, our fiberglass planters can last for many years. They are resistant to cracking, fading, and deterioration."
    },
    {
      question: "Do you offer bulk orders?",
      answer: "Yes, we cater to both individual and bulk orders for residential and commercial projects."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
