'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Button } from '@nextui-org/react'
import { Logo } from './Icons'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const NavbarComponent = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: 'Inicio', path: '/dashboard' },
    { name: 'facturas', path: '/dashboard/bills' },
    { name: 'Usuarios', path: '/dashboard/users' }
  ]

  return (
    <Navbar
      onMenuOpenChange={setOpenMenu}
      height={'10vh'}
      className='border-b border-b-gray-300'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={openMenu ? 'Menu cerrado' : 'Menu abierto'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Logo
            width={100}
            height={100}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className='hidden gap-8 sm:flex'
        justify='center'
      >
        {menuItems.map(({ name, path }, index) => (
          <NavbarItem
            key={index}
            className='text-sm'
            isActive={pathname === path}
          >
            <Link href={path}>{name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end' />
      <NavbarMenu>
        {menuItems.map(({ name, path }, index) => (
          <NavbarMenuItem
            key={`${name}-${index}`}
            isActive={pathname === path}
          >
            <Link
              className='w-full'
              href={path}
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
