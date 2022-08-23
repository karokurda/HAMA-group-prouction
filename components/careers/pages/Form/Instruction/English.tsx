import Container from '../../../../layout/Container'

const English = () => {
  return (
    <Container className="lg:w-1/2 w-full">
      <h2 className="text-4xl font-extrabold font-helvetica-black">
        Instruction
      </h2>
      <div className="h-[6px] w-10 bg-white mt-3" />

      <div className="mt-10 text-2xl font-bold font-helvetica-black flex flex-col gap-5">
        <p>
          1- This form only accepts English answers. Please fill the form in
          English.
        </p>
        <p>2- There is a sample in every required field.</p>
        <p>3- Please fill the form responsibly and with correct information.</p>
        <p>
          4- If you want to be HAMA&apos;s next star, click the START button and
          fill the form.
        </p>
      </div>
    </Container>
  )
}

export default English
