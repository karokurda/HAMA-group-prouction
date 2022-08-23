import { FC } from 'react'
import { RiArrowLeftSFill } from 'react-icons/ri'

const LeftButton: FC<{ onClick: () => void; isActive: boolean }> = ({
  onClick,
  isActive,
}) => {
  return (
    <div
      style={{ zIndex: 999 }}
      onClick={onClick}
      className={`absolute left-0 top-1/2 -translate-y-1/2 p-8 ${
        isActive ? 'bg-primary-gray-1 cursor-pointer' : 'bg-white'
      }`}
    >
      <RiArrowLeftSFill
        className={`${isActive ? 'text-primary-yellow-1' : 'text-gray-300'}`}
        size={40}
      />
    </div>
  )
}

export default LeftButton
