import BeABrand from '../../components/creative/BeAbrand'
import Creative from '../../components/creative/Creative'
import Gallery from '../../components/creative/Gallery'
import Grow from '../../components/creative/Grow'
import Header from '../../components/creative/Header'
import SectionOne from '../../components/creative/SectionOne'
import SectionTwo from '../../components/creative/SectionTwo'
import Services from '../../components/creative/Services'
import Footer from '../../components/layout/Footer'

const creative = () => {
  return (
    <div>
      <Header />
      <BeABrand />
      <Creative />
      <SectionOne />
      <SectionTwo />
      <Services />
      <Gallery />
      <Grow />
      <Footer />
    </div>
  )
}

export default creative
