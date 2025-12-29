import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">{t("terms.title")}</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">{t("terms.lastUpdated")}</p>
          
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section1.title")}</h2>
            <p>{t("terms.section1.p1")}</p>
            <p>{t("terms.section1.p2")}</p>
            <p>{t("terms.section1.p3")}</p>
            <p>{t("terms.section1.p4")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section1.li1")}</li>
              <li>{t("terms.section1.li2")}</li>
            </ul>
            <p className="mt-4">{t("terms.section1.p5")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section2.title")}</h2>
            <p>{t("terms.section2.p1")}</p>
            <p>{t("terms.section2.p2")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section2.li1")}</li>
              <li>{t("terms.section2.li2")}</li>
              <li>{t("terms.section2.li3")}</li>
            </ul>
            <p className="mt-4">{t("terms.section2.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section3.title")}</h2>
            <p>{t("terms.section3.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section3.li1")}</li>
              <li>{t("terms.section3.li2")}</li>
              <li>{t("terms.section3.li3")}</li>
            </ul>
            <p className="mt-4">{t("terms.section3.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section4.title")}</h2>
            <p>{t("terms.section4.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section4.li1")}</li>
              <li>{t("terms.section4.li2")}</li>
              <li>{t("terms.section4.li3")}</li>
            </ul>
            <p className="mt-4">{t("terms.section4.p2")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section4.li4")}</li>
              <li>{t("terms.section4.li5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section5.title")}</h2>
            <p>{t("terms.section5.p1")}</p>
            <p>{t("terms.section5.p2")}</p>
            <p>{t("terms.section5.p3")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section5.li1")}</li>
              <li>{t("terms.section5.li2")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section6.title")}</h2>
            <p>{t("terms.section6.p1")}</p>
            <p>{t("terms.section6.p2")}</p>
            <p>{t("terms.section6.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section7.title")}</h2>
            <p>{t("terms.section7.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section7.li1")}</li>
              <li>{t("terms.section7.li2")}</li>
              <li>{t("terms.section7.li3")}</li>
            </ul>
            <p className="mt-4">{t("terms.section7.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section8.title")}</h2>
            <p>{t("terms.section8.p1")}</p>
            <p>{t("terms.section8.p2")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section8.li1")}</li>
              <li>{t("terms.section8.li2")}</li>
              <li>{t("terms.section8.li3")}</li>
            </ul>
            <p className="mt-4">{t("terms.section8.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section9.title")}</h2>
            <p>{t("terms.section9.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("terms.section9.li1")}</li>
              <li>{t("terms.section9.li2")}</li>
              <li>{t("terms.section9.li3")}</li>
              <li>{t("terms.section9.li4")}</li>
            </ul>
            <p className="mt-4">{t("terms.section9.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section10.title")}</h2>
            <p>{t("terms.section10.p1")}</p>
            <p>{t("terms.section10.p2")}</p>
            <p>{t("terms.section10.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section11.title")}</h2>
            <p>{t("terms.section11.p1")}</p>
            <p>{t("terms.section11.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section12.title")}</h2>
            <p>{t("terms.section12.p1")}</p>
            <p>{t("terms.section12.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section13.title")}</h2>
            <p>{t("terms.section13.p1")}</p>
            <p>{t("terms.section13.p2")}</p>
            <p>{t("terms.section13.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("terms.section14.title")}</h2>
            <p>{t("terms.section14.p1")}</p>
            <p className="mt-2">📧 hello@yom.az</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
