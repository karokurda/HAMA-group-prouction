import Navbar from '@components/home/Navbar'
import Container from '@components/layout/Container'
import Underline from '@components/Underline'
import useWindowSize from '@hooks/useWindowSize'

const Header = () => {
  const { lg } = useWindowSize()
  return (
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/shutterstock_227118130+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: lg ? 'left' : '-520px',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen"
    >
      <Container className="relative min-h-screen">
        <Navbar />

        <div className="absolute uppercase font-helvetica-black left-0 sm:mt-50 md:bottom-0 p-5 text-6xl">
          <h2>The right</h2>
          <h2>Channel</h2>
          <h2>For the</h2>
          <h2>Right Brand</h2>
          <Underline color="purple" />
        </div>
      </Container>
    </div>
  )
}

export default Header
