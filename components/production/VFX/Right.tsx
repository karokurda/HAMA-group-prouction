import useFullScreen from '@hooks/useFullScreen'

const Right = () => {
  const { fullScreen, ref } = useFullScreen()

  return (
    <div
      onClick={fullScreen}
      className="w-full "
      id="VFXX"
    >
      <video
        ref={ref}
        className="w-full  object-cover "
        autoPlay
        muted
        loop
        style={{
          zIndex: -999,
        }}
        playsInline
        poster="/production/outside.jpg"
      >
        <source
          src="https://hama-group.s3.eu-central-1.amazonaws.com/vids/vfx_breakdown.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Right
