import Container from '@components/layout/Container'
import { FC, useRef, useState } from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
import { useHoverDirty } from 'react-use'
import { motion } from 'framer-motion'

const Chevron: FC<{ hovered: boolean }> = ({ hovered }) => (
  <RiArrowRightSFill
    className={`text-primary-yellow-1 duration-200 ${
      hovered ? 'translate-x-3' : ''
    }`}
    size={45}
  
  />
)

const OfficeItem: FC<{
  title: string
  position: 'left' | 'right'
  onClick: () => void
}> = ({ title, position, onClick }) => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)
  return (
    <div
      ref={ref}
      className={`absolute text-xs flex items-center bottom-5 uppercase lg:text-4xl font-extrabold cursor-pointer select-none text-white ${
        position === 'left' ? 'left-1' : 'right-1'
      }`}
      onClick={onClick}
    >
      <div className=" lg:hover:text-primary-yellow-1 duration-200 ">{title}</div>
      <Chevron hovered={hovered} />
    </div>
  )
}

// const Offices = () => {
//   const ref = useRef(null)
//   const hovered = useHoverDirty(ref)

//   return (
//     <div
//       style={{
//         backgroundImage: 'url(/images/office-suli.jpeg)',
//         backgroundRepeat: 'no-repeat no-repeat',
//         backgroundPosition: 'right top, left top',
//         backgroundSize: 'cover',
//       }}
//       className="min-h-screen relative flex justify-center items-center"
//     >
//       <div
//         ref={ref}
//         className="border-8 cursor-pointer select-none flex flex-col font-bold text-6xl uppercase text-primary-yellow-1 bg-primary-gray-1 border-primary-yellow-1 p-10 py-20"
//       >
//         <span>Our</span>
//         <span>offices</span>
//         <div
//           className={`h-[7px] duration-200 mt-5 ml-2 bg-white ${
//             hovered ? 'w-20' : 'w-10'
//           }`}
//         />
//       </div>

//       <OfficeItem position="left" title="Erbil Office" />
//       <OfficeItem position="right" title="Slemani Office" />
//     </div>
//   )
// }

const Offices = () => {
  const [selectedSide, setSelectedSide] = useState<'left' | 'right' | 'none'>(
    'none',
  )

  const select = (side: 'left' | 'right') => {
    if (side === selectedSide) {
      setSelectedSide('none')
    } else {
      setSelectedSide(side)
    }
  }

  return (
    
    <motion.div className="min-h-screen relative ">
      <Container className="min-h-screen  flex justify-center items-center ">
        <motion.img
          initial={{
            width: '50%',
          }}
          animate={{
            width:
              selectedSide === 'left'
                ? '70%'
                : selectedSide === 'none'
                ? '50%'
                : '30%',
          }}
          
          className="h-screen  object-cover absolute left-0"
          src="/images/about/DSC00112-01.jpeg"
          alt="waiting"
          style={{ zIndex: -999 }}
        />
        <motion.img
          initial={{
            width: '50%',
          }}
          animate={{
            width:
              selectedSide === 'right'
                ? '70%'
                : selectedSide === 'none'
                ? '50%'
                : '30%',
          }}
          className="w-1/2 h-screen  object-cover absolute right-0"
          src="/images/about/IMG_2846-Recovered.jpg"
          alt="waiting"
          style={{ zIndex: -999 }}
        />
        {/* banner */}
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: selectedSide !== 'none' ? 0 : 1,
          }}
          //
          className="border-2 px-6 py-8 lg:border-4 text-2xl max-w-lg cursor-pointer select-none flex flex-col font-bold lg:text-6xl uppercase text-primary-yellow-1 bg-primary-gray-1 border-primary-yellow-1 lg:px-10 lg:py-20"
        >
          <span>Our</span>
          <span>offices</span>
          <div
            className={`lg:h-[7px] h-[3px] duration-200 lg:mt-5 mt-3 lg:ml-2 bg-white w-10 lg:w-10`}
          />
        </motion.div>
        {/*  */}
         <OfficeItem
          onClick={() => select('right')}
          position="right"
          title="Slemani Office"
        />
        <OfficeItem
          onClick={() => select('left')}
          position="left"
          title="Erbil Office"
        />
      </Container> 
    </motion.div>
  )
}

export default Offices
