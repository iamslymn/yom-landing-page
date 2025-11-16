import yomIconWhite from "@/assets/yom-icon-white.svg";
import vanImage from "@/assets/van.png";

const About = () => {
  return (
    <section id="about" className="py-20 border-t-2 border-border/30" style={{ backgroundColor: '#009bff' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <img src={yomIconWhite} alt="Yom Icon" className="h-16 w-16" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Yom Haqqında
              </h2>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              Yom ölkəmizdə mobil tətbiqi vasitəsilə istifadəçilərə camaşırxana xidmətlərini təklif ilk platformadır. Məqsədimiz, camaşırxana işlərini asanlaşdırmaqla insanlara vaxtlarını daha səmərəli istifadə etmək imkanı yaratmaqdır. Çünki camaşır işləri bir həftədə 3 saatdan çox vaxtımızı alır və bir çox hallarda sıxıcı bir proses ola bilir. İnanırıq ki bu yolda ən keyfiyyətli çatdırılma və təmizləmə xidmətləri təklif etmək və insanlara bunu ən rahat şəkildə əlçatan etmək bu hədəfimizə gedən əsas yoldur.
            </p>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
              <img
                src={vanImage}
                alt="YOM çatdırılma vanı"
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
