import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'
import Underline from '../../Underline'

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/digital/header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen"
    >
      <Container className="min-h-screen relative">
        <Navbar />

        <div className="absolute font-helvetica-black uppercase text-7xl font-extrabold bottom-20">
          <p>Take</p>
          <h2>Your</h2>
          <h2>Brand</h2>
          <h2>To the</h2>
          <h2>New Age</h2>

          <Underline color="blue" />
        </div>
      </Container>
    </div>
  )
}

export default Header
