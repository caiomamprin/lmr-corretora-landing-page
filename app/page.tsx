import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Stats } from "@/components/stats"
import { Benefits } from "@/components/benefits"
import { Partners } from "@/components/partners"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <Benefits />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}
