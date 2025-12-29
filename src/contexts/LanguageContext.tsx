import { createContext, useContext, useState, ReactNode } from "react";

type Language = "az" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  az: {
    // Navbar
    "nav.services": "Xidmətlər",
    "nav.about": "Haqqımızda",
    "nav.contact": "Əlaqə",
    "nav.download": "Yüklə",

    // Hero
    "hero.title": "Çamaşırxana ehtiyaclarınızı həll etməyin ən asan yolu.",
    "hero.description": "Paltarlarınızı sizdən götürür, təmizləyib və çatdırırıq. Rahatınızda qalın və ürəyiniz istədiyiniz zaman mobil tətbiq üzərindən sifariş edin.",
    "hero.pickup": "Ünvandan götürülmə və çatdırılma",
    "hero.support": "24/7 müştəri xidməti",
    "hero.status": "Canlı statuslar",
    "hero.downloadApp": "Tətbiqi Yüklə",
    "hero.moreInfo": "Ətraflı Məlumat",

    // Feature Block
    "features.title": "Vaxtınız özünüzə qalsın. Camaşırxana işlərinizi isə bizə həvalə edin.",
    "features.online.title": "Tam online sifariş",
    "features.online.description": "Sizə uyğun vaxtda paltarlarınızı hazırlayın və mobil tətbiq üzərindən bizi çağırın.",
    "features.professional.title": "Professional təmizləmə, qayğı ilə",
    "features.professional.description": "Təmizlənmə nəticələrinə şəxsən nəzarət edirik, özü də sizə ən yaxın məntəqədə.",
    "features.delivery.title": "Qapıya çatdırılma",
    "features.delivery.description": "Dəyərli vaxtınıza qənaət edin. Biz isə təmiz paltarlarınızı birbaşa qapınıza çatdırarıq.",

    // Three Steps
    "steps.title": "Bu qədər rahatlıq cəmi 3 addımda",
    "steps.subtitle": "Sifariş vermək heç vaxt bu qədər asan olmamışdı",
    "steps.step1.title": "Tətbiqdən şifarişinizi edin",
    "steps.step1.description": "Gününüzü rahat planlayın, götürülmə və çatdırılma tarixini özünüz seçin.",
    "steps.step2.title": "Kuryeri gözləyin",
    "steps.step2.description": "Siz qeyd etdiyiniz vaxtda kuryer qapınızda olacaqdır. Paltarlarınızı paketləyib sizdən təhvil alacağıq.",
    "steps.step3.title": "Rahatınızda qalın və çatdırılmanı gözləyin",
    "steps.step3.description": "Paltarlarınızı təmizlədikdən sonra sifariş etdiyiniz qaydada, göstərdiyiniz tarixdə geri gətirəcəyik.",

    // Services
    "services.title": "Xidmətlərimiz",
    "services.dryCleaning.title": "Quru təmizləmə",
    "services.dryCleaning.slogan": "Etibarlı şəkildə, ilk günkü kimi.",
    "services.washing.title": "Yuma",
    "services.washing.slogan": "Kiloqram ilə, xüsusi qayğı ilə.",
    "services.ironing.title": "Ütüləmə",
    "services.ironing.slogan": "Ən şık görünəcək vəziyyətdə.",

    // About
    "about.title": "Yom Haqqında",
    "about.description": "Yom ölkəmizdə mobil tətbiqi vasitəsilə istifadəçilərə camaşırxana xidmətlərini təklif ilk platformadır. Məqsədimiz, camaşırxana işlərini asanlaşdırmaqla insanlara vaxtlarını daha səmərəli istifadə etmək imkanı yaratmaqdır. Çünki camaşır işləri bir həftədə 3 saatdan çox vaxtımızı alır və bir çox hallarda sıxıcı bir proses ola bilir. İnanırıq ki bu yolda ən keyfiyyətli çatdırılma və təmizləmə xidmətləri təklif etmək və insanlara bunu ən rahat şəkildə əlçatan etmək bu hədəfimizə gedən əsas yoldur.",

    // FAQ
    "faq.title": "Sualınız var? Biz buradayıq",
    "faq.button": "Sualınızı bizdən soruşun",
    "faq.q1": "Hansı bölgələrdə xidmət göstərirsiniz?",
    "faq.a1": "Hazırda sadəcə Bakı şəhərinin mərkəz ərazilərində xidmət göstəririk. Yaxın gələcəkdə isə durmadan böyüyərək Azərbaycanın bütün bölgələrinə xidmət göstərməyi hədəfləyirik.",
    "faq.q2": "Kuryerlər hansı aralıqda işləyirlər?",
    "faq.a2": "Əlbəttə ki sizə ən uyğun vaxtda. Bu seçimi tam siz edirsiniz. Mobil tətbiqdə təhvil alma və təslim vaxtlarını seçin, gerisini isə bizə buraxın.",
    "faq.q3": "Ödənişləri necə edə bilərəm?",
    "faq.a3": "Ödənişinizi tam onlayn ödəyə bilərsiniz. Hazırda, nəğd ödənişləri təəssüf ki qəbul etmirik.",
    "faq.q4": "Sifarişimi dəyişdirə və ya ləğv edə bilərəm?",
    "faq.a4": "Əlbəttə. Bunu bizim müştəri xidmətlərinə bildirməyiniz yetərli olacaqdır.",

    // Download
    "download.title": "Təmiz paltarlarınız bir toxunuş qədər uzaqda",
    "download.description": "Mobil tətbiqimizi elə indi yükləyin və xidmətimizin rahatlığından dəqiqələr içində istifadə edin.",
    "download.scanToDownload": "Yükləmək üçün skan edin",

    // Footer
    "footer.description": "Peşəkar camaşırxana və quru təmizləmə xidmətləri qapınıza çatdırılır.",
    "footer.services": "Xidmətlər",
    "footer.laundry": "Camaşırxana",
    "footer.dryCleaning": "Quru Təmizləmə",
    "footer.express": "Ekspress Xidmət",
    "footer.scheduled": "Planlaşdırılmış Götürmə",
    "footer.company": "Şirkət",
    "footer.about": "Haqqımızda",
    "footer.contact": "Əlaqə",
    "footer.legal": "Hüquqi",
    "footer.privacy": "Məxfilik Siyasəti",
    "footer.terms": "Xidmət Şərtləri",
    "footer.rights": "Bütün hüquqlar qorunur.",

    // Contact Page
    "contact.title": "Əlaqə",
    "contact.description": "Bizimlə əlaqə saxlayın. Suallarınız, təklifləriniz və ya şikayətləriniz üçün bizə yazın.",
    "contact.info": "Əlaqə Məlumatları",
    "contact.address": "Ünvan",
    "contact.phone": "Telefon",
    "contact.email": "E-poçt",
    "contact.social": "Sosial Mediada YOM",
    "contact.followLinkedIn": "LinkedIn-də bizi izləyin",
    "contact.followInstagram": "Instagram-da bizi izləyin",
  },
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.download": "Download",

    // Hero
    "hero.title": "The easiest way to solve your laundry needs.",
    "hero.description": "We pick up your clothes, clean them, and deliver them back. Stay comfortable and order anytime through our mobile app.",
    "hero.pickup": "Door-to-door pickup & delivery",
    "hero.support": "24/7 customer support",
    "hero.status": "Live tracking",
    "hero.downloadApp": "Download App",
    "hero.moreInfo": "Learn More",

    // Feature Block
    "features.title": "Save your time for yourself. Leave the laundry work to us.",
    "features.online.title": "Fully online ordering",
    "features.online.description": "Prepare your clothes at your convenience and call us through the mobile app.",
    "features.professional.title": "Professional cleaning with care",
    "features.professional.description": "We personally supervise the cleaning results at the nearest facility.",
    "features.delivery.title": "Door-to-door delivery",
    "features.delivery.description": "Save your valuable time. We deliver your clean clothes directly to your door.",

    // Three Steps
    "steps.title": "This much convenience in just 3 steps",
    "steps.subtitle": "Ordering has never been this easy",
    "steps.step1.title": "Place your order from the app",
    "steps.step1.description": "Plan your day easily, choose the pickup and delivery dates yourself.",
    "steps.step2.title": "Wait for the courier",
    "steps.step2.description": "The courier will be at your door at the time you specified. We'll pack and collect your clothes.",
    "steps.step3.title": "Relax and wait for delivery",
    "steps.step3.description": "After cleaning your clothes, we'll bring them back on the date you specified, in the order you requested.",

    // Services
    "services.title": "Our Services",
    "services.dryCleaning.title": "Dry Cleaning",
    "services.dryCleaning.slogan": "Reliably, like the first day.",
    "services.washing.title": "Washing",
    "services.washing.slogan": "By the kilogram, with special care.",
    "services.ironing.title": "Ironing",
    "services.ironing.slogan": "Looking your most stylish.",

    // About
    "about.title": "About Yom",
    "about.description": "Yom is the first platform in our country to offer laundry services to users through a mobile app. Our goal is to help people use their time more efficiently by making laundry tasks easier. Laundry takes more than 3 hours of our time per week and can often be a tedious process. We believe that offering the highest quality delivery and cleaning services, and making them easily accessible to people, is the main path to achieving this goal.",

    // FAQ
    "faq.title": "Have questions? We're here for you",
    "faq.button": "Ask us your question",
    "faq.q1": "Which areas do you serve?",
    "faq.a1": "Currently, we only serve the central areas of Baku. In the near future, we aim to continuously grow and serve all regions of Azerbaijan.",
    "faq.q2": "What hours do the couriers work?",
    "faq.a2": "Of course, at the time that suits you best. You make this choice entirely. Select pickup and delivery times in the mobile app, and leave the rest to us.",
    "faq.q3": "How can I make payments?",
    "faq.a3": "You can pay fully online. Unfortunately, we do not accept cash payments at this time.",
    "faq.q4": "Can I change or cancel my order?",
    "faq.a4": "Of course. Simply notify our customer service and that will be sufficient.",

    // Download
    "download.title": "Your clean clothes are just a tap away",
    "download.description": "Download our mobile app now and start enjoying our service convenience in minutes.",
    "download.scanToDownload": "Scan to download",

    // Footer
    "footer.description": "Professional laundry and dry cleaning services delivered to your door.",
    "footer.services": "Services",
    "footer.laundry": "Laundry",
    "footer.dryCleaning": "Dry Cleaning",
    "footer.express": "Express Service",
    "footer.scheduled": "Scheduled Pickup",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",

    // Contact Page
    "contact.title": "Contact",
    "contact.description": "Get in touch with us. Write to us for your questions, suggestions, or complaints.",
    "contact.info": "Contact Information",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.social": "YOM on Social Media",
    "contact.followLinkedIn": "Follow us on LinkedIn",
    "contact.followInstagram": "Follow us on Instagram",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("az");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.az] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

