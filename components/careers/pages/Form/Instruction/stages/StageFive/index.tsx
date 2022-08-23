import { motion } from 'framer-motion'
import Left from './Left'
import Right from './Right'

const StageFive = () => {
  return (
    <motion.div
      initial={{ x: '50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-50%', opacity: 0 }}
    >
      <div className="flex min-h-screen">
        <Left />
        <Right />
      </div>
    </motion.div>
  )
}

export default StageFive
