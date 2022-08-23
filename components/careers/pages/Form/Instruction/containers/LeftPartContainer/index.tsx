import { FC } from 'react'
import Container from '../../../../../../layout/Container'
import NextButton from './NextButton'

const LeftPartContainer: FC<{ Component: FC<any>; errorExists?: boolean }> = ({
  Component,
  errorExists,
}) => {
  return (
    <Container className="w-1/2 bg-primary-yellow-1">
      <div className="flex justify-between flex-row-reverse">
        <div className="flex items-center gap-1">Step 1 of 6</div>
      </div>

      <div className="w-full h-full flex flex-col items-center text-primary-gray-1">
        <div className="text-6xl font-bold font-helvetica-black uppercase w-full mt-80 max-w-md">
          <Component />
          <NextButton errorExists={errorExists} className="mt-60" />
        </div>
      </div>
    </Container>
  )
}

export default LeftPartContainer
