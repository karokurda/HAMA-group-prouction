import Image from 'next/image'
import { FC, RefObject, useEffect, useRef } from 'react'
import { Work } from '../../../types'
import Container from '../../layout/Container'
import Underline from '../../Underline'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('@components/VideoPlayer'), {
  ssr: false,
})

const Backstage: FC<{ work: Work }> = ({ work }) => {
  const images = work.backstage.images

  const vidRef: RefObject<HTMLVideoElement> = useRef(null)

  useEffect(() => {
    if (vidRef.current) {
      console.log(vidRef.current)
      vidRef.current.currentTime = 125
    }
  }, [])

  return (
    <div className="bg-primary-gray-1 min-h-screen pb-32">
      <Container className="min-h-screen">
        <h2 className="mt-10 font-bold text-primary-orange-1 text-6xl">
          Backstage
        </h2>
        <Underline color="orange" />

        <p className="text-4xl font-bold text-white mt-5">
          See a part of our world
        </p>

        <div className="mt-20 grid gap-5 grid-cols-4">
          <div className="col-span-4 md:col-span-2 row-span-1">
            <video
              ref={vidRef}
              className="object-cover rounded-sm w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              style={{
                zIndex: 999,
              }}
            >
              <source src={'/videos/super-trofeo.mp4'} type="video/mp4" />
            </video>
            {/* <VideoPlayer
              ref={vidRef}
              playsinline
              playing
              width="100%"
              muted
              url="/videos/super-trofeo.mp4"
              controls
            /> */}
          </div>

          {images?.map((image, _idx) => (
            <ImageItem key={_idx} img={image} title={image} />
          ))}
        </div>
      </Container>
    </div>
  )
}

const ImageItem: FC<{ img: string; title: string }> = ({ img, title }) => {
  return (
    <div className="col-span-2 md:col-span-1">
      <Image
        className="object-cover rounded-sm"
        src={img}
        alt={title}
        height={600}
        width={600}
      />
    </div>
  )
}

export default Backstage
