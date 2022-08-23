import Footer from '@components/layout/Footer' 
import Meta from '@components/Meta'
import Animation from '@components/production/Animation'
import Header from '@components/production/Header'//nav-bar change production to our services 
import OurServices from '@components/production/OurServices'//delete
import ProductionServicing from '@components/production/ProductionServicing'//delete
import SecondSlider from '@components/production/SecondSlider'
import SectionFour from '@components/production/SectionFour' //delete 
import SectionOne from '@components/production/SectionOne'// delete
import SectionThree from '@components/production/SectionThree'//delete
import SectionTwo from '@components/production/SectionTwo'//delete
import Slider from '@components/production/Slider'// -> Content ->PageOne->We work all over Iraq 
import Sound from '@components/production/Sound'
import VFX from '@components/production/VFX'
import VideoProduction from '@components/production/VideoProduction'
import Works from '@components/Works'//our services 


const Production = () => {
  return (
    <>
      <Meta
        description="Production equipment rentals production house examples of work kurdistan and iraq, KRG and KRI, best production quality"
        pageTitle="Production"
      />
      <div >
         <Header />
        {/* <SectionOne />
        <SectionTwo />
        <Slider />
        <SectionThree />
        <Works />
        <SectionFour /> */}
        <OurServices />
        <VideoProduction />
        {/* <PostProduction /> */}
        <VFX />
        {/* <Coloring /> */}
        <Animation />
        {/* <ProductionServicing /> */}
        {/* <Rental /> */}
        <Sound />
        <SecondSlider />
        <Footer />
      </div>
    </>
  )
}

export default Production
