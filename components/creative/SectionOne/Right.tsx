import Container from '../../layout/Container'

const Right = () => {
  return (
    <div className="lg:w-4/12 w-full min-h-screen flex justify-center items-center">
      <Container className="w-full text-xl">
        <p>
          Customers are always growing and changing, more importantly your
          customers have changed. They&apos;r smarter than ever, more connected
          and more demanding. They&apos;re busy and distracted, brands need to
          work harder than ever to get their attention.
        </p>

        <div className="h-[6px] w-10 bg-primary-green-1 my-5" />

        <p>
          At HAMA Creative, we believe in supporting your brand to stand out and
          be on top of mind. We tell storeiers that resonates with your
          audience, be it local or international, there is no limit to our
          creativity.
        </p>
      </Container>
    </div>
  )
}

export default Right
