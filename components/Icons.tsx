import { Image } from '@nextui-org/react'
import { HTMLAttributes } from 'react'
import { TRoundedProps } from '../types/global.types'

interface ImageProps extends HTMLAttributes<HTMLElement> {
  src?: string
  width: number | string
  height: number | string
  className?: string
}

interface IconProps extends Omit<ImageProps, 'src'> {
  isRounded?: boolean | undefined
  roundedType?: TRoundedProps
  padding?: string
  withBackground?: boolean | undefined
  backgroundColor?: string | undefined
}

export const Logo = ({ width, height, src = '/LogoPrincipal.png' }: ImageProps) => (
  <Image
    src={src}
    width={width}
    height={height}
    fallbackSrc={`https://placehold.co/83x80`}
    alt='Imagen del logo principal'
  />
)

export const IconOne = ({ width, height, padding = 'p-8', className, backgroundColor, isRounded, withBackground, roundedType }: IconProps) =>
  withBackground ? (
    <div className={`${padding} ${backgroundColor ? backgroundColor : 'bg-white'} ${isRounded && 'rounded-full'} w-fit h-fit ${roundedType} ${className}`}>
      <Image
        src='/acueducto.png'
        alt='Icono de servicios'
        width={width}
        height={height}
      />
    </div>
  ) : (
    <Image
      src='/acueducto.png'
      alt='Icono de servicios'
      width={width}
      height={height}
      className={className}
    />
  )

export const FacebookIcon = () => {
  return (
    <>
      <a
        href='https://www.facebook.com/AlcaldiadeSince'
        target='_blank'
        className='p-0 m-0 '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
          className='p-1 rounded-full shadow-xl'
        >
          <path
            fill='currentColor'
            d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z'
          />
        </svg>
      </a>
    </>
  )
}

export const PhoneCallIcon = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
      >
        <g>
          <path
            d='M10.0759 12.3489C11.104 11.3208 11.104 9.64807 10.0759 8.61999L6.4603 5.00434C5.90724 4.45122 5.14054 4.17096 4.35755 4.23542C3.5895 4.29864 2.89481 4.69016 2.45167 5.3095C2.35968 5.43805 2.27085 5.56848 2.18384 5.69997L9.45433 12.9705L10.0759 12.3489Z'
            fill='black'
          />
          <path
            d='M24.9956 23.5394L21.38 19.9237C20.352 18.8958 18.6791 18.8956 17.651 19.9237L17.0294 20.5454L24.3002 27.8161C24.4317 27.7291 24.5619 27.6399 24.6904 27.548C25.3097 27.1049 25.7012 26.4102 25.7645 25.6421C25.829 24.859 25.5487 24.0926 24.9956 23.5394Z'
            fill='black'
          />
          <path
            d='M14.5436 21.939C13.8392 21.939 13.1772 21.6648 12.6791 21.1668L8.83305 17.3207C8.33506 16.8227 8.06072 16.1605 8.06072 15.4562C8.06072 15.0561 8.14949 14.6698 8.31719 14.3193L1.28582 7.28784C0.296757 9.36458 -0.140938 11.6913 0.0396476 14.0267C0.282987 17.1738 1.64014 20.1301 3.86119 22.3511L7.64881 26.1386C9.86975 28.3596 12.8261 29.7168 15.9732 29.9602C16.317 29.9868 16.6606 30 17.0034 30C18.9883 30 20.941 29.5575 22.712 28.7141L15.6805 21.6826C15.33 21.8503 14.9437 21.939 14.5436 21.939Z'
            fill='black'
          />
          <path
            d='M17.6952 0C17.2098 0 16.8163 0.393516 16.8163 0.878906C16.8163 1.3643 17.2098 1.75781 17.6952 1.75781C23.5107 1.75781 28.2421 6.48914 28.2421 12.3047C28.2421 12.7901 28.6356 13.1836 29.121 13.1836C29.6064 13.1836 29.9999 12.7901 29.9999 12.3047C29.9999 5.51988 24.48 0 17.6952 0Z'
            fill='black'
          />
          <path
            d='M17.6951 12.3039C17.6951 12.3039 17.6952 12.3042 17.6952 12.3047C17.6952 12.7901 18.0887 13.1836 18.5741 13.1836C19.0595 13.1836 19.453 12.7901 19.453 12.3047C19.453 11.3354 18.6644 10.5469 17.6952 10.5469C17.2098 10.5469 16.8163 10.94 16.8163 11.4254C16.8163 11.9108 17.2097 12.3039 17.6951 12.3039Z'
            fill='black'
          />
          <path
            d='M17.6952 8.78906C19.6337 8.78906 21.2108 10.3662 21.2108 12.3047C21.2108 12.7901 21.6043 13.1836 22.0897 13.1836C22.5751 13.1836 22.9686 12.7901 22.9686 12.3047C22.9686 9.39691 20.603 7.03125 17.6952 7.03125C17.2098 7.03125 16.8163 7.42477 16.8163 7.91016C16.8163 8.39555 17.2098 8.78906 17.6952 8.78906Z'
            fill='black'
          />
          <path
            d='M17.6952 3.51562C17.2098 3.51562 16.8163 3.90914 16.8163 4.39453C16.8163 4.87992 17.2098 5.27344 17.6952 5.27344C21.5722 5.27344 24.7264 8.42766 24.7264 12.3047C24.7264 12.7901 25.12 13.1836 25.6053 13.1836C26.0907 13.1836 26.4843 12.7901 26.4843 12.3047C26.4843 7.4584 22.5415 3.51562 17.6952 3.51562Z'
            fill='black'
          />
        </g>
        <defs>
          <clipPath id='clip0_2_903'>
            <rect
              width='30'
              height='30'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export const UbicationIcon = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29'
        height='29'
        viewBox='0 0 29 29'
        fill='none'
      >
        <path
          d='M14.254 0.89209C9.04313 0.89209 4.80371 5.13151 4.80371 10.3423C4.80371 16.8918 14.2632 28.0796 14.2632 28.0796C14.2632 28.0796 23.7042 16.5697 23.7042 10.3423C23.7042 5.13151 19.4649 0.89209 14.254 0.89209ZM17.1053 13.1094C16.3191 13.8954 15.2866 14.2885 14.254 14.2885C13.2215 14.2885 12.1887 13.8954 11.4028 13.1094C9.83051 11.5373 9.83051 8.97914 11.4028 7.40687C12.1641 6.64521 13.1768 6.22571 14.254 6.22571C15.3311 6.22571 16.3436 6.64537 17.1053 7.40687C18.6776 8.97914 18.6776 11.5373 17.1053 13.1094Z'
          fill='black'
        />
      </svg>
    </>
  )
}
export const IconTwo = ({ width, height, padding = 'p-8', className, backgroundColor, isRounded, withBackground, roundedType }: IconProps) =>
  withBackground ? (
    <div className={`${padding} ${backgroundColor ? backgroundColor : 'bg-white'} ${isRounded && 'rounded-full'} w-fit h-fit ${roundedType} ${className}`}>
      <Image
        src='/alcantarilla.png'
        alt='Icono de servicios'
        width={width}
        height={height}
      />
    </div>
  ) : (
    <Image
      src='/acueducto.png'
      width={width}
      alt='Icono de servicios'
      height={height}
      className={className}
    />
  )

export const IconThree = ({ width, height, padding = 'p-8', className, backgroundColor, isRounded, withBackground, roundedType }: IconProps) =>
  withBackground ? (
    <div className={`${padding} ${backgroundColor ? backgroundColor : 'bg-white'} ${isRounded && 'rounded-full'} w-fit h-fit ${roundedType} ${className}`}>
      <Image
        src='/servicios.png'
        alt='Icono de servicios'
        width={width}
        height={height}
      />
    </div>
  ) : (
    <Image
      src='/acueducto.png'
      width={width}
      alt='Icono de servicios'
      height={height}
      className={className}
    />
  )
