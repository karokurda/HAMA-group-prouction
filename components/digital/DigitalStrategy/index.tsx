import Container from '../../layout/Container'
import Underline from '../../Underline'

const DigitalStrategy = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/digital/digital-strategy.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="min-h-screen flex"
    >
      <Container className="lg:w-1/2 flex items-center justify-center">
        <div>
          <div className="text-5xl lg:text-6xl font-helvetica-black font-bold text-primary-blue-1 uppercase">
            <h2>Digital</h2>
            <h2>Strategy</h2>
            <Underline color="blue" />
          </div>

          <div className="mt-5 text-white">
            <p>
              We begin our strategic planning by taking your business goals,
            </p>
            <p>strengths, challenges and more as we get to know your company</p>
            <p>inside and out into account. Then we come up with a result-</p>
            <p>oriented plan that will maximize the returns of your online</p>
            <p>investments.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <h2>With better built strategies,</h2>
            <h2>sit back and see the difference.</h2>
          </div>
        </div>
      </Container>
      <div className="w-1/2" />
    </div>
  )
}

export default DigitalStrategy
