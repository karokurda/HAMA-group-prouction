import useWindowSize from '@hooks/useWindowSize'
import Container from '../../layout/Container'

const SectionThree = () => {
  const { lg } = useWindowSize()

  return (
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/HAMA+Advertising+01473+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: lg ? 'center' : '700px',
      }}
    >
      <Container className="min-h-screen relative">
        <div className="absolute hidden font-helvetica-black text-6xl font-extrabold lg:flex flex-col gap-2 uppercase text-white bottom-10">
          <h2>Always</h2>
          <h2>Look</h2>
          <h2>Forward</h2>

          <div className="h-[6px] w-10 bg-white mt-5" />
        </div>

        <div className="absolute grid gap-10 right-32 font-medium bottom-0 bg-white p-8 max-w-xl text-sm lg:text-lg">
          <div>
            <p>
              Our team and our work are continuously growing. We always are
              looking to create work with high production value.
            </p>
            <div className="h-[6px] w-10 bg-primary-orange-1 mt-3" />
          </div>

          <div>
            <p>
              We continue to raise our standards and enhance the quality of our
              work through meaningful cooperation with our clients.
            </p>

            <div className="h-[6px] w-10 bg-primary-orange-1 mt-3" />
          </div>

          <div>
            <p>
              With extensive experience combined with talent and vision, our
              people can bring any idea to life, and if needed we will look
              beyond national borders bring in international expertise to grow
              and serve our clients.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SectionThree
