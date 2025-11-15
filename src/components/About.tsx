import { CheckCircle2 } from "lucide-react";
import yomIconBlue from "@/assets/yom-icon-blue.svg";
import vanImage from "@/assets/van.png";

const features = [
  "Asan mobil tətbiq sifarişi",
  "Real vaxt rejimində sifariş izləmə",
  "Peşəkar keyfiyyətli xidmət",
  "Ekoloji təmizləmə məhsulları",
  "Çevik planlaşdırma",
  "Təhlükəsiz ödəniş variantları",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <img src={yomIconBlue} alt="Yom Icon" className="h-16 w-16" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Yom Haqqında
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Yom peşəkar təmizləmə xidmətlərini birbaşa qapınıza gətirərək camaşırxana sənayesində 
              inqilab edir. Mobil tətbiqimiz götürmələri planlaşdırmağı, sifarişinizi izləməyi və 
              evinizdən çıxmadan təmiz paltarlardan həzz almağı inanılmaz dərəcədə asanlaşdırır.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ən yüksək keyfiyyətli xidməti təmin etmək və yerli biznesləri dəstəkləmək üçün etibarlı 
              yerli camaşırxanalar və quru təmizləmə şirkətləri ilə əməkdaşlıq edirik. Gündəlik 
              camaşırxana olsun, xüsusi paltar qayğısı olsun, Yom sizə xidmət edir.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
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
