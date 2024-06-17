import Image from "next/image";
import Hero from "@/components/Hero"
import Cards from "@/components/Cards"
import Education from "@/components/Education"
import Blogs from "@/components/Blogs"
import Footer from "@/components/Footer";
import About from "@/components/About";
import Experience from "@/components/Experience"
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <Hero />
      <About />
      <Education />
      <Cards />
      <Experience />
      <Blogs />
      <Footer />
    </main>
  );
}
