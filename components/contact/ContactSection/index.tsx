import ContactUs from './ContactUs'
import PayUsAVisit from './PayUsAVisit'

const ContactSection = () => {
  return (
    <div className="flex flex-col  lg:flex-row">
      <ContactUs />
      <PayUsAVisit />
    </div>
  )
}

export default ContactSection
