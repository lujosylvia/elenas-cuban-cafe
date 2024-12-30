'use client';

import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image} from "@nextui-org/react";

const Toolbar: React.FC = () => {
  return (
    <Navbar position='sticky' maxWidth='full' shouldHideOnScroll isBlurred isBordered className='py-[10px] border-b-[#CCCCCC] bg-opacity-[50%]'>
      <NavbarBrand className='flex-1 min-w-[5rem] mr-[3rem] grow-0'>
        <Image isBlurred width={80} height={60} src='/logo.JPG' className='opacity-50 m-5 rounded-[10%]'/>
      </NavbarBrand>
      <NavbarContent className='flex md:hidden' justify='end'>
        <NavbarItem>
        <Link className='text-sm/[12px]' color="foreground" href="/menu">
            MENU
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link className='text-sm/[12px]' color="foreground" href="/order-now">
            ORDER NOW
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='hidden md:flex' justify='start'>
        <NavbarItem>
        <Link className='text-sm/[12px]' color="foreground" href="/menu">
            MENU
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link className='text-sm/[12px]' color="foreground" href="/order-now">
            ORDER NOW
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Toolbar;