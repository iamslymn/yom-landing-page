import { Shirt, Droplet, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Droplet,
      title: t("services.dryCleaning.title"),
      slogan: t("services.dryCleaning.slogan"),
    },
    {
      icon: Shirt,
      title: t("services.washing.title"),
      slogan: t("services.washing.slogan"),
    },
    {
      icon: Wind,
      title: t("services.ironing.title"),
      slogan: t("services.ironing.slogan"),
    },
  ];

  return (
    <section id="services" className="py-16 bg-blue-50 border-t-2 border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-12 w-12 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-normal">
                    {service.slogan}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
