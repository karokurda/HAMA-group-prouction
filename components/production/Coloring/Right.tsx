import Container from '../../layout/Container'

const Right = () => {
  return (
    <Container className="w-full min-h-screen lg:w-1/2 bg-primary-orange-1 flex items-center justify-center">
      <div className="w-full max-w-xl">
        <h2 className="text-6xl font-bold text-black font-helvetica-black uppercase">
          Coloring
        </h2>
        <div className="h-[6px] w-10 bg-black mt-3" />

        <p className="mt-6 text-2xl text-white">
          Artists make reality look better, our talents color ads that are
          captivating and an art to look at.
        </p>
      </div>
    </Container>
  )
}

export default Right
