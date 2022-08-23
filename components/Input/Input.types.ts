import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react"

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string
  error?: boolean
  success: boolean
  required?: boolean
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
