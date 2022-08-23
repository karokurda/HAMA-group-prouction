import Underline from '../../../../../../Underline'
import LeftPartContainer from '../../containers/LeftPartContainer'

const Content = () => {
  return (
    <>
      <h2>APPEARANCE </h2>
      <Underline color="white" />
    </>
  )
}

const Left = () => {
  return <LeftPartContainer Component={Content} />
}

export default Left
