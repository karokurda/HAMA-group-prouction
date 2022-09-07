import Router from 'next/router'
import { useRef } from 'react'
import { useHoverDirty } from 'react-use'

const Banner = () => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  const redirectHandler = () => {
    Router.push('/contact')
  }

  return (
    <div
      ref={ref}
      onClick={redirectHandler}
      className="border-8 font-helvetica-condensed uppercase border-white cursor-pointer px-10 py-20 mt-16 text-4xl select-none font-extrabold text-white"
    >
      <p>Contact us</p>
      
      <div
        className={`mt-2 bg-white ml-2 h-[5px] duration-200 ${
          hovered ? 'w-20' : 'w-10'
        }`}
      />
    </div>
  )
}

export default Banner
