import Container from '../../layout/Container'
import Underline from '../../Underline'

const Left = () => {
  return (
    <Container className="flex items-center justify-center lg:w-5/12 min-h-screen">
      <div className="font-bold uppercase w-full text-4xl xl:text-6xl font-helvetica-black max-w-sm">
        <h2>Prepare</h2>
        <h2>For your</h2>
        <h2>Transformation</h2>
        <Underline color="blue" />
      </div>
    </Container>
  )
}

export default Left
