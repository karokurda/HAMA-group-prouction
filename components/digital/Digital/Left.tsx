import Image from 'next/image'
import Container from '../../layout/Container'
import Underline from '../../Underline'

const Left = () => {
  return (
    <div className="lg:w-5/12 min-h-screen bg-primary-blue-1 text-white">
      <Container className="flex justify-center items-center min-h-screen">
        <div className="text-3xl flex flex-col items-center">
          <Image
            width={50}
            height={50}
            src="/images/digital/click.png"
            alt="Click"
          />
          <h2 className="mt-2 text-center uppercase font-helvetica-bold font-bold">
            Digital
          </h2>

          <Underline className="mt-5" color="white" />
        </div>
      </Container>
    </div>
  )
}

export default Left
