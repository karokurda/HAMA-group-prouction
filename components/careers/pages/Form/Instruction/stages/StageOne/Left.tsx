import { FC } from 'react'
import Underline from '../../../../../../Underline'
import LeftPartContainer from '../../containers/LeftPartContainer'

const Content = () => {
  return (
    <>
      <h2>Personal </h2>
      <h2>Information</h2>
      <Underline color="white" />
    </>
  )
}

const Left: FC<{ errorExists: boolean }> = ({ errorExists }) => {
  return <LeftPartContainer errorExists={errorExists} Component={Content} />
}

export default Left
