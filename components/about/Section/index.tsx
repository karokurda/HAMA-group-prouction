import Container from '../../layout/Container'

const Section = () => {
  return (
    <div className="bg-primary-gray-1 py-20">
      <Container>
        <p className="text-3xl tracking-widest lg:text-4xl lg:w-10/12 text-primary-yellow-1 font-Helvetica-bold">
          The group is organized to serve its clients through local talent with
          extensive and international experience.
        </p>

        <h2 className="text-2xl lg:text-[38px] mt-20 text-white font-bold font-Helvetica-bold">
          We work with our clients&apos; needs at the center of our
          organization.
        </h2>
      </Container>
    </div>
  )
}

export default Section
