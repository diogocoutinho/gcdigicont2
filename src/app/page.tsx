"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Plans from "@/components/Plans";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
