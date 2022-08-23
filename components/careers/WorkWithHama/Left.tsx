import React from 'react'
import Container from '../../layout/Container'

const Left = () => {
  return (
    <Container className="lg:w-1/2 w-full max-w-2xl min-h-screen flex items-center text-primary-gray-1">
      <div className="uppercase text-6xl font-extrabold mx-auto w-full lg:max-w-[35rem]">
        <div className="font-helvetica-black font-extrabold text-7xl">
          <h2>Work</h2>
          <h2>At Hama</h2>
        </div>
        <div className="h-[6px] w-10 bg-primary-yellow-1 mt-2" />

        <p className="mt-10 text-lg font-normal">
          If you are interested in making art and interested in advertising
          field, apply to be part of HAMA Group&apos;s team because our door is
          always open to new talents.
        </p>

        <h2 className="text-4xl font-extrabold mt-10">hr@hamafx.com</h2>
      </div>
    </Container>
  )
}

export default Left
