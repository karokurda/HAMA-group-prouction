import Underline from '@components/Underline'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { variants } from '../helpers'

const PageThree: FC<{ page: number; direction: number }> = ({
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
      className="min-h-screen flex flex-col items-center py-10 w-full"
    >
      <div className="justify-center flex flex-col items-center">
        <h2 className="uppercase font-helvetica-black text-3xl">
          Our Services
        </h2>
        <Underline color="green" />
      </div>
      <div className="mt-20 w-full font-helvetica-black text-center">
        <div className="text-5xl uppercase">
          <h2>Brand Management</h2>
        </div>

        <div className="flex mt-10 w-full text-left">
          <div className="w-1/2 p-10 px-20">
            <h2 className="text-4xl font-helvetica-black">
              Integrated marketing strategy
            </h2>
            <div className="text-3xl font-helvetica-condensed font-bold text-primary-green-1 mt-3">
              <h2>The right message, at the right place</h2>
              <h2>at the right time, for the right audience.</h2>
            </div>

            <div className="text-base font-helvetica-roman flex flex-col gap-2 text-left text-primary-gray-3 mt-5">
              <p>We create effective strategies, great identities, smooth</p>
              <p>connections, and memorable experiences to connect people to</p>
              <p>brands and organizations across all customer touchpoints.</p>
            </div>
          </div>
          <div className="bg-gray-300 h-[400px] w-[1px]" />

          <div className="w-1/2 p-10">
            <h2 className="text-4xl font-helvetica-black">
              Brand identity and design
            </h2>
            <div className="text-3xl font-helvetica-condensed font-bold text-primary-green-1 mt-3">
              <h2>Consistency drives</h2>
              <h2>the power and trust of a brand.</h2>
            </div>

            <div className="text-base flex flex-col gap-2 font-helvetica-roman text-left text-primary-gray-3 mt-5">
              <p>We work to create the most honest, exciting, and attractive</p>
              <p>look for your brand. We explore many possibilities before</p>
              <p>arriving at a wide-ranging and flexible identity.</p>
              <p>We create logo conditions and brand buidelines & Identity</p>
              <p>standards.</p>
              <p>This ensures that your brand is recognized and brand assets</p>
              <p>are applied suitably and consistently.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PageThree
