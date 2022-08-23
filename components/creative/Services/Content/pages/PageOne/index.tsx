import Underline from '@components/Underline'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { variants } from '../helpers'

const PageOne: FC<{ page: number; direction: number }> = ({
  direction,
  page,
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
      <div className="mt-40 uppercase font-helvetica-black text-center">
        <div className="text-5xl">
          <h2>Project management</h2>
          <h2>& Creative supervision</h2>
        </div>

        <h2 className="mt-5 font-bold text-3xl text-primary-green-1">
          Setting you up for success.
        </h2>

        <div className="mt-10 text-base font-helvetica-condensed flex flex-col gap-3">
          <p>
            Our experienced team will be with you from the kick off of your{' '}
          </p>
          <p>
            Project, we are with you up to delivery to ensure your brand
            strategy
          </p>
          <p>and communication elements are respected.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default PageOne
