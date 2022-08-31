import useWindowSize from '@hooks/useWindowSize'
import Image from 'next/image'
import Link from 'next/link'
import { FC, LegacyRef, useEffect, useRef, useState } from 'react'
import { useHoverDirty } from 'react-use'
import slugify from 'slugify'
import { IImageItemProps } from './ImageItem.types'

const ImageItem: FC<IImageItemProps> = ({ img, title }) => {
  const ref: LegacyRef<HTMLDivElement> = useRef(null)

  const hovered = useHoverDirty(ref)

  const [divW, setDivW] = useState(0)

  const size = useWindowSize()

  useEffect(() => {
    setDivW(ref.current?.offsetWidth || 0)
  }, [ref, size])

  return (
    <Link href={`/works/${slugify(title, { lower: true })}` } >
      <a>
        
        <div
          ref={ref}
          style={{
            width: '100%',
            height: divW,
          }}
          className="relative cursor-pointer"
        >
          <Image
            width={800}
            height={800}
            src={img}
            alt={title}
            className="object-cover absolute top-0 left-0 w-full"
          />
          <div className="absolute left-2 bottom-2 sm:left-10 sm:bottom-10 cursor-pointer">
            <p
              className={`uppercase text-xs font-Helvetica-bold sm:text-3xl md:text-4xl lg:text-5xl text-white duration-200 font-bold ${
                hovered ? 'text-primary-yellow-1' : ''
              }`}
            >
              {title}
            </p>
            <div
              className={`h-1 sm:h-[6px] bg-primary-yellow-1 duration-200 mt-1 ${
                hovered ? 'w-10' : 'w-0'
              }`}
            />
          </div>
        </div>
      </a>
     
    </Link>
  )
}

export default ImageItem
