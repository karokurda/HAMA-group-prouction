import useWindowSize from '@hooks/useWindowSize'
import Link from 'next/link'
import { FC } from 'react'
import Container from '../../layout/Container'

const About: FC<{ divRef: any }> = ({ divRef }) => {
  const { xl } = useWindowSize()

  return (
    <div
      ref={divRef}
      style={{
        backgroundImage: xl ? 'url(/images/about-hama-cover.jpg)' : '',
        backgroundPosition: 'right',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-screen bg-center bg-primary-yellow-1"
    >
      <Container className="flex flex-col justify-center h-full">
        <div className="flex text-6xl text-primary-gray-1 flex-col justify-center">
          <h2>ABOUT</h2>
          <h2>HAMA Group</h2>
          <div className="h-[6px] w-10 mt-3 bg-primary-gray-1"></div>

          {/* <p className="text-2xl mt-10 md:w-2/3 lg:w-1/2 font-light font-helvetica-condensed">
            HAMA is designed to help business grow their brands through
            providing a high quality comprehensive service, from data to insight
            through execution and publishing
          </p> */}
          <p className="text-2xl mt-10 md:w-2/3 lg:w-1/2 font-light font-helvetica-condensed">
          HAMA Production, part of HAMA Group, is a full-service production company
           for high quality video and photo production, founded in 2006, 
          as the first production house in Iraq.
          </p>
        </div>

        <Link href={'/about'}>
          <a className="mt-10 px-10 w-max py-2 border-4 border-primary-gray-1 hover:bg-primary-gray-1 font-helvetica-condensed font-light text-lg rounded-sm duration-200 hover:text-white">
            See More
          </a>
        </Link>
      </Container>
    </div>
  )
}

export default About
