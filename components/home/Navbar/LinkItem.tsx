import Link from "next/link"
import { FC, useRef } from "react"
import { useHoverDirty } from "react-use"

const LinkItem: FC<{ link: string; label: string }> = ({ label, link }) => {
  const ref = useRef(null)
  const hovered = useHoverDirty(ref)

  return (
    <Link href={link}>
      <a
        ref={ref}
        className="uppercase text-white hover:text-primary-yellow-1 duration-100 font-light "
        style={{ zIndex: 999 }}
        
      >
        
        {label}
        <div
        
          className={`h-[3px] duration-200 mt-[2px] bg-primary-yellow-1  ${
            
            hovered ? "w-5" : "w-0"
          }`}
        />
      </a>
      
    </Link>
    
  )
}

export default LinkItem
