import { FC, MouseEventHandler, useRef } from 'react'
import { useHoverDirty } from 'react-use'
import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'


const Header = () => {
  return (
    <div className='relative'>
    <div className="aspect-video ">
       <video
        className="w-full h-full object-cover absolute   "
        autoPlay
        muted
        playsInline
        loop
        id="production-header"
        
        style={{
          zIndex: -999,
          
          
        }}
      >
        <source src="/videos/production-header-small.mp4" type="video/mp4"  />
        
      </video>
      {/* <div className="min-w-full h-screen top-0 left-0 absolute object-cover">
        <ReactPlayer
          url={'/videos/production-header.mp4'}
          controls={false}
          width="100%"
          height="100vh"
          playing
          muted
        />
      </div> 
      {/* <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        className="min-w-full h-screen top-0 left-0 absolute object-cover"
        // style="border: 0px;width: 100%;"
        height="100vh"
        src="/videos/production-header.mp4"
      ></iframe> */}
      <Container className="relative aspect-w-16 aspect-h-9  min-h-full  ">
        
        <div>
          <Navbar />

          <div className="absolute uppercase 2xl:text-6xl lg:mb-20  font-extrabold text-white font-helvetica-black bottom-5 xl:bottom-15  text-xs md:text-lg  xl:text-4xl  lg:text-lg ">
            <h2>SEE</h2>
            <h2>Our</h2>
            <h2>Demo</h2>
            <h2>Reel</h2>

            <div className="h-[6px] w-10 bg-white mt-3" />
            
          </div>
          {/* 
          <div className="absolute flex flex-col gap-2 uppercase text-xl font-extrabold text-white bottom-20 right-0">
            <SelectItem
              onClick={() => {
                setSelected('Demo reel')
              }}
              title="Demo reel"
              selected={selected === 'Demo reel'}
            />
            <SelectItem
              onClick={() => {
                setSelected('desc')
              }}
              title="Description"
              selected={selected === 'desc'}
            />
            <SelectItem
              onClick={() => {
                setSelected('our work')
              }}
              title="Our work"
              selected={selected === 'our work'}
            />
            <SelectItem
              onClick={() => {
                setSelected('our services')
              }}
              title="Our Services"
              selected={selected === 'our services'}
            />
          </div> */}
        </div>
      </Container>
    </div>
    </div>
  )
}

const SelectItem: FC<{
  title: string
  selected: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}> = ({ title, selected, onClick }) => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  return (
    <div
      onClick={onClick}
      ref={ref}
      className="flex items-center justify-between cursor-pointer w-72"
    >
      <p
        className={`w-9/12 text-right ${
          selected || hovered ? 'text-primary-yellow-1' : ''
        }`}
      >
        {title}
      </p>

      <div
        className={`h-[6px] bg-primary-yellow-1 duration-200 ${
          selected || hovered ? 'w-2/12' : 'w-0'
        }`}
      />
    </div>
  )
}

export default Header
