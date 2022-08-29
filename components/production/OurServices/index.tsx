import Container from '../../layout/Container'
import Link from 'next/link'

const OurServices = () => {
  return (
    <div className="bg-black py-10">
      <Container>
        <h2 className="uppercase text-4xl font-Helvetica-bold text-primary-orange-1 font-bold">
          Our Production 
          Services
        </h2>
        <div className="h-[6px] w-10 bg-primary-orange-1 mt-3" />
        
        <div className="uppercase xl:text-2xl font-Helvetica-bold  text-white mt-5 align-text-left">
        <p  ><Link href="#videopr" replace>
         <a className='text-left'> video production</a>
        </Link>
        <Link href="#VFXX" replace>
         <a className='text-left'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;VFX</a>
        </Link>
       
         <Link href="#ani" replace>
         <a className='text-left'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Animation</a>
        </Link>
        <Link href="#soundd" replace>
         <a className='text-left'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Sound</a>
        </Link>
       <Link href="#photo" replace>
         <a className='text-left'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   photo Graphic</a>
        </Link></p> 
          
        </div>
      </Container>
    </div>
  )
}

export default OurServices
