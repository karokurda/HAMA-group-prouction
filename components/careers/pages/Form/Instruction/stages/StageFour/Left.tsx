import Underline from '../../../../../../Underline'
import LeftPartContainer from '../../containers/LeftPartContainer'

const Content = () => {
  return (
    <>
      <h2>JOB</h2>
      <h2>AND</h2>
      <h2>HEALTH</h2>
      <Underline color="white" />
    </>
  )
}

const Left = () => {
  return <LeftPartContainer Component={Content} />
}

export default Left
