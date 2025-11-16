import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import yomLogoWhite from "@/assets/yom-logo-white.svg";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <button onClick={handleLogoClick} className="cursor-pointer">
              <img src={yomLogoWhite} alt="Yom Logo" className="h-8 mb-4" />
            </button>
            <p className="text-background/80 text-sm mb-4">
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
              <li><a href="#faq" className="hover:text-background transition-colors">Əlaqə</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hüquqi</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/privacy" className="hover:text-background transition-colors">Məxfilik Siyasəti</Link></li>
              <li><Link to="/terms" className="hover:text-background transition-colors">Xidmət Şərtləri</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Əlaqə Məlumatları</h3>
              <ul className="space-y-3 text-sm text-background/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Azərbaycan, Bakı şəhəri, Əcəmi Naxçıvani 103, AZ1108</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:+994517155751" className="hover:text-background transition-colors">
                    +994 51 715 57 51
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:hello@yom.az" className="hover:text-background transition-colors">
                    hello@yom.az
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sosial Mediada YOM</h3>
              <ul className="space-y-3 text-sm text-background/80">
                <li>
                  <a
                    href="https://www.linkedin.com/company/yom-laundry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-background transition-colors"
                  >
                    <Linkedin className="h-5 w-5 flex-shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yom.laundry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-background transition-colors"
                  >
                    <Instagram className="h-5 w-5 flex-shrink-0" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
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
