import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import yomLogoBlue from "@/assets/yom-logo-blue.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

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
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = (lang: "az" | "en") => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="cursor-pointer">
              <img src={yomLogoBlue} alt="Yom Logo" className="h-8" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.about")}
            </button>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.contact")}
            </Link>
            <Button onClick={() => scrollToSection("download")}>{t("nav.download")}</Button>
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                <span className="text-lg">{language === "az" ? "🇦🇿" : "🇬🇧"}</span>
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => toggleLanguage("az")}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors ${language === "az" ? "bg-muted" : ""}`}
                  >
                    <span className="text-lg">🇦🇿</span>
                    <span className="text-sm font-medium">Azərbaycan</span>
                  </button>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors ${language === "en" ? "bg-muted" : ""}`}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span className="text-sm font-medium">English</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors"
              >
                <span className="text-lg">{language === "az" ? "🇦🇿" : "🇬🇧"}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => toggleLanguage("az")}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors ${language === "az" ? "bg-muted" : ""}`}
                  >
                    <span className="text-lg">🇦🇿</span>
                    <span className="text-sm font-medium">AZ</span>
                  </button>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors ${language === "en" ? "bg-muted" : ""}`}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span className="text-sm font-medium">EN</span>
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              {t("nav.about")}
            </button>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              {t("nav.contact")}
            </Link>
            <Button onClick={() => scrollToSection("download")} className="w-full">
              {t("nav.download")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
