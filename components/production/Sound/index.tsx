import { BsFullscreen } from 'react-icons/bs'
import Container from '../../layout/Container'
import Underline from '../../Underline'


const Sound = () => {
  return (
    <div className="bg-black" id="soundd">
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/bruno-cervera-408708-unsplash+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'full',
        
        
      }}
      className="h-[250px] md:min-h-screen "
    >
      
      {/* <Container className="min-h-screen flex flex-col justify-center">
        <h2 className="uppercase text-white font-extrabold font-helvetica-black text-6xl">
          Sound
        </h2>
        <Underline color="orange" />

        <p className="my-5 font-helvetica-black font-bold text-4xl text-white">
          Sound brings movement to life
        </p>

        <div className="text-white text-lg font-helvetica-light">
          <p className="mt-3">
            Having the best studio and the best sound engineers makes
          </p>
          <p>
            HAMA&apos;s production department the best in the country. We bring
          </p>

          <p>movement to life through recording, sound and music mixing.</p>
        </div>
      </Container> */}
    </div>
    <Container className="">
      <h1 className="uppercase text-4xl font-Helvetica-bold text-primary-orange-1 font-bold mt-5 " >Sound</h1>
      <Underline color="orange" />
      <div className="text-white text-lg font-helvetica-light">
          <p className="mt-3 xl:text-2xl my-5 ">
          Having the best studio and the best sound engineers makes HAMA’s 
          production department the best in the country.
           We bring movement to life through recording, sound and music mixing.</p>
        </div>
    </Container>
    </div>
  )
}

export default Sound
