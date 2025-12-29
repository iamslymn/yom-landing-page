import { useLanguage } from "@/contexts/LanguageContext";
import yomIconWhite from "@/assets/yom-icon-white.svg";
import vanImage from "@/assets/van.png";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 border-t-2 border-border/30" style={{ backgroundColor: '#009bff' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <img src={yomIconWhite} alt="Yom Icon" className="h-16 w-16" />
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {t("about.title")}
              </h2>
            </div>
            <p className="text-lg text-white/90 leading-normal">
              {t("about.description")}
            </p>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
              <img
                src={vanImage}
                alt="YOM delivery van"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
