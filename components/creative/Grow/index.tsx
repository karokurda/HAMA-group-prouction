import Underline from '@components/Underline'
import { Container } from '@mantine/core'

const Grow = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/creative/book.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex"
    >
      <Container className="w-1/2 min-h-screen mx-0 flex justify-center items-center">
        <div className="w-full max-w-lg font-helvetica-black uppercase text-7xl">
          <div className="text-primary-yellow-1">
            <h2>Click</h2>
            <h2>Here</h2>
            <h2>To</h2>
          </div>

          <div className="text-white uppercase">
            <h2>Grow</h2>
            <h2>Your</h2>
            <h2>Brand</h2>
            <h2>Today</h2>

            <Underline color="blue" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Grow
