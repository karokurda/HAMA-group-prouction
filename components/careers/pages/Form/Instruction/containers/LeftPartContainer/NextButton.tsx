import { FC, useRef } from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
import { useHoverDirty } from 'react-use'
import { useFormState } from '../../../../../../../store'

const NextButton: FC<{ className?: string; errorExists?: boolean }> = ({
  className = '',
  errorExists,
}) => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  const next = useFormState((s) => s.next)

  const nextHandler = () => {
    if (!errorExists) next()
  }

  return (
    <div
      onClick={nextHandler}
      ref={ref}
      className={`items-center flex cursor-pointer select-none ${className}`}
    >
      <h2>NEXT</h2>
      <RiArrowRightSFill
        className={`duration-200 ${hovered ? 'translate-x-2' : ''}`}
      />
    </div>
  )
}

export default NextButton
