import useWindowSize from '@hooks/useWindowSize'
import Container from '../../layout/Container'
import Underline from '../../Underline'

const StartYourCampaign = () => {
  const { lg } = useWindowSize()
  return (
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/DSC03377-1+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: lg ? 'center' : '-300px',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex"
    >
      <Container className="min-h-screen flex justify-center items-center w-full lg:w-1/2">
        <div className="w-full uppercase font-helvetica-black text-white font-bold text-5xl sm:text-6xl lg:text-6xl max-w-[26rem] border-8 border-primary-purple-1 p-16">
          <h2>Start</h2>
          <h2>your</h2>
          <h2>Campaign</h2>
          <h2>today</h2>
          <Underline color="purple" />
        </div>
      </Container>
      <div className="hidden lg:flex w-1/2" />
    </div>
  )
}

export default StartYourCampaign
