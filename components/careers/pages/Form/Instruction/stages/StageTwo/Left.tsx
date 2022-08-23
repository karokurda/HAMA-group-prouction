import Underline from '../../../../../../Underline'
import LeftPartContainer from '../../containers/LeftPartContainer'

const Content = () => {
  return (
    <>
      <h2>Location </h2>
      <Underline color="white" />
    </>
  )
}

const Left = () => {
  const errorExists = false
  return <LeftPartContainer errorExists={errorExists} Component={Content} />
}

export default Left
