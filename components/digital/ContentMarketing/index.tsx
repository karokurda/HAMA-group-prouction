import Container from '../../layout/Container'
import Underline from '../../Underline'

const ContentMarketing = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/digital/content-marketing.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="min-h-screen flex"
    >
      <div className="lg:w-1/2 hidden lg:flex"></div>

      <Container className="flex justify-start items-center">
        <div className="lg:p-20 p-10 py-12 lg:py-24 bg-white">
          <div className="text-4xl font-helvetica-black lg:text-6xl font-bold text-primary-blue-1 uppercase">
            <h2>Content</h2>
            <h2>Marketing</h2>
            <Underline color="blue" />
          </div>

          <div className="mt-5">
            <p>We believe in the power of content, and we help your clients</p>
            <p>
              identify, engage and build strong relationships with customers
            </p>
            <p>through it. Regardless of the medium on any distribution</p>
            <p>
              platform, there&apos;s always going to be a content solution that
              can
            </p>
            <p>initiate increased engagement and performance for your brand.</p>
          </div>

          <div className="mt-5 font-bold font-helvetica-black text-3xl lg:text-5xl">
            <h2>Strong content.</h2>
            <h2>Strong business</h2>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContentMarketing
