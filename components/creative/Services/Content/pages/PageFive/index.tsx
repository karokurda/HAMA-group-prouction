import Underline from '@components/Underline'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { BsDot } from 'react-icons/bs'
import { variants } from '../helpers'

const PageFive: FC<{ page: number; direction: number }> = ({
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
            <div className="uppercase">
              <h2 className="text-4xl font-helvetica-black">Campaign</h2>
              <h2 className="text-4xl font-helvetica-black">Development</h2>
            </div>

            <div className="text-base font-bold font-helvetica-pro flex flex-col gap-2 text-left text-primary-gray-3 mt-10">
              <p>We develop unique messages to add value to your brand in</p>
              <p>
                order to reach your company objectives in the most effective
              </p>
              <p>way with your target audience in mind.</p>
            </div>

            <div className="text-base font-bold font-helvetica-pro flex flex-col gap-2 text-left text-primary-gray-3 mt-10">
              <p>We write script and develop ideas to execute and design for</p>
              <p>your ad. From idea to concept, to design and execution.</p>
            </div>
          </div>

          <div className="bg-gray-300 h-[400px] w-[1px]" />

          <div className="w-1/2 p-10">
            <div className="text-3xl font-helvetica-condensed font-bold text-primary-green-1 mt-3">
              <h2>It&apos;s not what you say,</h2>
              <h2>but how you say it.</h2>
            </div>

            <div className="text-base flex flex-col gap-2 font-helvetica-roman text-left text-primary-gray-3 mt-5">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <BsDot />
                  <p>Campaign elements: brand look & feel.</p>
                </div>

                <div className="flex gap-2 items-center">
                  <BsDot />
                  <p>Out of home advertisement</p>
                </div>

                <div className="flex gap-2 items-center">
                  <BsDot />
                  <p>Print communication items</p>
                </div>

                <div className="flex gap-2 items-center">
                  <BsDot />
                  <p>Social media engagement campaigns</p>
                </div>

                <div className="flex gap-2 items-center">
                  <BsDot />
                  <p>Ambient and brand experience.</p>
                </div>

                <div className="flex gap-2 items-center">
                  <BsDot />
                  <p>Radio ads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PageFive
