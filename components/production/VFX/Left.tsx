import Container from '../../layout/Container'

const Left = () => {
  return (
   <div  className="bg-black  ">
      <Container >
      <div className="bg-black  xl:mt-5 ">
      <Container>
        <h2 className="uppercase text-4xl font-Helvetica-bold text-primary-orange-1 font-bold mt-5">
          VFX
        </h2>
        <div className="h-[6px] w-10 bg-primary-orange-1 xl:mt-3 " />
        <p className="text-white xl:text-2xl mt-5">Talent is at the heart of our work, combined
         with technology. Our team goes beyond imagination to bring out excellence in every piece of presented. Using state of the 
        art technologies and our own experience, we can create smooth & impressive visual effects. </p>

      </Container>
    </div>
      </Container>
   </div>
  )
}

export default Left
