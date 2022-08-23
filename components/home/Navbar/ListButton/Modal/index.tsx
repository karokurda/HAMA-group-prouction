import { useClickOutside } from '@mantine/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useRef } from 'react'
import { useHoverDirty } from 'react-use'

const Modal: FC<{ close: () => void; show: boolean }> = ({ close, show }) => {
  const ref = useClickOutside(close)

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          key={`nav_modal`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          ref={ref}
          className="absolute items-center flex flex-col gap-6 uppercase text-xl text-center bg-primary-gray-1 right-0 top-12 w-52 ring-0 text-white p-5 py-7"
        >
          <ModalItem label="Home" href="/" />
          <ModalItem label="About Us" href="/about" />
          <ModalItem label="our services " href="/production" />
          <ModalItem label="Media" href="/media" />
          <ModalItem label="Contact Us" href="/contact" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ModalItem: FC<{ label: string; href: string }> = ({ href, label }) => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  return (
    <Link href={href}>
      <a
        ref={ref}
        className={`cursor-pointer text-left w-2/3 duration-200 font-helvetica-black ${
          hovered ? 'text-primary-yellow-1' : ''
        }`}
      >
        {label}
      </a>
    </Link>
  )
}

export default Modal
