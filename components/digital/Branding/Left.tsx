import Container from '../../layout/Container'
import Underline from '../../Underline'

const Left = () => {
  return (
    <Container className="lg:w-1/2 flex justify-center items-end">
      <div className="w-full lg:mb-40 max-w-xl">
        <h2 className="uppercase text-primary-blue-1 text-6xl font-helvetica-black">
          Branding
        </h2>
        <Underline color="blue" />

        <div className="text-white text-xl">
          <p className="mt-3">
            We&apos;re all about establishing your brand&apos;s story and
            presence in
          </p>
          <p>
            the digital space. Digital branding is the key to establishing a
          </p>
          <p>meaningful connection with your target audience. We use a</p>
          <p>unique proposition to differentiate your business and your</p>
          <p>offerings from the competition.</p>
        </div>
      </div>
    </Container>
  )
}

export default Left
