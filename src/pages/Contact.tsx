import { useEffect } from "react";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">{t("contact.title")}</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <p className="text-muted-foreground text-lg">
            {t("contact.description")}
          </p>

          {/* Contact Information */}
          <section className="bg-muted/50 rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{t("contact.info")}</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.address")}</h3>
                  <p className="text-muted-foreground">
                    Azərbaycan, Bakı şəhəri, Əcəmi Naxçıvani 103, AZ1108
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                  <a 
                    href="tel:+994517155751" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +994 51 715 57 51
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                  <a 
                    href="mailto:hello@yom.az" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@yom.az
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">{t("contact.social")}</h2>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/company/yom-laundry/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-muted transition-colors group"
              >
                <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.followLinkedIn")}</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/yom.laundry/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-muted transition-colors group"
              >
                <Instagram className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.followInstagram")}</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
