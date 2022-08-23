import Container from '@components/layout/Container'

const Left = () => {
  return (
    <Container className="lg:w-1/2 min-h-screen w-full flex justify-center items-center">
      <div className="uppercase text-7xl font-helvetica-black font-extrabold w-full mx-auto max-w-[35rem]">
        <h2>Be</h2>
        <h2>A Brand</h2>
        <h2>That</h2>
        <h2>Inspires</h2>
        <h2>Action</h2>

        <div className="bg-primary-green-1 mt-6 h-[6px] w-10" />
      </div>
    </Container>
  )
}

export default Left
