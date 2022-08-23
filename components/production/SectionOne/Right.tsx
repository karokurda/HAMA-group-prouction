import useWindowSize from '@hooks/useWindowSize'

const Right = () => {
  const { lg } = useWindowSize()

  return (
    <div
      style={{
        backgroundImage:
          'url(https://hama-group.s3.eu-central-1.amazonaws.com/images/Mirror_Production+copy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: lg ? 'centers' : '-300px',
      }}
      className="w-full min-h-screen lg:w-7/12 max-w-full"
    ></div>
  )
}

export default Right
