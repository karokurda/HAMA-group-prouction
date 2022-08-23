import { FC, ReactNode } from 'react'

const Container: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`p-5 max-w-8xl mx-auto ${className}`}>{children}</div>
}

export default Container
