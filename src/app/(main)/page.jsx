import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <About />
      <Reviews />
    </>
  )
}
