import { FC } from 'react'
import { IInputProps } from './Input.types'

const Input: FC<IInputProps> = ({
  placeholder,
  error,
  success,
  onChange,
  value,
  required = false,
  className,
  ...rest
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type="text"
      className={`px-5 mt-1 text-xl w-full py-4 border-2  bg-gray-100 outline-none ${
        success
          ? 'border-primary-yellow-1'
          : error
          ? 'border-primary-red-1'
          : 'border-gray-200'
      } ${className}`}
      {...rest}
    />
  )
}

export default Input
