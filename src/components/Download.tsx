import { QrCode } from "lucide-react";
import qrCodeImage from "@/assets/qr-code.png";
import yomIconWhite from "@/assets/yom-icon-white.svg";
import appStoreIcon from "@/assets/app_store.svg";
import googlePlayIcon from "@/assets/google_play.svg";

const Download = () => {
  return (
    <section id="download" className="py-16 bg-gradient-hero relative overflow-hidden border-t-2 border-primary/30">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="flex justify-center mb-4 animate-fade-in">
            <img src={yomIconWhite} alt="Yom Icon" className="h-16 w-16" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in leading-tight">
            Təmiz paltarlarınız bir toxunuş qədər uzaqda
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 animate-fade-in leading-normal">
            Mobil tətbiqimizi elə indi yükləyin və xidmətimizin rahatlığından dəqiqələr içində istifadə edin.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* QR Code */}
            <div className="flex flex-col items-center animate-slide-up">
              <div className="bg-primary-foreground rounded-2xl p-4 shadow-strong mb-3">
                <img src={qrCodeImage} alt="Yom tətbiqini yükləmək üçün QR kodu" className="w-40 h-40" />
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <QrCode className="h-5 w-5" />
                <span className="text-sm">Yükləmək üçün skan edin</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-3 animate-slide-up items-center justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=az.yom.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={googlePlayIcon} alt="Google Play" className="h-20 w-auto" />
              </a>
              <a
                href="https://apps.apple.com/us/app/yom-laundry/id6756739043"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={appStoreIcon} alt="App Store" className="h-20 w-auto" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Download;
