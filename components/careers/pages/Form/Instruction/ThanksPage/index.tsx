import Container from '../../../../../layout/Container'
import { motion } from 'framer-motion'
import { useFormState } from '../../../../../../store'

const ThanksPage = () => {
  const restart = useFormState((state) => state.restart)

  return (
    <motion.div
      initial={{ x: '50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary-yellow-1"
    >
      <Container className="flex justify-center items-center w-full min-h-screen">
        <div className="font-bold uppercase text-6xl font-helvetica-black">
          <h2>Thank you</h2>

          <button onClick={restart} className="mt-10">
            Go back
          </button>
        </div>
      </Container>
    </motion.div>
  )
}

export default ThanksPage
