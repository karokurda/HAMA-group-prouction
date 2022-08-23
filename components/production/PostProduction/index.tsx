import { LegacyRef, useEffect, useRef, useState } from 'react'
import Container from '../../layout/Container'
import PlayButton from '../../PlayButton'

const PostProduction = () => {
  const [source] = useState('/videos/super-trofeo.mp4')

  const vidRef: LegacyRef<HTMLVideoElement> = useRef(null)

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.currentTime = 125
    }
  }, [])

  return (
    <div className="relative">
      <video
        ref={vidRef}
        className="min-w-full h-screen top-0 left-0 absolute object-cover"
        autoPlay
        playsInline
        muted
        loop
        style={{ zIndex: -999 }}
      >
        <source src={source} type="video/mp4" />
      </video>
      <Container className="relative min-h-screen">
        <div className="absolute uppercase font-helvetica-black lg:text-7xl text-5xl font-extrabold text-primarbg-primary-gray-1 bottom-20">
          <PlayButton />

          <h2 className="mt-7">Post</h2>
          <h2>Production</h2>

          <div className="h-[6px] w-10 bg-primary-gray-1 mt-3" />
        </div>
      </Container>
    </div>
  )
}

export default PostProduction
