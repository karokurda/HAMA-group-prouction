import LeftButton from '@components/Slider/LeftButton'
import RightButton from '@components/Slider/RightButton'
import { useState } from 'react'
import Content from './Content'

const Services = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const increaseHandler = () => {
    if (page < 4) setPage([page + 1, 1])
  }

  const decreaseHandler = () => {
    if (page > 0) {
      setPage([page - 1, -1])
    }
  }

  return (
    <div
      style={{ zIndex: 999 }}
      className="min-h-screen hidden lg:block bg-primary-gray-2 relative overflow-hidden"
    >
      <div style={{ zIndex: 9999 }}>
        <LeftButton isActive={page > 0} onClick={decreaseHandler} />
        <RightButton isActive={page < 4} onClick={increaseHandler} />
      </div>
      <div style={{ zIndex: -999 }}>
        <Content direction={direction} page={page} />
      </div>
    </div>
  )
}

export default Services
