import Container from '../../layout/Container'
import Underline from '../../Underline'

const Left = () => {
  return (
    <Container className="bg-primary-blue-1 min-h-screen w-full lg:w-5/12 flex justify-center items-center">
      <div className="w-full max-w-xl">
        <div className="text-white font-helvetica-black font-bold text-6xl uppercase">
          <h2>Digital media</h2>
          <h2>Monitoring</h2>
          <Underline color="white" />
        </div>
        <div className="mt-5 text-white text-xl font-helvetica-light">
          <p>Digital media monitoring: identifying and determining what is</p>
          <p>being said about your brand or product through different social</p>
          <p>
            and online channels. We give you a glimpse into what&apos;s being
          </p>
          <p>
            said about your brand in real time, gathering publicly available
          </p>
          <p>
            data and insights, and organizing it in a way that works to your
          </p>
          <p>advantage.</p>
        </div>

        <div className="font-bold font-helvetica-black text-5xl text-white mt-5">
          <h2>Monitor</h2>
          <h2>and Evaluate.</h2>
        </div>
      </div>
    </Container>
  )
}

export default Left
