import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import References from "@/components/References"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
