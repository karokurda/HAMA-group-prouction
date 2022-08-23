import useFullScreen from '@hooks/useFullScreen'
import { FC } from 'react'
import { Work } from '../../../types'
import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'

const Header: FC<{ work: Work }> = ({ work }) => {
  const { fullScreen, ref } = useFullScreen()

  return (
    <div className="w-full bg-black">
      <video
        ref={ref}
        onClick={fullScreen}
        className="min-w-full mt-20 lg:mt-0 h-1/3 lg:h-screen top-0 left-0 absolute object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{
          zIndex: 999,
        }}
      >
        <source src={work.mainVideo} type="video/mp4" />
      </video>
      <Container className="relative min-h-screen">
        <div>
          <Navbar />
          <div className="absolute uppercase text-3xl md:text-5xl font-extrabold bottom-0 bg-white pt-5 pb-10 px-20">
            <h2>{work?.title}</h2>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header