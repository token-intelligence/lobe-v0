import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Integrations />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
