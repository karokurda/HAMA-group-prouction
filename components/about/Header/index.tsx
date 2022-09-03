import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'
import Underline from '../../Underline'

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/about/house.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
      className="min-h-screen relative"
    >
      <Container>
        <Navbar />

        <div className="flex flex-col text-7xl font-extrabold font-helvetica-black uppercase text-white absolute lg:bottom-32 bottom-12">
          <h1>
            <span className="block">Eye for</span>
            <span>Beauty</span>
          </h1>
          <Underline color="yellow" />
        </div>
      </Container>
      <p
        style={{
          zIndex: 9999,
        }}
        className="text-xs mt-10 font-helvetica-light select-none absolute right-1 bottom-1  text-white"
      >
        Rawen Pasha
      </p>
    </div>
  )
}

export default Header
