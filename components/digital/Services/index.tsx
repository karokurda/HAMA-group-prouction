import Container from '../../layout/Container'
import Underline from '../../Underline'

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/digital/services.jpeg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="min-h-screen flex relative"
    >
      <Container className="lg:w-5/12 w-full text-2xl lg:text-4xl flex font-Helvetica-bold font-bold text-white justify-center items-center min-h-screen">
        <div>
          <p>We grab a brand&apos;s strategy and</p>
          <p>activate it across the social</p>
          <p>landscape, delivering online</p>
          <p>presense and valueable</p>
          <p>experiences for audiences. We</p>
          <p>create deliberate actions and</p>
          <p>responses to manage a brand&apos;s</p>
          <p>narrative.</p>
          <Underline color="blue" className="mt-1" />
        </div>
        <div className="absolute w-full lg:w-5/12 p-10 font-bold px-5 lg:px-32 uppercase bottom-0 bg-primary-blue-1">
          <h2 className="text-2xl lg:text-4xl text-white">Our services</h2>
          <Underline color="white" />
        </div>
      </Container>
      <div className="lg:w-1/2 hidden lg:flex" />
    </div>
  )
}

export default Services
