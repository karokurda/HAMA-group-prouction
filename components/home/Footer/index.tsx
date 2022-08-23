import Container from '../../layout/Container'
import Banner from './Banner'
import Footer from '../../layout/Footer'

const HomeFooter = () => {
  return (
    <div className="min-h-screen bg-primary-gray-1">
      <div
        style={{
          backgroundImage: 'url(/images/join-team-cover.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="h-[500px]"
      >
        <Container className="flex justify-center items-center">
          <Banner />
        </Container>
      </div>

      <Footer />
    </div>
  )
}

export default HomeFooter
