import useWindowSize from '@hooks/useWindowSize'
import Container from '../../layout/Container'
import HamaLogo from '../../layout/HamaLogo'
import Underline from '../../Underline'

const About = () => {
  const { lg } = useWindowSize()

  return (
    <div
      style={{
        backgroundImage: lg
          ? 'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/DSC03261-Edit+copy.jpg)'
          : 'url(/images/yellow-cover-1.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="min-w-screen sm:min-h-screen font-helvetica-condensed"
    >
      <Container className="flex items-center">
        <div className="lg:w-1/2" />
        <div className="lg:w-1/2 flex items-center lg:mt-40 my-10">
          <div className="w-full">
            <HamaLogo className="-ml-3" color="black" />

            <h2 className="text-3xl mt-10 text-primary-gray-1">
              About <span className="uppercase font-extrabold">Hama</span>
              <Underline color="black" className="rounded-sm" />
            </h2>

            <div className="mt-10 text-xl lg:text-2xl text-primary-gray-1 flex flex-col gap-2">
              <p>
              HAMA Production, part of HAMA Group, is a full-service production
               company for high quality video and photo production, founded in 
               2006, as the first production house in Iraq. HAMA Production has
                produced some of the most iconic TV Commercials and advertisements 
                across Iraq with an extensive portfolio of 
              recognizable and successful campaigns in the Kurdistan Region and Iraq.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
