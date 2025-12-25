import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBlock from "@/components/FeatureBlock";
import ThreeSteps from "@/components/ThreeSteps";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureBlock />
      <ThreeSteps />
      <Services />
      <About />
      <FAQ />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
