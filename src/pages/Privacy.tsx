import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Məxfilik Siyasəti</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">Son yenilənmə tarixi: 19.11.2025</p>
          
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Giriş</h2>
            <p>Yom-a xoş gəlmisiniz.</p>
            <p>Bu Məxfilik Siyasəti [Şirkətinizin hüquqi adı] ("Yom", "biz", "bizim") tərəfindən idarə olunan mobil tətbiq, vebsayt və əlaqəli xidmətlərdən ("Platforma") istifadə zamanı şəxsi məlumatlarınızın necə toplanması, istifadəsi və qorunmasını izah edir.</p>
            <p>Platformadan istifadə etməklə bu Məxfilik Siyasətinə razı olduğunuzu təsdiqləyirsiniz.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Topladığımız məlumatlar</h2>
            <p>Yom aşağıdakı məlumatları toplaya bilər:</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">a. Şəxsi məlumatlar</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ad və soyad</li>
              <li>Telefon nömrəsi</li>
              <li>E-poçt ünvanı</li>
              <li>Götürülmə və çatdırılma ünvanları</li>
              <li>Ödəniş məlumatları (kart məlumatlarınız Yom tərəfindən saxlanılmır, onlar etibarlı ödəniş tərəfdaşları vasitəsilə emal olunur)</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">b. İstifadə məlumatları</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tətbiqdən istifadə tarixi və funksiyalar</li>
              <li>Cihaz məlumatları (model, əməliyyat sistemi, IP ünvanı)</li>
              <li>Yer məlumatı (yalnız icazə verdiyiniz halda – götürülmə və çatdırılma üçün)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Məlumatların istifadə məqsədi</h2>
            <p>Toplanmış məlumatlar aşağıdakı məqsədlərlə istifadə olunur:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hesabınızın yaradılması və idarə olunması</li>
              <li>Sifarişlərin emalı və çatdırılması</li>
              <li>Sizinlə sifarişlər və ödənişlər barədə əlaqə</li>
              <li>Xidmət keyfiyyətinin və istifadəçi təcrübəsinin yaxşılaşdırılması</li>
              <li>Qanuni öhdəliklərin yerinə yetirilməsi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Məlumatların paylaşılması</h2>
            <p>Şəxsi məlumatlar aşağıdakı tərəflərlə paylaşılır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Təmizləmə xidmət təminatçıları – sifariş etdiyiniz xidmətin icrası üçün</li>
              <li>Çatdırılma tərəfdaşları və sürücülər – əşyaların götürülməsi və qaytarılması üçün</li>
              <li>Ödəniş sistemləri – ödənişlərin təhlükəsiz həyata keçirilməsi üçün</li>
              <li>Dövlət orqanları – qanunla tələb olunduğu hallarda</li>
            </ul>
            <p className="mt-4">Yom şəxsi məlumatlarınızı heç bir halda satmır və ya icarəyə vermir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Məlumatların saxlanması</h2>
            <p>Məlumatlar yalnız:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>xidmətin göstərilməsi; və</li>
              <li>hüquqi və vergi öhdəliklərinin yerinə yetirilməsi müddətində saxlanılır.</li>
            </ul>
            <p className="mt-4">Bu müddət bitdikdən sonra məlumatlar təhlükəsiz şəkildə silinir və ya anonimləşdirilir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Məlumatların təhlükəsizliyi</h2>
            <p>Yom şəxsi məlumatların qorunması üçün müvafiq texniki və inzibati tədbirlər görür.</p>
            <p>Lakin internet üzərindən məlumat ötürülməsi tam təhlükəsiz olmadığından, Yom tam zəmanət verə bilmir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Sizin hüquqlarınız</h2>
            <p>Mövcud qanunvericiliyə əsasən siz aşağıdakı hüquqlara maliksiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>şəxsi məlumatlarınıza çıxış;</li>
              <li>düzəliş və ya silinmə tələbi;</li>
              <li>məlumatların işlənməsinə razılığın geri götürülməsi;</li>
              <li>məlumatlarınızın surətinin tələb edilməsi.</li>
            </ul>
            <p className="mt-4">Bu hüquqları həyata keçirmək üçün bizimlə əlaqə saxlayın: hello@yom.az</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Kukilər və izləmə texnologiyaları</h2>
            <p>Platforma kukilərdən (cookies) istifadə edə bilər:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>tətbiqin funksionallığını artırmaq;</li>
              <li>istifadə təcrübəsini yaxşılaşdırmaq;</li>
              <li>trafiki analiz etmək üçün.</li>
            </ul>
            <p className="mt-4">İstəsəniz, cihaz və ya brauzer parametrlərindən kukiləri deaktiv edə bilərsiniz.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Üçüncü tərəf keçidləri</h2>
            <p>Platformada üçüncü tərəflərə məxsus keçidlər ola bilər.</p>
            <p>Yom bu saytların məxfilik siyasətinə və fəaliyyətinə görə məsuliyyət daşımır.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Siyasətə dəyişikliklər</h2>
            <p>Yom bu Məxfilik Siyasətini vaxtaşırı yeniləyə bilər.</p>
            <p>Yenilənmiş versiya Platformada yerləşdiriləcək və tarix yenilənəcəkdir.</p>
            <p>Platformadan istifadənin davam etdirilməsi yenilənmiş siyasətin qəbul edilməsi deməkdir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Əlaqə</h2>
            <p>Məxfilik Siyasəti ilə bağlı suallar üçün bizimlə əlaqə saxlayın:</p>
            <p className="mt-2">📧 hello@yom.az</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

