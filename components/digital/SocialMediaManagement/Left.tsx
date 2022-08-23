import Container from '../../layout/Container'
import Underline from '../../Underline'

const Left = () => {
  return (
    <Container className="min-h-screen flex items-center justify-center lg:w-5/12">
      <div className="w-full max-w-xl">
        <div className="text-4xl lg:text-6xl font-helvetica-black text-primary-blue-1 uppercase">
          <h2>Social Media</h2>
          <h2>Management</h2>
          <Underline color="blue" />
        </div>

        <div className="mt-5 text-lg font-light">
          <p>Managing your online interactions and content across social</p>
          <p>media channels like Facebook, Instagram, Twitter, LinkedIn,</p>
          <p>YouTube, and Vimeo. It goes beyond posting updates to your</p>
          <p>
            company&apos;s social media profiles. It also includes engaging with
          </p>
          <p>your audience </p>
        </div>

        <div className="text-5xl font-helvetica-black font-bold mt-10">
          <h2>We Plan, Initiate, </h2>
          <h2>and Engage.</h2>
        </div>
      </div>
    </Container>
  )
}

export default Left
