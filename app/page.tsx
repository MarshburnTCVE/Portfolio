import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Footer />
      <BackToTop />
    </main>
  );
}
