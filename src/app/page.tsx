import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { Results } from "@/components/marketing/results";
import { Problems } from "@/components/marketing/problems";
import { Services } from "@/components/marketing/services";
import { Segments } from "@/components/marketing/segments";
import { Cases } from "@/components/marketing/cases";
import { CsCx } from "@/components/marketing/cs-cx";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Evidence } from "@/components/marketing/evidence";
import { Footer } from "@/components/marketing/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Results />
      <Problems />
      <Services />
      <Segments />
      <Cases />
      <CsCx />
      <HowItWorks />
      <Evidence />
      <Footer />
    </>
  );
}
