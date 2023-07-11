"use client"

import React, { useState } from 'react';
import Link from 'next/link';

import { FaAngleRight, FaBars } from 'react-icons/fa';

import JoinWaitlist from '../components/JoinWaitlist'

const navLinks = [
  { href: '#features', label: 'Features' },
];

export default function Navbar({ areButtonsHidden = false }) {
  const [isOpen, setOpen] = useState(false);

  const NavLink = 'text-[12px] md:text-[15px] lg:text-[18px] mx-2 md:mx-4';

  const handleMenuToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <section className='top-0 left-0 items-center bg-white'>
      <nav className='items-center justify-between hidden px-4 py-2 md:flex md:px-12 md:py-4'>
        <h2 className='text-xl'>ELIGIUS</h2>
        <div className='hidden gap-5 md:items-center md:flex'>
          {navLinks.map((link, index) => (
            <Link className={NavLink} href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
          <JoinWaitlist />
        </div>
      </nav>
      <nav className='flex items-center flex-col gap-4 px-4 py-4 bg-white md:hidden'>
        <div className='flex justify-between items-center w-full'>
          <h2>ELIGIUS</h2>
          <button className='block' onClick={handleMenuToggle}><FaBars /></button>
        </div>
        <div
          className={
            isOpen
              ? 'flex flex-col p-0 gap-16 h-[50%] bg-white text-black rounded-md justify-center text-left w-full z-[100]'
              : 'hidden'
          }
        >
          <div className='flex flex-col gap-5'>
            {navLinks.map((link, index) => (
              <Link
                className='px-2 py-2 rounded-md flex gap-2 w-full justify-between items-center text-[14px]'
                href={link.href}
                key={index}
              >
                {link.label} <FaAngleRight />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
}