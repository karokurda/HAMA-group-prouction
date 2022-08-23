import Left from './Left'
import Right from './Right'

const Branding = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/digital/branding.jpg)',

        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="min-h-screen flex flex-col lg:flex-row justify-center"
    >
      <Left />
      <Right />
    </div>
  )
}

export default Branding
