import Underline from '@components/Underline'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { variants } from '../helpers'

const PageFour: FC<{ page: number; direction: number }> = ({
  page,
  direction,
}) => {
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
      className="min-h-screen flex flex-col items-center py-10"
    >
      <div className="justify-center flex flex-col items-center">
        <h2 className="uppercase font-helvetica-black text-3xl">
          Our Services
        </h2>
        <Underline color="green" />
      </div>
      <div className="mt-40 font-helvetica-black text-center">
        <div className="text-5xl uppercase">
          <h2>Communication</h2>
          <h2>Consultation</h2>
        </div>

        <div className="mt-14 text-lg font-helvetica-light flex flex-col gap-2 font-light">
          <p>Every project should start with a well-designed plan to enrich</p>
          <p>your brand perception, improve relationships with stakeholders</p>
          <p>and customers, and help build a valuable brand reputation.</p>
        </div>
        <div className="mt-10 text-lg font-helvetica-light flex flex-col gap-2 font-light">
          <p>We craft and refine your brands most essential messages,</p>
          <p>which is important for the mix of the right communication</p>
          <p>channels and creation of the tactical part of the campaign.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default PageFour
