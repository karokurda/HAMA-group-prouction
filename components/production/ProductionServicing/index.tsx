import useWindowSize from '@hooks/useWindowSize'
import Container from '../../layout/Container'

const ProductionServicing = () => {
  const { lg } = useWindowSize()

  return (
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/Production_Abdul+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: lg ? 'center' : '-130px',
      }}
    >
      <Container className="min-h-screen relative">
        <div className="absolute uppercase bottom-0 bg-white p-4 lg:p-8 max-w-lg">
          <div className="text-4xl lg:text-6xl font-helvetica-black font-extrabold text-primary-orange-1">
            <h2>Production</h2>
            <h2>Servicing</h2>
          </div>
          <div className="mt-3 bg-primary-orange-1 h-[6px] w-10" />

          <p className="my-10 font-extrabold font-helvetica-black text-2xl lg:text-3xl">
            Do you have a video production project in Iraq?
          </p>

          <p className="text-lg">
            Our team of expert will support you to excel in your Video, Film, or
            Documentary shoot.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default ProductionServicing
