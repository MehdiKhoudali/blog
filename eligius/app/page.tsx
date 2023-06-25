import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";

import Head from "next/head"

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Features />
        <Pricing />
      </main>
    </>
  )
}
