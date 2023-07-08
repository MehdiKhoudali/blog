import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
import UseCases from "./sections/UseCases";

import Head from "next/head"

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Features />
        <UseCases />
        <Cta />
        <Footer />
      </main>
    </>
  )
}
