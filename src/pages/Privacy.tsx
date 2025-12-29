import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">{t("privacy.title")}</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">{t("privacy.lastUpdated")}</p>
          
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section1.title")}</h2>
            <p>{t("privacy.section1.p1")}</p>
            <p>{t("privacy.section1.p2")}</p>
            <p>{t("privacy.section1.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section2.title")}</h2>
            <p>{t("privacy.section2.p1")}</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("privacy.section2.subtitle1")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.section2.li1")}</li>
              <li>{t("privacy.section2.li2")}</li>
              <li>{t("privacy.section2.li3")}</li>
              <li>{t("privacy.section2.li4")}</li>
              <li>{t("privacy.section2.li5")}</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">{t("privacy.section2.subtitle2")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.section2.li6")}</li>
              <li>{t("privacy.section2.li7")}</li>
              <li>{t("privacy.section2.li8")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section3.title")}</h2>
            <p>{t("privacy.section3.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.section3.li1")}</li>
              <li>{t("privacy.section3.li2")}</li>
              <li>{t("privacy.section3.li3")}</li>
              <li>{t("privacy.section3.li4")}</li>
              <li>{t("privacy.section3.li5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section4.title")}</h2>
            <p>{t("privacy.section4.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.section4.li1")}</li>
              <li>{t("privacy.section4.li2")}</li>
              <li>{t("privacy.section4.li3")}</li>
              <li>{t("privacy.section4.li4")}</li>
            </ul>
            <p className="mt-4">{t("privacy.section4.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section5.title")}</h2>
            <p>{t("privacy.section5.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.section5.li1")}</li>
              <li>{t("privacy.section5.li2")}</li>
            </ul>
            <p className="mt-4">{t("privacy.section5.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section6.title")}</h2>
            <p>{t("privacy.section6.p1")}</p>
            <p>{t("privacy.section6.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section7.title")}</h2>
            <p>{t("privacy.section7.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.section7.li1")}</li>
              <li>{t("privacy.section7.li2")}</li>
              <li>{t("privacy.section7.li3")}</li>
              <li>{t("privacy.section7.li4")}</li>
            </ul>
            <p className="mt-4">{t("privacy.section7.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section8.title")}</h2>
            <p>{t("privacy.section8.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("privacy.section8.li1")}</li>
              <li>{t("privacy.section8.li2")}</li>
            </ul>
            <p className="mt-4">{t("privacy.section8.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section9.title")}</h2>
            <p>{t("privacy.section9.p1")}</p>
            <p>{t("privacy.section9.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section10.title")}</h2>
            <p>{t("privacy.section10.p1")}</p>
            <p>{t("privacy.section10.p2")}</p>
            <p>{t("privacy.section10.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.section11.title")}</h2>
            <p>{t("privacy.section11.p1")}</p>
            <p className="mt-2">📧 hello@yom.az</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
