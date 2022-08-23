import Meta from '@components/Meta'
import ContactSection from '../../components/contact/ContactSection'
import Header from '../../components/contact/Header'
import Footer from '../../components/layout/Footer'

const contact = () => {
  return (
    <>
      <Meta
        pageTitle="Contact"
        description="Production house hamaadvertising hama group hama advertising sarmad muhammad creativye agency hybrid agency digital film"
      />
      <div>
        <Header />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default contact
