import { motion, MotionStyle } from 'framer-motion'
import { FC, ReactNode } from 'react'
import { variants } from '../../helpers'

const PageContainer: FC<{
  page: number
  direction: number
  children: ReactNode
  style?: MotionStyle
}> = ({ direction, page, children, style }) => {
  return (
    <motion.div
      key={page}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="min-h-screen text-center flex-col flex justify-center items-center w-full"
      style={style ? style : {}}
    >
      {children}
    </motion.div>
  )
}

export default PageContainer
