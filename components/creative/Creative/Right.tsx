import Container from '../../layout/Container'

const Right = () => {
  return (
    <div className="lg:w-1/2 w-full min-h-screen flex items-center justify-center">
      <Container className="text-5xl font-extrabold font-helvetica-black">
        <h2>We create core brand strategies,</h2>
        <h2>while crafting clear, consistent,</h2>
        <h2>and memorable campaigns.</h2>

        <div className="mt-8 bg-primary-green-1 h-[6px] w-10" />
      </Container>
    </div>
  )
}

export default Right
