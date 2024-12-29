'use client';

import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image} from "@nextui-org/react";

const Toolbar: React.FC = () => {
  return (
    <Navbar position='sticky' shouldHideOnScroll isBlurred isBordered className='flex flex-row py-[10px] px-[16px] border-b-[#CCCCCC] bg-white bg-opacity-[50%]'>
      <NavbarBrand>
        <Image isBlurred width={80} height={60} src='/logo.JPG' className='opacity-50 m-5 rounded-[10%]'/>
      </NavbarBrand>
      <NavbarContent className='flex flex-row gap-4' justify='center'>
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