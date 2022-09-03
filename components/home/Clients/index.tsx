import Image from 'next/image'
import { useRef } from 'react'
import { useHoverDirty } from 'react-use'
import Container from '../../layout/Container'

const clients = [
  
  {
    name: 'Asiacell',
    img: '/images/clients/1.png',
  },
  {
    name: 'Sprite',
    img: '/images/clients/2.png',
  },
  {
    name: 'Mercedes',
    img: '/images/clients/3.png',
  },
  {
    name: 'UNDP',
    img: '/images/clients/4.png',
  },
  {
    name: 'Zain',
    img: '/images/clients/5.png',
  },
  {
    name: 'Hitachi',
    img: '/images/clients/6.png',
  },
  {
    name: 'Lafarge',
    img: '/images/clients/7.png',
  },
  {
    name: 'Ericsson',
    img: '/images/clients/88.png',
  },
  {
    name: 'Korek',
    img: '/images/clients/9.png',
  },
  {
    name: 'Grand Millennium',
    img: '/images/clients/10.png',
  },
  {
    name: 'Ford',
    img: '/images/clients/11.png',
  },
  {
    name: 'Mahmood tea',
    img: '/images/clients/12.png',
  },
  {
    name: 'Ahmed tea',
    img: '/images/clients/13.png',
  },
  {
    name: 'LG',
    img: '/images/clients/14.png',
  },
  {
    name: 'Gazprom',
    img: '/images/clients/15.png',
  },
  {
    name: 'Toshiba',
    img: '/images/clients/16.png',
  },
  {
    name: 'Altunkaya',
    img: '/images/clients/17.png',
  },
  {
    name: 'Kiri',
    img: '/images/clients/18.png',
  },
  {
    name: 'Al Mudhish',
    img: '/images/clients/19.png',
  },
  {
    name: 'Sanofi',
    img: '/images/clients/20.png',
  },
]

const Clients = () => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  return (
    <div
      style={{
        backgroundImage: 'url(/images/waves.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundPositionY: 250,
      }}
      className="bg-white min-h-screen pb-32 lg:pb-0"
    >
      <Container className="flex mt-20 flex-col lg:flex-row items-center lg:justify-between min-h-screen py-0">
        {/* left */}
        <div className="w-full lg:w-1/2">
          <div
            ref={ref}
            className="flex font-helvetica-pro font-light flex-col text-7xl"
          >
            <div className="uppercase font-semibold">
              <h2>Our</h2>
              <h2>Clients</h2>
            </div>
            <div
              className={`bg-primary-yellow-1 h-2 mt mt-3 mb-5 duration-200 ${
                hovered ? 'w-20' : 'w-10'
              }`}
            />

            {/* <div className="text-lg font-helvetica-pro">
              <p>Our Army of experts will bring ideas to life through</p>
              <p>storytelling, picking moments and a vision for action.</p>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-4  lg:grid-cols-5 w-full mt-10 lg:mt-0 gap-10 sm:gap-10">
          {clients.map((client) => (
            <div className="h-20 " key={client.name}>
              <Image
                width={50}
                height={50}
                src={client.img}
                alt={client.name}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Clients
