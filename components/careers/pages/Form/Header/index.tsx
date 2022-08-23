import Navbar from '../../../../home/Navbar'
import Container from '../../../../layout/Container'

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/careers/green-screen.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen"
    >
      <Container>
        <div>
          <Navbar />

          <div className="absolute font-helvetica-black uppercase bottom-20 text-7xl text-white font-extrabold">
            <h2>Be</h2>
            <h2>Hama&apos;s</h2>
            <h2>Next</h2>
            <h2>Star</h2>
            <div className="mt-4 w-10 h-[6px] bg-white" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
