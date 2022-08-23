import Image from 'next/image'
import Container from '../../layout/Container'
import Underline from '../../Underline'

const Right = () => {
  return (
    <Container className="lg:w-1/2 w-full min-h-screen flex justify-center items-center">
      <div className="text-4xl text-primary-purple-1 w-full max-w-3xl">
        <Image
          src="/images/media/logo-1.png"
          width={50}
          height={50}
          alt="media logo"
        />
        <h2>
          HAMA <span className="font-bold font-helvetica-bold">MEDIA</span>{' '}
        </h2>
        <Underline color="purple" />

        <div className="mt-10 text-xl leading-relaxed font-helvetica-condensed text-black">
          <p>At HAMA Media, we are full-service agency for media</p>
          <p>research, planning, buying and monitoring. We offer over 12</p>
          <p>years of experience in planning and buying multi-media and</p>
          <p>multi market advertising campaigns, promotions development</p>
          <p>and creative production assistance.</p>
          <p>Integrating media strategy, planning, buying, tactics and</p>
          <p>negotiations seamlessly across all media sources is a </p>
          <p>challenging and delicate task, one for which brand managers</p>
          <p>rarely have the bandwidth.</p>
        </div>
      </div>
    </Container>
  )
}

export default Right
