import useFullScreen from '@hooks/useFullScreen'
import Link from 'next/link'
const  Right = () => {
  const { fullScreen, ref } = useFullScreen()

  return (
    <div onClick={fullScreen} className="w-full" id="videopr">
      <video
        ref={ref}
        className="w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
        id="myVideo"
        style={{
          zIndex: -999,
        
        }}
      >
        <source
          src="https://hama-group.s3.eu-central-1.amazonaws.com/vids/hama_showrel.mp4"
          type="video/mp4"
        />
        
      </video>
     
    </div>
  )
}

export default Right
