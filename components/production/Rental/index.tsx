import Container from '../../layout/Container'
import Underline from '../../Underline'

const Rental = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/production/camera.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen"
    >
      <Container className="flex flex-col justify-center min-h-screen">
        <h2 className="uppercase mt-52 font-helvetica-black text-6xl text-primary-orange-1 font-extrabold">
          Rental
        </h2>
        <Underline color="orange" />

        <div className="text-white text-xl font-helvetica-light">
          <p className="mt-3">
            As we use the best equipment to produce the best outcomes, our
          </p>
          <p>rental service allows state of the equipment technology to be</p>
          <p>accessible for any project.</p>
        </div>

        <button className="px-9 py-4 hover:bg-white duration-200 hover:text-black mt-5 border-4 text-white border-white font-bold text-xl lg:text-3xl uppercase w-max">
          See our equipment list
        </button>
      </Container>
    </div>
  )
}

export default Rental
