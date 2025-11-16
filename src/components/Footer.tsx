import { Linkedin, Instagram } from "lucide-react";
import yomLogoWhite from "@/assets/yom-logo-white.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
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
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/yom-laundry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/yom.laundry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
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
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-background transition-colors text-left">
                  Haqqımızda
                </button>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background transition-colors">
                  Əlaqə
                </Link>
              </li>
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

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Yom. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
