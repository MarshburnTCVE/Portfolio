import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
      <BackToTop />
    </main>
  );
}
