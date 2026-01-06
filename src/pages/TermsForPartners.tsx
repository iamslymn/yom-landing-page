import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsForPartners = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">{t("partnerTerms.title")}</h1>
        <p className="text-lg text-muted-foreground mb-2">{t("partnerTerms.subtitle")}</p>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">{t("partnerTerms.lastUpdated")}</p>
          
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section1.title")}</h2>
            <p>{t("partnerTerms.section1.p1")}</p>
            <p>{t("partnerTerms.section1.p2")}</p>
            <p>{t("partnerTerms.section1.p3")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section1.li1")}</li>
              <li>{t("partnerTerms.section1.li2")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section1.p4")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section2.title")}</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("partnerTerms.section2.subtitle1")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section2.li1")}</li>
              <li>{t("partnerTerms.section2.li2")}</li>
              <li>{t("partnerTerms.section2.li3")}</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("partnerTerms.section2.subtitle2")}</h3>
            <p>{t("partnerTerms.section2.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section2.li4")}</li>
              <li>{t("partnerTerms.section2.li5")}</li>
              <li>{t("partnerTerms.section2.li6")}</li>
              <li>{t("partnerTerms.section2.li7")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section2.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section3.title")}</h2>
            <p>{t("partnerTerms.section3.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section3.li1")}</li>
              <li>{t("partnerTerms.section3.li2")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section3.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section4.title")}</h2>
            <p>{t("partnerTerms.section4.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section4.li1")}</li>
              <li>{t("partnerTerms.section4.li2")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section4.p2")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section4.li3")}</li>
              <li>{t("partnerTerms.section4.li4")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section4.p3")}</p>
            <p>{t("partnerTerms.section4.p4")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section5.title")}</h2>
            <p>{t("partnerTerms.section5.p1")}</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>{t("partnerTerms.section5.li1")}</li>
              <li>{t("partnerTerms.section5.li2")}</li>
              <li>{t("partnerTerms.section5.li3")}</li>
              <li>{t("partnerTerms.section5.li4")}</li>
              <li>{t("partnerTerms.section5.li5")}</li>
              <li>{t("partnerTerms.section5.li6")}</li>
            </ol>
            <p className="mt-4">{t("partnerTerms.section5.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section6.title")}</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("partnerTerms.section6.subtitle1")}</h3>
            <p>{t("partnerTerms.section6.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section6.li1")}</li>
              <li>{t("partnerTerms.section6.li2")}</li>
              <li>{t("partnerTerms.section6.li3")}</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("partnerTerms.section6.subtitle2")}</h3>
            <p>{t("partnerTerms.section6.p2")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section6.li4")}</li>
              <li>{t("partnerTerms.section6.li5")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section6.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section7.title")}</h2>
            <p>{t("partnerTerms.section7.p1")}</p>
            <p>{t("partnerTerms.section7.p2")}</p>
            <p>{t("partnerTerms.section7.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section8.title")}</h2>
            <p>{t("partnerTerms.section8.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section8.li1")}</li>
              <li>{t("partnerTerms.section8.li2")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section8.p2")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section8.li3")}</li>
              <li>{t("partnerTerms.section8.li4")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section8.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section9.title")}</h2>
            <p>{t("partnerTerms.section9.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section9.li1")}</li>
              <li>{t("partnerTerms.section9.li2")}</li>
              <li>{t("partnerTerms.section9.li3")}</li>
              <li>{t("partnerTerms.section9.li4")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section9.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section10.title")}</h2>
            <p>{t("partnerTerms.section10.p1")}</p>
            <p>{t("partnerTerms.section10.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section11.title")}</h2>
            <p>{t("partnerTerms.section11.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section11.li1")}</li>
              <li>{t("partnerTerms.section11.li2")}</li>
              <li>{t("partnerTerms.section11.li3")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section11.p2")}</p>
            <p>{t("partnerTerms.section11.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section12.title")}</h2>
            <p>{t("partnerTerms.section12.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section12.li1")}</li>
              <li>{t("partnerTerms.section12.li2")}</li>
              <li>{t("partnerTerms.section12.li3")}</li>
              <li>{t("partnerTerms.section12.li4")}</li>
            </ul>
            <p className="mt-4">{t("partnerTerms.section12.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section13.title")}</h2>
            <p>{t("partnerTerms.section13.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section13.li1")}</li>
              <li>{t("partnerTerms.section13.li2")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section14.title")}</h2>
            <p>{t("partnerTerms.section14.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("partnerTerms.section14.li1")}</li>
              <li>{t("partnerTerms.section14.li2")}</li>
              <li>{t("partnerTerms.section14.li3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section15.title")}</h2>
            <p>{t("partnerTerms.section15.p1")}</p>
            <p>{t("partnerTerms.section15.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section16.title")}</h2>
            <p>{t("partnerTerms.section16.p1")}</p>
            <p>{t("partnerTerms.section16.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("partnerTerms.section17.title")}</h2>
            <p>{t("partnerTerms.section17.p1")}</p>
            <p className="mt-2">📧 hello@yom.az</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsForPartners;

