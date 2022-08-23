import Underline from '@components/Underline'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { variants } from '../helpers'

const PageTwo: FC<{ page: number; direction: number }> = ({
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
            <h2 className="text-4xl font-helvetica-black">Brand positioning</h2>
            <div className="text-3xl font-helvetica-condensed font-bold text-primary-green-1 mt-3">
              <h2>It&apos;s all about</h2>
              <h2>connections.</h2>
            </div>

            <div className="text-base font-helvetica-roman flex flex-col gap-2 text-left text-primary-gray-3 mt-5">
              <p>Positioning defines what a you stand for and offer. How you</p>
              <p>will benefit your customers and how you will distinguish</p>
              <p>
                yourself in the market. Through brand positioning we create a
              </p>
              <p>
                connection with your customers. It&apos;s how you want your
                brand
              </p>
              <p>to be seen in their minds and stand out among competitors.</p>
            </div>
          </div>
          <div className="bg-gray-300 h-[400px] w-[1px]" />

          <div className="w-1/2 p-10">
            <h2 className="text-4xl font-helvetica-black">Naming</h2>
            <div className="text-3xl font-helvetica-condensed font-bold text-primary-green-1 mt-3">
              <h2>What do you want to say,</h2>
              <h2>and what&apos;s the best way to say it?</h2>
            </div>

            <div className="text-base flex flex-col gap-2 font-helvetica-roman text-left text-primary-gray-3 mt-5">
              <p>Words define a brand as much as aesthetics, and we can work</p>
              <p>
                with you to develop the perfect verbal identity. We will support
              </p>
              <p>to decide the most genuine voice for your brand.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PageTwo
