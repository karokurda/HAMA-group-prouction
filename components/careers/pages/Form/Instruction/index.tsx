import { useRef } from 'react'
import { useHoverDirty } from 'react-use'
import Container from '../../../../layout/Container'
import Arabic from './Arabic'
import English from './English'
import Kurdish from './Kurdish'
import Tutorial from './Tutorial'
import { AnimatePresence, motion } from 'framer-motion'
import { useFormState } from '../../../../../store'

const Instruction = () => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  const setStage = useFormState((state) => state.setStage)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: '-100%',
        opacity: 0,
      }}
      className="min-h-screen bg-primary-yellow-1 pb-20"
    >
      <Container className="lg:flex-row flex flex-col">
        <English />
        <Kurdish />
      </Container>

      <Container className="lg:flex-row-reverse flex flex-col">
        <Arabic />
        <Tutorial />
      </Container>

      <Container>
        <button
          ref={ref}
          className="w-full flex flex-col items-center justify-center border-8 border-white py-8 text-white font-bold text-4xl"
          onClick={() => setStage(1)}
        >
          <p>START</p>
          <div
            className={`h-[6px] bg-white mt-3 hover:w-20 duration-200 ${
              hovered ? 'w-20' : 'w-10'
            }`}
          />
        </button>
      </Container>
    </motion.div>
  )
}

export default Instruction
