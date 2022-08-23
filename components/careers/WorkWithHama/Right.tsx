import Link from 'next/link'
import { useRef } from 'react'
import { useHoverDirty } from 'react-use'
import Container from '../../layout/Container'

const Right = () => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  return (
    <div
      style={{
        backgroundImage: 'url(/images/careers/green-screen.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="lg:w-1/2 min-h-screen"
    >
      <Link href={'/careers/form'}>
        <a>
          <Container className="flex justify-center items-center mt-60 lg:mt-0 h-full">
            <div
              ref={ref}
              className={`border-8 border-white lg:p-32 text-6xl lg:py-44 duration-200 cursor-pointer select-none py-24 px-10 font-extrabold text-white ${
                hovered ? '' : ''
              }`}
            >
              <h2>Casting</h2>
              <h2>Form</h2>
              <div
                className={`h-[6px] duration-200 bg-white mt-2 ${
                  hovered ? 'w-20' : 'w-10'
                }`}
              />
            </div>
          </Container>
        </a>
      </Link>
    </div>
  )
}

export default Right
