import Image from 'next/image'
import { FC } from 'react'

const HamaLogo: FC<{
  color?: 'yellow' | 'black'
  className?: string
}> = ({ color = 'yellow', className = '' }) => {
  return (
    <div
      style={{ }}
      className={`max-w-[90px] lg:w-full ${className}`}
    >
      <Image
        style={{ zIndex: 0 }}
        width={400}
        height={400}
        src={
          color === 'yellow'
            ? `/images/hama-group-logo.png`
            : `/images/hama-group-logo-gray.png`
        }
        className="object-contain"
        alt="hama group logo"
      />
    </div>
  )
}

export default HamaLogo
