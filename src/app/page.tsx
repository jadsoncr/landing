import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { Problems } from "@/components/marketing/problems";
import { Services } from "@/components/marketing/services";
import { Segments } from "@/components/marketing/segments";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Evidence } from "@/components/marketing/evidence";
import { Footer } from "@/components/marketing/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Problems />
      <Services />
      <Segments />
      <HowItWorks />
      <Evidence />
      <Footer />
    </>
  );
}
