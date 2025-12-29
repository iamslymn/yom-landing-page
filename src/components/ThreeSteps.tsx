import { useLanguage } from "@/contexts/LanguageContext";

const ThreeSteps = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      number: "2",
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      number: "3",
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
  ];

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden border-t-2 border-border/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
            {t("steps.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-normal">
            {t("steps.subtitle")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Card */}
                  <div className="relative h-full bg-background rounded-3xl p-6 border border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-bounce-in">
                    {/* Step Number */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#4ca8f8' }}>
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-normal">
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
