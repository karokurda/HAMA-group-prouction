import Separator from '@components/Separator'
import Link from 'next/link'
import { FC, Fragment } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVimeo,
} from 'react-icons/fa'
import Container from '../Container'
import HamaLogo from '../HamaLogo'


const links = [
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Our Services',
    link: '/production',
  },
  {
    name: 'Media',
    link: '/media',
  },
  {
    name: 'Contact us',
    link: '/contact',
  },
]

const Footer = () => {
  return (
    <div className="bg-primary-gray-1 border-t border-gray-500 font-helvetica-condensed">
      <Container className="text-white text-5xl gap-16 font-bold flex flex-col items-center justify-center">
        <div className="mt-10 flex flex-col justify-center items-center gap-1">

          <div >
            {/* <img src="public/images/hama-group-logo.png"   /> */}
          {/* <source src="public/images/hama-group-logo.png"  /> */}
              <HamaLogo />  
          </div>
          <p className="text-xs font-helvetica-light text-gray-200 mr-1 mt-2">
            Powered by HAMA Group
          </p>
        </div>
        {/* links */}

        <LinksDesktop />
        <LinksMobile />

        {/* footer items */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 xl:gap-16 items-center text-sm font-normal justify-between">
          <Separator />
          <div className="items-center gap-16 hidden lg:flex">
            <p>+964 (0) 770 361 4849</p>
            <p>+964 (0) 750 320 4849</p>
          </div>

          <div className="flex items-center gap-5 text-2xl">
            <Link href="https://www.linkedin.com/company/hamagroup">
              <a target={'_blank'}>
                <FaLinkedin />
              </a>
            </Link>

            <Link href="https://www.facebook.com/hamaadvertising/">
              <a target={'_blank'}>
                <FaFacebook />
              </a>
            </Link>

            <Link href="https://vimeo.com/hamagroup">
              <a target={'_blank'}>
                <FaVimeo />
              </a>
            </Link>

            <Link href="https://twitter.com/hamagroup">
              <a target={'_blank'}>
                <FaTwitter />
              </a>
            </Link>

            <Link href="https://www.instagram.com/hamaadvertising">
              <a target={'_blank'}>
                <FaInstagram />
              </a>
            </Link>
          </div>

          <div className="items-center gap-16 hidden lg:flex">
            <p>Iraq - Sulaymaniyah</p>
            <p>Iraq - Erbil</p>
            <Link href="mailto:info@hamafx.com">
              <a>Info@hamafx.com</a>
            </Link>
          </div>
          <Separator />
        </div>
        <ContactMobile />
        {/* copywrite logo */}
        <div className="text-sm text-gray-400 font-normal">
          &copy; Powered by HAMA Group {new Date().getFullYear()}
        </div>
      </Container>
    </div>
  )
}

const ContactMobile = () => {
  return (
    <div className="text-xs lg:hidden flex flex-wrap gap-5 justify-center text-center">
      <p className="col-span-2">+964 (0) 770 361 4849</p>
      <p className="col-span-1">+964 (0) 750 320 4849</p>
      <Link href="mailto:info@hamafx.com">
        <a>Info@hamafx.com</a>
      </Link>
      <p>Iraq - Sulaymaniyah</p>
      <p>Iraq - Erbil</p>
    </div>
  )
}

const LinksMobile = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center lg:hidden text-base font-normal font-helvetica-condensed">
      {links.map((link) => (
        <Link href={link.link} key={link.name}>
          <a className="hover:text-primary-yellow-1 duration-100">
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

const LinksDesktop = () => {
  return (
    <div className="text-lg gap-7 hidden lg:flex font-helvetica-condensed">
      {links.map((link) => (
        <Fragment key={link.link}>
          <LinkItem title={link.name} href={link.link} />
          {/* don't show in last index */}
          {links.indexOf(link) !== links.length - 1 && (
            <div className="h-7 w-[1px] border border-gray-600 rounded-full" />
          )}
        </Fragment>
      ))}
    </div>
  )
}

const LinkItem: FC<{ href: string; title: string }> = ({ href, title }) => {
  return (
    <Link href={href}>
      <a className="font-bold text-white hover:text-primary-yellow-1 duration-200 font-helvetica-condensed">
        {title}
      </a>
    </Link>
  )
}

export default Footer
