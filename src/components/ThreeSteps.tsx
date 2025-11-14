import { Smartphone, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Smartphone,
    title: "Tətbiqdən şifarişinizi edin",
    description: "Gününüzü rahat planlayın, götürülmə və çatdırılma tarixini özünüz seçin.",
    subtitle: "tam online, həm axşam, həm də həftəsonu uyğundur",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    number: "2",
    icon: Clock,
    title: "Kuryeri gözləyin",
    description: "Siz qeyd etdiyiniz vaxtda kuryer qapınızda olacaqdır. Paltarlarınızı paketləyib sizdən təhvil alacağıq.",
    subtitle: "xüsusi paketləmə ilə təhvil-təslim",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600",
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Rahatınızda qalın və çatdırılmanı gözləyin",
    description: "Paltarlarınızı təmizlədikdən sonra sifariş etdiyiniz qaydada, göstərdiyiniz tarixdə geri gətirəcəyik.",
    subtitle: "statusu canlı izləyin",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
];

const ThreeSteps = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
              3 Sadə Addım
            </span>
          </div>
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
                  <div className="relative h-full bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-bounce-in">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                    
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div className={`w-20 h-20 rounded-2xl ${step.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <IconComponent className={`h-10 w-10 ${step.iconColor} relative z-10 group-hover:rotate-12 transition-transform duration-300`} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-medium animate-pulse-glow">
                          <span className="text-sm font-bold text-secondary-foreground">{step.number}</span>
                        </div>
                      </div>
                      
                      {/* Arrow Indicator (hidden on last item) */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block text-muted-foreground/30 group-hover:text-primary transition-colors">
                          <ArrowRight className="h-8 w-8 animate-slide-in-scale" style={{ animationDelay: `${index * 0.2 + 0.3}s` }} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-sm font-medium text-primary/80 italic">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 border-2 border-primary/20 rounded-lg rotate-45"></div>
                    </div>
                  </div>

                  {/* Connecting Line (Desktop only, between cards) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <CheckCircle2 className="h-5 w-5 text-primary animate-pulse-glow" />
              <span className="text-sm font-semibold text-foreground">
                Bütün addımlar tam online və rahatdır
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
