import Container from '../../layout/Container'
import Underline from '../../Underline'

const Brief = () => {
  return (
    <div className="bg-primary-gray-2">
      <Container className="py-32">
        <div className="w-full max-w-lg">
          <h2 className="uppercase text-6xl font-bold">Brief</h2>
          <Underline color="yellow" />

          <h2 className="text-4xl font-bold my-3">
            Sound brings movement to life
          </h2>

          <div className="text-lg text-gray-700">
            <p>Having the best studio and the best sound engineers makes</p>
            <p>
              HAMA&apos;s production department the best in the country. We
              bring
            </p>
            <p>movement to life through recording, sound and music mixing.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Brief
