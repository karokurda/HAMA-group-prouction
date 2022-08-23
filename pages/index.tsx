import type { NextPage } from 'next'
import About from '@components/home/About'
import Clients from '@components/home/Clients'
import HomeFooter from '@components/home/Footer'
import Header from '@components/home/Header'
import Works from '@components/Works'
import WhatWeDo from '@components/home/WhatWeDo'
import Meta from '@components/Meta'
import { useRef } from 'react'

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)

const Home: NextPage = () => {
  const scrollToSecondSlide = () => {
    scrollToRef(secondSlideRef)
  }

  const secondSlideRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Meta
        pageTitle="HAMA Production"
        description="The best production and advertising company in all of Iraq and Kurdistan Award winning most creative agency"
      />
      <div className="overflow-hidden">
        <Header scrollToSecondSlide={scrollToSecondSlide} />
        <About divRef={secondSlideRef} />
        <WhatWeDo />
        <Works />
        <Clients />
        <HomeFooter />
      </div>
    </>
  )
}

export default Home
