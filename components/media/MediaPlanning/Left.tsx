import Container from '../../layout/Container'
import Underline from '../../Underline'

const Left = () => {
  return (
    <Container className="min-h-screen lg:w-1/2 flex justify-center items-center">
      <div className="mt-32 w-full max-w-xl">
        <div className="uppercase font-helvetica-black font-bold text-5xl">
          <h2>Media planning</h2>
          <h2>and buying</h2>
          <Underline color="purple" />
        </div>

        <div className="text-4xl mt-5 font-bold font-Helvetica-bold text-primary-purple-1 flex flex-col gap-2">
          <h2>In providing market research,</h2>
          <h2>strategic planning and</h2>
          <h2>securing the best rates for any</h2>
          <h2>ad, we have the best tools to</h2>
          <h2>effectively get your marketing</h2>
          <h2>message into the right hands of</h2>
          <h2>your customers.</h2>
        </div>
      </div>
    </Container>
  )
}

export default Left
