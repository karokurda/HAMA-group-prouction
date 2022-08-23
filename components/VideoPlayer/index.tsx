import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('react-player'), { ssr: false })

export default VideoPlayer
