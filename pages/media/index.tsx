import Footer from '@components/layout/Footer'
import Header from '@components/media/Header'
import MediaMonitoring from '@components/media/MediaMonitoring'
import MediaPlanning from '@components/media/MediaPlanning'
import SectionOne from '@components/media/SectionOne'
import SectionTwo from '@components/media/SectionTwo'
import Services from '@components/media/Services'
import StartYourCampaign from '@components/media/StartYourCampaign'
import Meta from '@components/Meta'

const media = () => {
  return (
    <>
      <Meta
        pageTitle="Media"
        description="top media buying, media monitoring, media planning traditional and OOH and TV, radio and digital media agency company in Kurdistan and Iraq and KRG"
      />
      <div>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Services />
        <MediaPlanning />
        <MediaMonitoring />
        <StartYourCampaign />
        <Footer />
      </div>
    </>
  )
}

export default media
