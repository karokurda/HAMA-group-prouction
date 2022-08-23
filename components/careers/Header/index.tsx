import useWindowSize from '@hooks/useWindowSize'
import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'

const Header = () => {
  const { lg } = useWindowSize()

  return (
    <div
      style={{
        backgroundImage: 'url(/images/careers/header.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: lg ? 'center' : '-200px',
      }}
      className="min-h-screen"
    >
      <Container className="relative min-h-screen">
        <Navbar />

        <div className="absolute uppercase bottom-24 text-7xl font-extrabold font-helvetica-black">
          <h2>Be</h2>
          <h2>More</h2>
          <div className="h-[6px] w-10 bg-primary-yellow-1 mt-3" />
        </div>
      </Container>
    </div>
  )
}

export default Header
