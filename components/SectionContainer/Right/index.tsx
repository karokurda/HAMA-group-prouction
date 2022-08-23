import { FC } from 'react'
import { IRightProps } from './Right.types'

const Right: FC<IRightProps> = ({ image, Component, bgColor }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className={`w-1/2 ${bgColor === 'blue' ? 'bg-primary-blue-1' : ''}`}
    >
      {Component && <Component />}
    </div>
  )
}

export default Right
