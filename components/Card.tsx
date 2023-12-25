import { HTMLAttributes, ReactNode } from 'react'
import { TRoundedProps } from '../types/global.types'

interface ICardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
  backgroundColor?: string
  textColor?: string
  isRounded?: boolean
  roundedType?: TRoundedProps
  customPadding?: boolean
}

export const Card = ({ children, backgroundColor, textColor, isRounded, className, customPadding, roundedType = 'rounded-xl' }: ICardProps) => {
  return (
    <div
      className={`w-full h-full ${!customPadding && 'p-10'}  ${isRounded && roundedType} ${className}`}
      style={{ backgroundColor, color: textColor }}
    >
      {children}
    </div>
  )
}
