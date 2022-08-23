import { LegacyRef, useEffect, useRef, useState } from 'react'
import Container from '../../../../layout/Container'

const Tutorial = () => {
  const [source, setSource] = useState('/videos/super-trofeo.mp4')

  const vidRef: LegacyRef<HTMLVideoElement> = useRef(null)

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.currentTime = 125
    }
  }, [vidRef])

  return (
    <Container className="w-full lg:w-1/2">
      <video
        ref={vidRef}
        className="min-w-full object-cover rounded-sm"
        autoPlay
        muted
        loop
        playsInline
        id="myVideo"
      >
        <source src={source} type="video/mp4" />
      </video>
    </Container>
  )
}

export default Tutorial
