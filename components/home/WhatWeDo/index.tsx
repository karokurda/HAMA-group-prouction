import Container from '@components/layout/Container'
import Underline from '@components/Underline'
import useWindowSize from '@hooks/useWindowSize'
import Link from 'next/link'

const WhatWeDo = () => {
  const { lg, md } = useWindowSize()

  return (
    <div
      style={{
        backgroundImage: 'url(/images/what-we-do.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: lg ? 'center' : '-130px',
      }}
      className="min-h-screen relative overflow-hidden"
    >
      <Container className="min-h-screen w-full flex">
        <div
          style={{
            zIndex: 99,
          }}
          className="mt-60"
        >
          <div className="text-white uppercase text-7xl font-bold font-helvetica-black">
            <h2>What</h2>
            <h2>We Do</h2>
            <Underline color="white" />
          </div>
          <div
            style={{
              zIndex: 999,
            }}
            className="mt-5 text-4xl flex flex-col gap-2"
          >
            <Link href="/production">
              <a>
                <div
                  className={`p-4 z-10 uppercase hover:bg-white text-black hover:text-primary-yellow-1 font-bold font-helvetica-black duration-100 cursor-pointer`}
                >
                  Production
                </div>
              </a>
            </Link>
            <Link href="/media">
              <a>
                <div
                  className={`p-4 uppercase hover:bg-white text-black hover:text-primary-yellow-1 font-bold font-helvetica-black duration-100 cursor-pointer`}
                >
                  Media
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Container>

      {!md && (
        <img
          className="absolute -bottom-72 -right-10"
          src="/images/vector.png"
          alt="hama group lines"
        />
      )}
    </div>
  )
}

export default WhatWeDo
