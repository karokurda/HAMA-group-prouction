import Container from '../../layout/Container'
import Underline from '../../Underline'

const Right = () => {
  return (
    <Container className="flex justify-center lg:w-7/12 font-helvetica-black min-h-screen items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
      <div className="w-full max-w-2xl">
        <p>We live in a digital age that has</p>
        <p>opened various forms of</p>
        <p>communication opportunities,</p>
        <p>making it easier for businesses</p>
        <p>to reach their target audience.</p>
        <p>Our digital practice is a</p>
        <p>marketing practice, focuesd on</p>

        <Underline color="blue" />
      </div>
    </Container>
  )
}

export default Right
