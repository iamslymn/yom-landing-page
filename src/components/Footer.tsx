import yomLogoWhite from "@/assets/yom-logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <img src={yomLogoWhite} alt="Yom Logo" className="h-8 mb-4" />
            <p className="text-background/80 text-sm">
              Peşəkar camaşırxana və quru təmizləmə xidmətləri qapınıza çatdırılır.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Xidmətlər</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#services" className="hover:text-background transition-colors">Camaşırxana</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Quru Təmizləmə</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Ekspress Xidmət</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Planlaşdırılmış Götürmə</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Şirkət</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">Haqqımızda</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Əlaqə</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Karyera</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hüquqi</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Məxfilik Siyasəti</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Xidmət Şərtləri</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Kuki Siyasəti</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Yom. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
