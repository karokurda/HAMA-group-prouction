import Container from '../../layout/Container'

const Left = () => {
  return (
    <div className="bg-black" >
    <Container >
    <div className="bg-black py-10 ">
      <Container>
        <h2 className="uppercase text-4xl font-Helvetica-bold text-primary-orange-1 font-bold">
            VIDEO
          PRODUCTION

        </h2>
        <div className="h-[6px] w-10 bg-primary-orange-1 xl:mt-3" />
        <p className="text-white xl:text-2xl">Our Army of experts will bring ideas to life through storytelling, 
          picking moments and a vision for action.</p>
      </Container>
    </div>
    </Container>
    </div>
  )
}

export default Left
