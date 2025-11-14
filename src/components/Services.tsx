import { Shirt, Droplet, Wind, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shirt,
    title: "Camaşırxana Xidməti",
    description: "Gündəlik paltarlarınızın peşəkar yuma, qurutma və bükülməsi qayğı və diqqətlə həyata keçirilir.",
  },
  {
    icon: Droplet,
    title: "Quru Təmizləmə",
    description: "Zərif parçalar, rəsmi geyimlər və xüsusi paltarlar üçün ekoloji təmiz məhlullarla mütəxəssis quru təmizləmə.",
  },
  {
    icon: Wind,
    title: "Ekspress Xidmət",
    description: "Tez lazımdır? Ekspress xidmətimiz təmiz paltarlarınızı 24 saat ərzində çatdırır.",
  },
  {
    icon: Clock,
    title: "Planlaşdırılmış Götürmə",
    description: "Sizin cədvəlinizə uyğun çevik götürmə və çatdırılma vaxtları. Təyin edin və unudun.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Xidmətlərimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gündəlik camaşırxanadan tutmuş ixtisaslaşdırılmış quru təmizləməyə qədər, peşəkar qayğı ilə sizə xidmət edirik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
