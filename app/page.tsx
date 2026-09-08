import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyRanvio } from "@/components/why-ranvio"
import { Process } from "@/components/process"
import { Results } from "@/components/results"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyRanvio />
        <Process />
        <Results />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
