import useFullScreen from '@hooks/useFullScreen'
import { FC } from 'react'
import { Work } from '../../../types'
import Navbar from '../../home/Navbar'
import Container from '../../layout/Container'
import Link from 'next/link'


const Header: FC<{ work: Work }> = ({ work }) => {
  const { fullScreen, ref } = useFullScreen()

  return (
    <div className="w-full bg-black ">
     
      <video
        ref={ref}
        onClick={fullScreen}
        className="min-w-full mt-20 lg:mt-0 h-1/3 lg:h-screen top-10 left-0 absolute object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{
          zIndex: 99,
        }}
        
      >
        <source src={work.mainVideo} type="video/mp4" />
        
      </video>
      
      <div className='bg-primary-yellow-1 h-10 '>
      <Link href={'/#back'} >
        <img src="https://hama-group.s3.eu-central-1.amazonaws.com/images/back-icon.png" className=' w-15 h-9 cursor-pointer p-1 '/>
      {/* <a 
       style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/back-icon.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'full',
        zIndex:999,
      }}>hello world</a> */}
      </Link>
      </div>
      <Container className="relative min-h-screen">
        <div className='m-20'>
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
