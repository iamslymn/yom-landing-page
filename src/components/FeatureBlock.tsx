import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Sparkles, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeatureBlock = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Smartphone,
      title: t("features.online.title"),
      description: t("features.online.description"),
    },
    {
      icon: Sparkles,
      title: t("features.professional.title"),
      description: t("features.professional.description"),
    },
    {
      icon: Truck,
      title: t("features.delivery.title"),
      description: t("features.delivery.description"),
    },
  ];

  return (
    <section className="py-16 bg-blue-50 border-t-2 border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-normal text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
