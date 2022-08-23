import { FC } from 'react'
import Container from '../../layout/Container'
import { FiMapPin } from 'react-icons/fi'

const Pin = () => <FiMapPin className="text-white" size={40} />

const LocationItem: FC<{ title: string; location: string }> = ({
  title,
  location,
}) => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <Pin />
        <h2 className="lg:text-3xl text-2xl font-bold font-helvetica-bold">
          {title}
        </h2>
      </div>
      <p className="mt-5 font-helvetica-condensed font-medium text-xl">
        {location}
      </p>
    </div>
  )
}

const PayUsAVisit = () => {
  return (
    <div className="w-full lg:w-7/12  bg-primary-yellow-1">
      <Container className="flex justify-center py-20">
        <div className="uppercase font-Helvetica-bold font-bold">
          <h2 className="lg:text-6xl text-4xl font-extrabold font-helvetica-black">
            Pay us a visit
          </h2>
          <div className="h-[6px] w-10 mt-2 bg-white" />

          <div className="mt-10 flex flex-col gap-20">
            <LocationItem
              title="Erbil Office"
              location="Block D, Floor 25 Flat #12, MRF Quadro, Erbil, Iraq"
            />
            <LocationItem
              title="Slemani Office"
              location="Flat #1, 6th Floor, Vania palace Malik Mahmud ring Road, Slemany, Iraq"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PayUsAVisit
