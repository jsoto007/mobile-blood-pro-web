import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <CallToAction />
      <Reviews />
    </>
  )
}
