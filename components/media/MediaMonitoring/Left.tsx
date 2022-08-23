import Container from '../../layout/Container'
import Underline from '../../Underline'

const Left = () => {
  return (
    <div className="bg-primary-purple-1 w-full lg:w-1/2 min-h-screen">
      <Container className="min-h-screen flex items-center justify-center">
        <div className="text-white uppercase font-helvetica-black text-5xl font-bold w-full max-w-xl">
          <h2>Media</h2>
          <h2>Monitoring</h2>
          <h2>Services</h2>
          <Underline color="white" />
        </div>
      </Container>
    </div>
  )
}

export default Left
