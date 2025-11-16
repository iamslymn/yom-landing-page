import { Shirt, Droplet, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplet,
    title: "Quru təmizləmə",
    slogan: "Etibarlı şəkildə, ilk günkü kimi.",
  },
  {
    icon: Shirt,
    title: "Yuma",
    slogan: "Kiloqram ilə, xüsusi qayğı ilə.",
  },
  {
    icon: Wind,
    title: "Ütüləmə",
    slogan: "Ən şık görünəcək vəziyyətdə.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-blue-50 border-t-2 border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Xidmətlərimiz
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
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-16 w-16 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
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
