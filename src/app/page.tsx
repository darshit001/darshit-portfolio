import ClientWrapper from "@/components/layout/ClientWrapper";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <ClientWrapper>
      <Navbar />
      <main className="flex flex-col w-full relative">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="experience" className="bg-midnight relative z-10"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="education" className="bg-midnight relative z-10"><Education /></div>
        <div id="skills"><Skills /></div>
        <div id="contact" className="bg-midnight relative z-10"><Contact /></div>
      </main>
      <Chatbot />
    </ClientWrapper>
  );
}
