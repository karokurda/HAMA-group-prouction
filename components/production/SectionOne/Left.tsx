import Container from '../../layout/Container'

const Left = () => {
  return (
    <div className="bg-gray-100 w-full lg:w-5/12">
      <Container className="flex items-center justify-center min-h-screen">
        <div className="uppercase font-helvetica-black text-5xl lg:text-6xl font-extrabold flex flex-col gap-2">
          <h2>Our</h2>
          <h2>aim is</h2>
          <h2>to Create</h2>
          <h2>Successful</h2>
          <h2>Commercials</h2>
          <h2>With</h2>
          <h2>Artistic</h2>
          <h2>Value</h2>
          <div className="h-[6px] w-10 bg-primary-yellow-1 mt-5" />
        </div>
      </Container>
    </div>
  )
}

export default Left
