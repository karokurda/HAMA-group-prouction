import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/crowd.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
      className="min-h-screen"
    >
      <Container>
        <div>
          <Navbar />

          <div className="absolute text-5xl lg:text-7xl font-helvetica-black font-extrabold text-white bottom-32">
            <h2>Ideas</h2>
            <h2>That</h2>
            <h2>Move</h2>
            <h2>People.</h2>

            <div className="h-[6px] w-10 bg-white mt-3" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
