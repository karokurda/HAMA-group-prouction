import Branding from '@components/digital/Branding'
import ContentMarketing from '@components/digital/ContentMarketing'
import Digital from '@components/digital/Digital'
import DigitalStrategy from '@components/digital/DigitalStrategy'
import Header from '@components/digital/Header'
import Monitoring from '@components/digital/Monitoring'
import Prepare from '@components/digital/Prepare'
import Services from '@components/digital/Services'
import SocialMediaManagement from '@components/digital/SocialMediaManagement'
import Footer from '@components/layout/Footer'

const DigitalPage = () => {
  return (
    <div>
      <Header />
      <Prepare />
      <Digital />
      <Services />
      <Branding />
      <SocialMediaManagement />
      <DigitalStrategy />
      <Monitoring />
      <ContentMarketing />
      <Footer />
    </div>
  )
}

export default DigitalPage
