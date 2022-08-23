import { FC } from 'react'

const Underline: FC<{
  color: 'orange' | 'green' | 'yellow' | 'blue' | 'white' | 'purple' | 'black'
  className?: string
}> = ({ color, className = '' }) => {
  return (
    <div
      className={`mt-3 h-[6px] w-10 ${
        color === 'orange'
          ? 'bg-primary-orange-1'
          : color === 'green'
          ? 'bg-primary-green-1'
          : color === 'blue'
          ? 'bg-primary-blue-1'
          : color === 'purple'
          ? 'bg-primary-purple-1'
          : color === 'black'
          ? 'bg-primary-gray-1'
          : color === 'white'
          ? 'bg-white'
          : color === 'yellow' && 'bg-primary-yellow-1'
      } ${className}`}
    />
  )
}

export default Underline
