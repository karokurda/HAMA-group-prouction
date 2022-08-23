import { FC } from "react"

export interface ISectionContainerProps {
  reverse?: boolean
  image?: string
  Component: FC<any>
  bgColor: "yellow" | "blue" | "green" | "orange"
}
