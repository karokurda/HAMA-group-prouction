import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'

const ImageLoader: FC<{
  img: string
  alt: string
  setLoading: Dispatch<SetStateAction<boolean>>
}> = ({ img, alt, setLoading }) => {
  return (
    <Image
      onLoad={() => setLoading(false)}
      alt={alt}
      src={img}
      layout="fill"
      objectFit="cover"
      className="invisible"
    />
  )
}

export default ImageLoader
