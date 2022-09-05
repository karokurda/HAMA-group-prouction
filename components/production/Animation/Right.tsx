import useFullScreen from '@hooks/useFullScreen'

const Right = () => {
  const { fullScreen, ref } = useFullScreen()

  return (
    <div onClick={fullScreen} className="w-full" id="ani">
      <video
        ref={ref}
        className=" w-full xl:h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
        id="animation video"
        style={{
          zIndex: -999,
        }}
      >
        <source
          src="https://hama-group.s3.eu-central-1.amazonaws.com/vids/tishk_net_animation.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Right
