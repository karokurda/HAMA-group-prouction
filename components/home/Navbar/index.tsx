import Link from 'next/link'
import HamaLogo from '../../layout/HamaLogo'
import LinkItem from './LinkItem'
import ListButton from './ListButton'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blend-black ">
      <Link href={'/'}>
        <a>
          <HamaLogo />
        </a>
      </Link>
      <div
        style={{ zIndex: 9999 }}
        className="hidden lg:flex items-center font-helvetica-light tracking-widest justify-between gap-10 "
      >
        <LinkItem label="HOME" link="/" />
        
        <LinkItem label="About Us" link="/about" />
        {/* <WhatWeDoButton /> */}

        <LinkItem label="our services " link="/production" />
        <LinkItem label="Media" link="/media" />
        {/* <LinkItem label="Careers" link="/careers" /> */}
        <LinkItem label="Contact us" link="/contact" />
      </div>

      <ListButton />
    </div>
  )
}

export default Navbar
