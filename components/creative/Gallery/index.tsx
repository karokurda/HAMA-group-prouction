import { FC } from 'react'

const Box: FC<{ w?: number; img: string }> = ({ w = 1, img }) => {
  return (
    <img
      style={{ width: `${(w * 100) / 12}%` }}
      className="p-5 object-cover"
      alt="Some image"
      src={img}
    />
  )
}

const Gallery = () => {
  return (
    <div className="flex flex-wrap">
      <Box img="/images/creative/gallery/1.png" w={7} />
      <Box img="/images/creative/gallery/2.png" w={5} />
      <Box img="/images/creative/gallery/3.png" w={6} />
      <Box img="/images/creative/gallery/4.png" w={6} />
      <Box img="/images/creative/gallery/5.png" w={7} />
      <Box img="/images/creative/gallery/6.png" w={5} />
      <Box img="/images/creative/gallery/7.png" w={4} />
      <Box img="/images/creative/gallery/8.png" w={4} />
      <Box img="/images/creative/gallery/9.png" w={4} />
      <Box img="/images/creative/gallery/10.png" w={7} />
      <Box img="/images/creative/gallery/11.png" w={5} />
    </div>
  )
}

export default Gallery
