import Header from '../../../components/careers/pages/Form/Header'
import Instruction from '../../../components/careers/pages/Form/Instruction'
import Footer from '../../../components/layout/Footer'
import { AnimatePresence } from 'framer-motion'
import { useFormState } from '../../../store'
import StageOne from '../../../components/careers/pages/Form/Instruction/stages/StageOne'
import StageTwo from '../../../components/careers/pages/Form/Instruction/stages/StageTwo'
import StageThree from '../../../components/careers/pages/Form/Instruction/stages/StageThree'
import StageFour from '../../../components/careers/pages/Form/Instruction/stages/StageFour'
import StageFive from '../../../components/careers/pages/Form/Instruction/stages/StageFive'
import StageSix from '../../../components/careers/pages/Form/Instruction/stages/StageSix'
import ThanksPage from '../../../components/careers/pages/Form/Instruction/ThanksPage'
import { useEffect } from 'react'

const Form = () => {
  const stage = useFormState((state) => state.stage)
  const reset = useFormState((state) => state.restart)
  const setStage = useFormState((state) => state.setStage)

  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  return (
    <div>
      <Header />
      <div className="min-h-screen overflow-hidden">
        <AnimatePresence exitBeforeEnter>
          {stage === 0 ? (
            <Instruction key={`stage-0`} />
          ) : stage === 1 ? (
            <StageOne key={`stage-1`} />
          ) : stage === 2 ? (
            <StageTwo key={`stage-2`} />
          ) : stage === 3 ? (
            <StageThree key={`stage-3`} />
          ) : stage === 4 ? (
            <StageFour key={`stage-4`} />
          ) : stage === 5 ? (
            <StageFive key={`stage-5`} />
          ) : stage === 6 ? (
            <StageSix key={`stage-6`} />
          ) : (
            stage === 7 && <ThanksPage key={`stage-7`} />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}

export default Form
