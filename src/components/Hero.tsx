import { Button } from "@/components/ui/button";
import { Download, Smartphone, Truck, Headphones, MapPin } from "lucide-react";
import vanImage from "@/assets/van.png";
import twinkl1 from "@/assets/twinkl1.png";
import twinkl2 from "@/assets/twinkl2.png";

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Twinkl Icons Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left Area */}
        <img 
          src={twinkl1} 
          alt="" 
          className="absolute top-32 left-16 w-12 h-12 opacity-60 animate-twinkle"
          style={{ animationDelay: "0s" }}
        />
        <img 
          src={twinkl2} 
          alt="" 
          className="absolute top-48 left-32 w-8 h-8 opacity-50 animate-twinkle-slow"
          style={{ animationDelay: "1.5s" }}
        />
        <img 
          src={twinkl1} 
          alt="" 
          className="absolute top-64 left-8 w-10 h-10 opacity-55 animate-float-rotate"
          style={{ animationDelay: "2s" }}
        />

        {/* Top Right Area */}
        <img 
          src={twinkl2} 
          alt="" 
          className="absolute top-24 right-24 w-14 h-14 opacity-60 animate-twinkle"
          style={{ animationDelay: "0.5s" }}
        />
        <img 
          src={twinkl1} 
          alt="" 
          className="absolute top-40 right-40 w-9 h-9 opacity-50 animate-twinkle-slow"
          style={{ animationDelay: "2.5s" }}
        />
        <img 
          src={twinkl2} 
          alt="" 
          className="absolute top-56 right-16 w-11 h-11 opacity-55 animate-float-rotate"
          style={{ animationDelay: "1s" }}
        />

        {/* Middle Left Area */}
        <img 
          src={twinkl1} 
          alt="" 
          className="absolute top-1/2 left-20 w-10 h-10 opacity-50 animate-twinkle"
          style={{ animationDelay: "1.2s", transform: "translateY(-50%)" }}
        />
        <img 
          src={twinkl2} 
          alt="" 
          className="absolute top-1/2 left-40 w-7 h-7 opacity-45 animate-twinkle-slow"
          style={{ animationDelay: "3s", transform: "translateY(-50%)" }}
        />

        {/* Middle Right Area */}
        <img 
          src={twinkl2} 
          alt="" 
          className="absolute top-1/2 right-32 w-12 h-12 opacity-55 animate-float-rotate"
          style={{ animationDelay: "1.8s", transform: "translateY(-50%)" }}
        />
        <img 
          src={twinkl1} 
          alt="" 
          className="absolute top-1/2 right-48 w-8 h-8 opacity-50 animate-twinkle"
          style={{ animationDelay: "2.2s", transform: "translateY(-50%)" }}
        />

        {/* Bottom Left Area */}
        <img 
          src={twinkl2} 
          alt="" 
          className="absolute bottom-32 left-24 w-9 h-9 opacity-50 animate-twinkle-slow"
          style={{ animationDelay: "0.8s" }}
        />
        <img 
          src={twinkl1} 
          alt="" 
          className="absolute bottom-48 left-12 w-11 h-11 opacity-55 animate-float-rotate"
          style={{ animationDelay: "2.8s" }}
        />

        {/* Bottom Right Area */}
        <img 
          src={twinkl1} 
          alt="" 
          className="absolute bottom-40 right-28 w-10 h-10 opacity-50 animate-twinkle"
          style={{ animationDelay: "1.5s" }}
        />
        <img 
          src={twinkl2} 
          alt="" 
          className="absolute bottom-24 right-44 w-8 h-8 opacity-45 animate-twinkle-slow"
          style={{ animationDelay: "3.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Çamaşırxana ehtiyaclarınızı həll etməyin ən asan yolu.
            </h1>
            <p className="text-lg md:text-xl mb-6 text-primary-foreground/90">
              Paltarlarınızı sizdən götürür, təmizləyib və çatdırırıq. Rahatınızda qalın və ürəyiniz istədiyiniz zaman mobil tətbiq üzərindən sifariş edin.
            </p>
            {/* Icon-text items */}
            <div className="flex flex-wrap gap-6 mb-8 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-secondary" />
                <span className="text-sm">Ünvandan götürülmə və çatdırılma</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-secondary" />
                <span className="text-sm">24/7 müştəri xidməti</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-sm">Canlı sifariş statusu</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={scrollToDownload}
                className="text-lg px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Tətbiqi Yüklə
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToDownload}
                className="text-lg px-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Ətraflı Məlumat
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-primary-foreground/80">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-secondary mr-2">24s</span>
                <span className="text-sm">Sürətli Çatdırılma</span>
              </div>
              <div className="h-8 w-px bg-primary-foreground/30"></div>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-secondary mr-2">100%</span>
                <span className="text-sm">Məmnuniyyət</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative scale-110">
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

export default Hero;
