import { AccordionLayout } from './components/Accordion/Accordion'
import { CarouselLayout } from './components/Carousel/Carousel'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Information } from './components/Information/Information'
import { Nav } from './components/Nav/Nav'

import { CallToAction } from './components/callToAction/CallToAction'

export function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Information />
      <CallToAction />
      <CarouselLayout />
      <AccordionLayout />
      <Footer />
    </>
  )
}


