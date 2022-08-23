import Image from 'next/image'
import React from 'react'
import Container from '../../layout/Container'

const Left = () => {
  return (
    <div className="bg-primary-orange-1 w-full min-h-screen lg:w-5/12">
      <Container className="bg-primary-orange-1 flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <Image
            width={70}
            height={70}
            src="/images/video-camera.png"
            alt="video camera logo"
            className="object-contain"
          />
          <h2 className="text-4xl text-white font-bold">Production</h2>
          <div className="h-[6px] w-10 bg-white mt-3 rounded-full" />
        </div>
      </Container>
    </div>
  )
}

export default Left
