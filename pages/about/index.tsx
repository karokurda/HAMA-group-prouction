import Meta from '@components/Meta'
import About from '../../components/about/About'
import Header from '../../components/about/Header'
import Offices from '../../components/about/Offices'
import Section from '../../components/about/Section'
import Footer from '../../components/layout/Footer'

const about = () => {
  return (
    <>
      <Meta
        pageTitle="About Us"
        description="The best agency and first and oldest advertising agency in all of Iraq and Kurdistan"
      />
      <div className="overflow-hidden">
        <Header />
        <About />
        {/* <Section /> */}
        <Offices />
        <Footer />
      </div>
    </>
  )
}

export default about
