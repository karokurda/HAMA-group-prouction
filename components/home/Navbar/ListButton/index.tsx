import { useState } from 'react'
import { BsList } from 'react-icons/bs'
import Modal from './Modal'

const ListButton = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ zIndex: 999 }} className="lg:hidden fixed right-5">
      <div className="relative">
        <div
          onClick={() => setShowModal(!showModal)}
          className="border-2  cursor-pointer text-primary-yellow-1 hover:bg-primary-yellow-1 hover:text-black duration-100 border-primary-yellow-1 p-2"
        >
          <BsList size={20} />
        </div>
        <Modal show={showModal} close={() => setShowModal(false)} />
      </div>
    </div>
  )
}

export default ListButton
