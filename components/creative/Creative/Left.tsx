import Image from 'next/image'
import React from 'react'

const Left = () => {
  return (
    <div className="bg-primary-green-1 lg:w-1/2 min-h-screen w-full flex items-center justify-center">
      <div className="text-white font-extrabold text-center flex flex-col items-center justify-center text-6xl">
        <Image
          height={100}
          width={100}
          src="/images/light-bulb.png"
          alt="Light bulb"
        />
        <h2 className="uppercase mt-2">Creative</h2>

        <div className="bg-white mt-6 h-[6px] w-10" />
      </div>
    </div>
  )
}

export default Left
