import React from 'react'
import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'

const Header = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/Amed+copy.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="min-h-screen"
    >
      <Container>
        <Navbar />

        <div className="text-5xl text-black lg:text-6xl font-helvetica-black absolute bottom-10 font-bold uppercase">
          <h2>We</h2>
          <h2>Would</h2>
          <h2>Love</h2>
          <h2>To</h2>
          <h2>Hear</h2>
          <h2>From</h2>
          <h2>You</h2>

          <div className="h-2 w-10 bg-primary-yellow-1 mt-10 ml-2" />
        </div>
      </Container>
    </div>
  )
}

export default Header
