import ImageLoader from '@components/ImageLoader'
import { FC, useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { useHoverDirty } from 'react-use'
import Container from '../../layout/Container'
import Navbar from '../Navbar'

const Header: FC<{
  scrollToSecondSlide: () => void
}> = ({ scrollToSecondSlide }) => {
  const ref = useRef<HTMLDivElement>(null)
  const hovered = useHoverDirty(ref)

  const [loading, setLoading] = useState(true)

  return (
    <div
      style={{
        backgroundImage: 'url(/images/header-cover.jpg)',
        backgroundPosition: '40% top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="min-h-screen relative"
    >
      <ImageLoader
        setLoading={setLoading}
        alt="cover"
        img="/images/header-cover.jpg"
      />
      <Container>
        <Navbar />
      </Container>

      <div
        ref={ref}
        className="text-2xl font-helvetica-light tracking-wide select-none lg:text-5xl flex flex-col text-center items-center uppercase absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-primary-yellow-1"
        onClick={scrollToSecondSlide}
      >
        <p>For those who</p>
        <p>
          Want
          <span className="font-Helvetica-bold"> the best</span>
        </p>

        <TiArrowSortedDown
          className={`mt-2 duration-200 moving ${
            hovered ? 'translate-y-5' : ''
          }`}
        />
      </div>
    </div>
  )
}

export default Header
