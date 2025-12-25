import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">İstifadəçi Şərtləri</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">Son yenilənmə tarixi: 19.11.2025</p>
          
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Haqqımızda</h2>
            <p>"Yom" mobil tətbiqi vasitəsilə istifadəçilərə ("siz", "sizin") camaşırxana xidmətlərini sifariş etmək imkanı verən platformadır. Bu xidmətlərə paltar yuma, quru təmizləmə, xalça yuma və ya digər oxşar təmizləmə xidmətləri aiddir. Platforma ("Yom", "biz", "bizim") tərəfindən UÇOT nömrəsi (VÖEN) 2005163372 ilə tənzimlənilir.</p>
            <p>Məqsədimiz, camaşırxana işlərini asanlaşdırmaqla insanlara vaxtlarını daha səmərəli istifadə etmək imkanı yaratmaqdır. Çünki ilkin araşdırmalarımız onu göstərir ki, camaşır işləri bir həftədə 3 saatdan çox vaxtımızı alır və sıxıcı bir prosesdir.</p>
            <p>Hədəfimiz isə istifadəçilərimizin bütün camaşır ehtiyaclarını ən asan yolla həll etmək imkanı yaratmaqdır. İnanırıq ki bu yolda ən keyfiyyətli çatdırılma və təmizləmə xidmətləri təklif etmək və insanlara bunu ən rahat şəkildə əlçatan etmək bu hədəfimizə gedən əsas yoldur.</p>
            <p>Onu da qeyd edək ki, "Yom" agent kimi fəaliyyət göstərir – yəni "Yom" çamaşırxana və ya təmizləmə mərkəzlərinə malik deyil, yalnız:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>müştəriləri müstəqil xidmət təminatçıları ilə əlaqələndirir;</li>
              <li>geyimlərin və əşyaların götürülməsi və çatdırılmasını təşkil edir.</li>
            </ul>
            <p className="mt-4">"Yom"-dan istifadə etməklə siz bu İstifadə Şərtləri ("Şərtlər") ilə razı olduğunuzu təsdiqləyirsiniz.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Yom-un rolu</h2>
            <p>Yom heç bir təmizləmə müəssisəsinə sahib deyil və onların fəaliyyətinə nəzarət etmir.</p>
            <p>Yom-un rolu aşağıdakılardan ibarətdir:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>müştəriləri müstəqil təmizləmə xidmətləri göstərən tərəfdaşlarla əlaqələndirmək;</li>
              <li>əşyaların götürülməsi və çatdırılmasını təşkil etmək;</li>
              <li>ödənişlərin və əlaqələrin idarə olunmasını təmin etmək.</li>
            </ul>
            <p className="mt-4">Təmizləmə işlərinin icrası yalnız müstəqil xidmət təminatçıları tərəfindən həyata keçirilir. Onlar öz biznes fəaliyyətlərinə və nəticələrinə görə məsuliyyət daşıyırlar.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Şərtlərin qəbul edilməsi</h2>
            <p>Yom tətbiqində qeydiyyatdan keçməklə, sifariş yerləşdirməklə və ya tətbiqdən istifadə etməklə siz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>18 yaşınızın tamam olduğunu;</li>
              <li>bu Şərtləri oxuyub başa düşdüyünüzü; və</li>
              <li>onlara əməl etməyə razı olduğunuzu təsdiqləyirsiniz.</li>
            </ul>
            <p className="mt-4">Əgər bu şərtlərlə razı deyilsinizsə, tətbiqdən istifadə etməyin.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Sifarişlərin yerləşdirilməsi</h2>
            <p>Sifariş verdikdə:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Siz Yom vasitəsilə götürülmə və çatdırılma xidməti sifariş edirsiniz;</li>
              <li>Yom sizin əşyalarınızı təmizlənməsi üçün tərəfdaş çamaşırxanalardan birinə yönləndirir;</li>
              <li>Hansı xidmət təminatçısının seçildiyi sizə göstərilmir, bu proses Yom tərəfindən daxili qaydada idarə olunur.</li>
            </ul>
            <p className="mt-4">Sifariş təsdiqlənməklə siz Yom-a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>sizin adınızdan xidmət sifariş etmək,</li>
              <li>ödənişləri və əlaqəni təmin etmək səlahiyyəti verirsiniz.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Götürülmə və çatdırılma</h2>
            <p>Yom əşyalarınızı təyin etdiyiniz ünvandan götürəcək və təmizlənmədən sonra geri gətirəcəkdir.</p>
            <p>Əşyaların götürülməsi və çatdırılması üçün təxmini vaxt tətbiqdə göstərilir, lakin bu, hava, nəqliyyat və digər səbəblərdən dəyişə bilər.</p>
            <p>Siz aşağıdakılara məsuliyyət daşıyırsınız:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>əşyalar barədə düzgün məlumat vermək (material, xüsusi təlimatlar və s.);</li>
              <li>mövcud zədələnmələr barədə əvvəlcədən məlumat vermək.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Ödəniş və qiymətlər</h2>
            <p>Tətbiqdə göstərilən qiymətlər həm Yom-un agent xidməti, həm də xidmət təminatçısının təmizləmə haqqını əhatə edir.</p>
            <p>Ödəniş sifariş zamanı tətbiq vasitəsilə həyata keçirilir.</p>
            <p>Yom qiymətləri və ya xidmət haqlarını istənilən vaxt dəyişmək hüququna malikdir. Bu dəyişikliklər yalnız yeni sifarişlərə tətbiq olunur.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Əşyaların itməsi və ya zədələnməsi</h2>
            <p>Yom və tərəfdaşlarımız bütün əşyalarınıza diqqətlə yanaşır, lakin:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Təmizləmə prosesində yaranan itki, ləkə, rəng dəyişikliyi, büzülmə və ya zədələnməyə görə Yom məsuliyyət daşımır.</li>
              <li>Yom-un məsuliyyəti yalnız götürülmə və çatdırılma xidmətləri ilə məhdudlaşır.</li>
              <li>Əgər problem yaranarsa, Yom müştəriyə xidmət təminatçısı ilə əlaqə saxlayaraq məsələnin həllinə yardım göstərəcəkdir, lakin birbaşa zərərin əvəzini ödəmək öhdəliyinə malik deyil.</li>
            </ul>
            <p className="mt-4">Zədələnmə və ya itki barədə iddialar çatdırılmadan sonra 24 saat ərzində Yom-a bildirilməlidir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Məsuliyyətin məhdudlaşdırılması</h2>
            <p>Qanunla icazə verilən maksimum həddə qədər:</p>
            <p>Yom aşağıdakı hallarda yaranan hər hansı birbaşa və ya dolayı zərərlərə görə məsuliyyət daşımır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Xidmət təminatçılarının hərəkət və ya hərəkətsizliyi;</li>
              <li>Çatdırılma və ya götürülmədə gecikmələr;</li>
              <li>İstifadəçi tərəfindən verilmiş yanlış və ya natamam məlumatlar.</li>
            </ul>
            <p className="mt-4">Yom-un ümumi məsuliyyəti, hər bir hadisə üçün, yalnız həmin sifarişə görə ödənilmiş ümumi məbləğlə məhdudlaşır.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. İstifadəçi öhdəlikləri</h2>
            <p>İstifadəçi razılaşır ki:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>düzgün ünvan və əlaqə məlumatı təqdim edəcək;</li>
              <li>təyin edilmiş vaxtda əşyaların götürülməsini təmin edəcək;</li>
              <li>qadağan olunmuş əşyaları (pul, zinət əşyası, təhlükəli maddələr və s.) daxil etməyəcək;</li>
              <li>Yom əməkdaşlarına və xidmət təminatçılarına qarşı etik davranacaq.</li>
            </ul>
            <p className="mt-4">Əgər götürülmə və ya çatdırılma uğursuz olarsa (məsələn, səhv ünvan, müştərinin olmaması və s.), Yom əlavə çatdırılma haqqı tələb edə bilər.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Ləğv və geri ödənişlər</h2>
            <p>Sifariş əşyalar götürülməzdən əvvəl ləğv edilə bilər.</p>
            <p>Əşyalar götürüldükdən sonra sifarişin ləğvi mümkün deyil.</p>
            <p>Geri ödəniş yalnız Yom-un qərarı və ya qanunla tələb olunduğu hallarda həyata keçirilir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Xidmət dəyişiklikləri</h2>
            <p>Yom istənilən vaxt tətbiqin bəzi funksiyalarını dəyişdirmək, dayandırmaq və ya yeniləmək hüququna malikdir.</p>
            <p>Həmçinin, bu Şərtlər vaxtaşırı yenilənə bilər. Tətbiqdən istifadənin davam etdirilməsi, yenilənmiş şərtlərin qəbul edilməsi deməkdir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Məxfilik</h2>
            <p>Yom tətbiqindən istifadə etməklə siz Məxfilik Siyasətimizdə göstərilən məlumat toplama və işlənməsi qaydaları ilə razı olduğunuzu təsdiqləyirsiniz.</p>
            <p>Bu sənədlə tətbiqdə və vebsaytımızda tanış ola bilərsiniz.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Tətbiq olunan qanun və mübahisələrin həlli</h2>
            <p>Bu Şərtlər Azərbaycan Respublikasının qanunvericiliyinə əsaslanır.</p>
            <p>Yaranan mübahisələr əvvəlcə qarşılıqlı razılaşma yolu ilə həll edilməlidir.</p>
            <p>Əgər razılıq əldə olunmazsa, mübahisələr Bakı şəhərinin səlahiyyətli məhkəmələrində baxılacaq.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Əlaqə</h2>
            <p>Suallarınız və ya şikayətləriniz üçün bizimlə əlaqə saxlayın:</p>
            <p className="mt-2">📧 hello@yom.az</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;

