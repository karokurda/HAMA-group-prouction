import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { PHONE_NUMBER_1, PHONE_NUMBER_2 } from '@helpers/constants'
import Container from '@components/layout/Container'

const ContactUs = () => {
  return (
    <div className="w-full lg:w-5/12  bg-primary-yellow-1">
      <Container className="flex justify-center  py-20"> 
        <div className="w-full max-w-lg">
          <h2 className="uppercase lg:text-6xl text-4xl font-extrabold font-helvetica-black">
            Contact us
          </h2>

          <div className="h-[6px] w-10 mt-2 ml-1 bg-white" />

          <div className="text-2xl">
            <div className="flex items-center mt-10 gap-5">
              <FaEnvelope className="text-white" />
              <p>
                <a href="mailto:info@hamafx.com">info@hamafx.com</a>
              </p>
            </div>
            <div className="flex mt-10 gap-5">
              <FaPhone className="text-white rotate-90 mt-2" />
              <div className="flex flex-col gap-3">
                <p>
                  <a href={PHONE_NUMBER_1}>+964 770 361 4849</a>
                </p>
                <p>
                  <a href={PHONE_NUMBER_2}>+964 750 361 4849</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactUs
