import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hansı bölgələrdə xidmət göstərirsiniz?",
    answer: "Hazırda sadəcə Bakı şəhərinin mərkəz ərazilərində xidmət göstəririk. Yaxın gələcəkdə isə durmadan böyüyərək Azərbaycanın bütün bölgələrinə xidmət göstərməyi hədəfləyirik.",
  },
  {
    question: "Kuryerlər hansı aralıqda işləyirlər?",
    answer: "Əlbəttə ki sizə ən uyğun vaxtda. Bu seçimi tam siz edirsiniz. Mobil tətbiqdə təhvil alma və təslim vaxtlarını seçin, gerisini isə bizə buraxın.",
  },
  {
    question: "Ödənişləri necə edə bilərəm?",
    answer: "Ödənişinizi tam onlayn ödəyə bilərsiniz. Hazırda, nəğd ödənişləri təəssüf ki qəbul etmirik.",
  },
  {
    question: "Sifarişimi dəyişdirə və ya ləğv edə bilərəm?",
    answer: "Əlbəttə. Bunu bizim müştəri xidmətlərinə bildirməyiniz yetərli olacaqdır.",
  },
];

const FAQ = () => {
  const scrollToContact = () => {
    // Scroll to FAQ section or could link to contact page
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="py-16 bg-blue-50 border-t-2 border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
              Sualınız var? Biz buradayıq
            </h2>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Sualınızı bizdən soruşun
            </Button>
          </div>

          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-normal">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

