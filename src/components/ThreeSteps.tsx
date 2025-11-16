import { Smartphone, Clock, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Smartphone,
    title: "Tətbiqdən şifarişinizi edin",
    description: "Gününüzü rahat planlayın, götürülmə və çatdırılma tarixini özünüz seçin.",
  },
  {
    number: "2",
    icon: Clock,
    title: "Kuryeri gözləyin",
    description: "Siz qeyd etdiyiniz vaxtda kuryer qapınızda olacaqdır. Paltarlarınızı paketləyib sizdən təhvil alacağıq.",
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Rahatınızda qalın və çatdırılmanı gözləyin",
    description: "Paltarlarınızı təmizlədikdən sonra sifariş etdiyiniz qaydada, göstərdiyiniz tarixdə geri gətirəcəyik.",
  },
];

const ThreeSteps = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t-2 border-border/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Bu qədər rahatlıq cəmi 3 addımda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sifariş vermək heç vaxt bu qədər asan olmamışdı
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Card */}
                  <div className="relative h-full bg-background rounded-3xl p-8 border border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-bounce-in">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-12 w-12 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="flex justify-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-lg font-bold text-secondary-foreground">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
