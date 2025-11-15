import { Button } from "@/components/ui/button";
import { Smartphone, QrCode } from "lucide-react";
import qrCodeImage from "@/assets/qr-code.png";
import yomIconWhite from "@/assets/yom-icon-white.svg";

const Download = () => {
  return (
    <section id="download" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="flex justify-center mb-6 animate-fade-in">
            <img src={yomIconWhite} alt="Yom Icon" className="h-20 w-20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Təmiz paltarlarınız bir toxunuş qədər uzaqda
          </h2>
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/90 animate-fade-in">
            Mobil tətbiqimizi elə indi yükləyin və xidmətimizin rahatlığından dəqiqələr içində istifadə edin.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* QR Code */}
            <div className="flex flex-col items-center animate-slide-up">
              <div className="bg-primary-foreground rounded-2xl p-6 shadow-strong mb-4">
                <img src={qrCodeImage} alt="Yom tətbiqini yükləmək üçün QR kodu" className="w-48 h-48" />
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <QrCode className="h-5 w-5" />
                <span className="text-sm">Yükləmək üçün skan edin</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-4 animate-slide-up">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto justify-start"
                onClick={() => window.open("https://play.google.com/store", "_blank")}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-foreground/10 p-3 rounded-xl">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">ƏLDƏ EDİN</div>
                    <div className="text-xl font-bold">Google Play</div>
                  </div>
                </div>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto justify-start"
                onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-foreground/10 p-3 rounded-xl">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">YÜKLƏYIN</div>
                    <div className="text-xl font-bold">App Store</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Download;
