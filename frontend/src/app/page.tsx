import Create from "@/components/homepage/Create";
import Customize from "@/components/homepage/Customize";
import Footer from "@/components/homepage/Footer";
import FrequentlyAskedQuestions from "@/components/homepage/FrequentlyAskedQuestions";
import Hero from "@/components/homepage/Hero";
import Share from "@/components/homepage/Share";
import Slogan from "@/components/homepage/Slogan";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Customize />
      <Create />
      <Share />
      <Slogan />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}
