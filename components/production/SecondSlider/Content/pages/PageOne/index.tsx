import Container from '@components/layout/Container'
import Underline from '@components/Underline'
import useWindowSize from '@hooks/useWindowSize'
import { FC } from 'react'

const PageOne: FC = () => {
  const { lg } = useWindowSize()

  return (
    <div className="bg-black min" id="photo">
     
    <div
      style={{
        backgroundImage:
        'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/IMG_9542+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'full',
        
        
      }}
      className="h-[250px] md:min-h-screen "
    >
      {/* <Container className="pt-40">
        <div className="text-4xl lg:text-6xl font-helvetica-black font-bold uppercase">
          <h2>Photography</h2>
          <Underline color="white" />
        </div>

        <div className="mt-5 text-2xl lg:text-4xl font-helvetica-black font-bold">
          <p>Capturing beauty is something </p>
          <p>that HAMA Production team is really</p>
          <p>passionate about.</p>
        </div>

        <div className="mt-10">
          <p>The best photographers in the country work with us to seize the</p>
          <p>moments that need to be kept forever. We provide photography</p>
          <p>services for service brand.</p>
        </div>
      </Container> */}
    </div>
    <Container className="">
      <h2 className="uppercase text-4xl font-Helvetica-bold text-primary-orange-1 font-bold mt-5" >Photography</h2>
      <Underline color="orange" />
      <div className="text-white text-lg font-helvetica-light xl:text-2xl">
      <div className="mt-5  font-helvetic-black ">
          <p>Capturing beauty is something that the HAMA Production team is really
            passionate about. The best photographers in the country work with us
             to seize the moments that need to be kept forever.
             We provide photography services for service brand</p>
        </div>
        {/* <div className="">
          <p>The best photographers in the country work with us to seize the
          moments that need to be kept forever. We provide photography
          services for service brand.</p>
        </div> */}

        </div>
    </Container>
    </div>
  )
}

export default PageOne
