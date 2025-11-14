import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Sparkles, Truck } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Tam online sifariş",
    description: "Sizə uyğun vaxtda paltarlarınızı hazırlayın və mobil tətbiq üzərindən bizi çağırın.",
  },
  {
    icon: Sparkles,
    title: "Professional təmizləmə, qayğı ilə",
    description: "Təmizlənmə nəticələrinə şəxsən nəzarət edirik, özü də sizə ən yaxın məntəqədə.",
  },
  {
    icon: Truck,
    title: "Qapıya çatdırılma",
    description: "Dəyərli vaxtınıza qənaət edin. Biz isə təmiz paltarlarınızı birbaşa qapınıza çatdırarıq.",
  },
];

const FeatureBlock = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto">
            Vaxtınız özünüzə qalsın. Camaşırxana işlərinizi isə bizə həvalə edin.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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
