import { FC } from 'react'
import Left from './Left'
import Right from './Right'
import { ISectionContainerProps } from './SectionContainer.types'

const SectionContainer: FC<ISectionContainerProps> = ({
  reverse = false,
  Component,
  image,
  bgColor,
}) => {
  return (
    <div className={`flex min-h-screen ${reverse ? 'flex-row-reverse' : ''}`}>
      <Left color={bgColor} Component={Component} />
      <Right bgColor={bgColor} image={image} />
    </div>
  )
}

export default SectionContainer
