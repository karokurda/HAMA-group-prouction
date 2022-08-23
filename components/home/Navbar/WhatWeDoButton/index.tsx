import { useRef, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useHoverDirty } from 'react-use'
import Modal from './Modal'

const WhatWeDoButton = () => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  const [showModal, setShowModal] = useState(false)

  return (
    <div onClick={() => setShowModal(true)} className="relative">
      <button
        ref={ref}
        className="uppercase text-white hover:text-primary-yellow-1 duration-100 font-light"
      >
        <div className="flex items-center gap-2">
          <div>What we do</div>
          <FaChevronRight />
        </div>
        <div
          className={`h-[3px] duration-200 mt-[2px] bg-primary-yellow-1 ${
            hovered ? 'w-5' : 'w-0'
          }`}
        />
      </button>
      <Modal show={showModal} close={() => setShowModal(false)} />
    </div>
  )
}

export default WhatWeDoButton
