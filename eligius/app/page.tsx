import Image from 'next/image'

import Hero from "./components/landing/Hero"
import NavBar from "./components/landing/NavBar"
import Features from "./components/landing/Features"

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
    </main>
  )
}
