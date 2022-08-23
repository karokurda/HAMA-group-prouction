import Image from 'next/image'
import { useRef } from 'react'
import { useHoverDirty } from 'react-use'
import Container from '../../layout/Container'

const clients = [
  {
    name: 'Asiacell',
    img: '/images/clients/1.jpg',
  },
  {
    name: 'Sprite',
    img: '/images/clients/2.jpg',
  },
  {
    name: 'Mercedes',
    img: '/images/clients/3.jpg',
  },
  {
    name: 'UNDP',
    img: '/images/clients/4.jpg',
  },
  {
    name: 'Zain',
    img: '/images/clients/5.jpg',
  },
  {
    name: 'Hitachi',
    img: '/images/clients/6.jpg',
  },
  {
    name: 'Lafarge',
    img: '/images/clients/7.jpg',
  },
  {
    name: 'Ericsson',
    img: '/images/clients/8.jpg',
  },
  {
    name: 'Korek',
    img: '/images/clients/9.jpg',
  },
  {
    name: 'Grand Millennium',
    img: '/images/clients/10.jpg',
  },
  {
    name: 'Ford',
    img: '/images/clients/11.jpg',
  },
  {
    name: 'Mahmood tea',
    img: '/images/clients/12.jpg',
  },
  {
    name: 'Ahmed tea',
    img: '/images/clients/13.jpg',
  },
  {
    name: 'LG',
    img: '/images/clients/14.jpg',
  },
  {
    name: 'Gazprom',
    img: '/images/clients/15.jpg',
  },
  {
    name: 'Toshiba',
    img: '/images/clients/16.jpg',
  },
  {
    name: 'Altunkaya',
    img: '/images/clients/17.jpg',
  },
  {
    name: 'Kiri',
    img: '/images/clients/18.jpg',
  },
  {
    name: 'Al Mudhish',
    img: '/images/clients/19.jpg',
  },
  {
    name: 'Sanofi',
    img: '/images/clients/20.jpg',
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
            <div className="uppercase">
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
        <div className="grid grid-cols-4 lg:grid-cols-5 w-full mt-10 lg:mt-0 gap-2 sm:gap-10">
          {clients.map((client) => (
            <div className="h-20" key={client.name}>
              <Image
                width={400}
                height={400}
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