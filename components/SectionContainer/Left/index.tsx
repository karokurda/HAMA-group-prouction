import { FC } from 'react'
import Container from '../../layout/Container'
import { ILeftProps } from './Left.types'

const Left: FC<ILeftProps> = ({ Component, color }) => {
  return (
    <div
      className={`w-1/2 ${
        color === 'blue'
          ? 'bg-primary-blue-1'
          : color === 'green'
          ? 'bg-primary-green-1'
          : ''
      }`}
    >
      <Container className="flex items-center justify-center">
        <div className="font-bold uppercase w-full text-6xl max-w-lg">
          <Component />
        </div>
      </Container>
    </div>
  )
}

export default Left
