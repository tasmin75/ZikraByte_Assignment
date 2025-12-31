import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "How does the meal subscription work?",
      answer: "Our meal subscription delivers fresh, nutritious meals directly to your child's school. Simply choose a plan, customize preferences, and we handle the rest - from preparation to safe delivery."
    },
    {
      question: "Are all meals vegetarian?",
      answer: "Yes! All our meals are 100% vegetarian, made with fresh vegetables, whole grains, and plant-based proteins to ensure your child gets balanced nutrition."
    },
    {
      question: "Can I change or swap meals?",
      answer: "Absolutely! You can swap meals, change preferences, or skip deliveries anytime through our app. We believe in flexibility to match your child's evolving tastes."
    },
    {
      question: "How do I know my child received the meal?",
      answer: "You'll receive real-time delivery alerts when your child's meal is delivered. Our verified delivery system ensures you're always informed."
    },
    {
      question: "What if my child has allergies?",
      answer: "We take allergies seriously. During signup, you can specify all allergies and dietary restrictions. Our kitchen follows strict protocols to prevent cross-contamination."
    },
    {
      question: "Can I pause or modify the plan?",
      answer: "Yes, you can pause, modify, or cancel your plan anytime. We understand family schedules change, so we've made it easy to adjust."
    },
  ];
  
  const FAQSection = () => {
    return (
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-white p-2 rounded-full shadow-sm px-3 mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Got Questions? We've Got You Covered.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Quick answers to the things parents ask most.
            </p>
          </div>
  
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border bg-[#F8F5EE] border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 ">
                  <span className="flex items-center gap-3">
                    <span className="text-muted-foreground">{index + 1}.</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default FAQSection;
  