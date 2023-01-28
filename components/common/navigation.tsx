import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileTap = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className='place-self-center'>
        {/* Desktop Navigation */}
        <ul className='fixed font-bold text-lg top-1/2 text-center -translate-y-1/2 -translate-x-1/2 hidden uppercase flex-col gap-y-12 lg:flex'>
          <li className='hover:text-red-600 w-20 text-center group hover:tracking-wider transition-all duration-300'>
            <Link href={'/'}>home</Link>
            <div className='hidden lg:block h-[1px] mt-2 bg-red-600 w-0 ml-auto mr-auto group-hover:w-full transition-all duration-300'/>
          </li>
          <li className='hover:text-red-600 w-20 text-center group hover:tracking-wider transition-all duration-300'>
            <Link href={'/about'}>about</Link>
            <div className='hidden lg:block h-[1px] mt-2 bg-red-600 w-0 ml-auto mr-auto group-hover:w-full transition-all duration-300'/>
          </li>
          <li className='hover:text-red-600 w-20 text-center group hover:tracking-wider transition-all duration-300'>
            <Link href={'/blog'}>blog</Link>
            <div className='hidden lg:block h-[1px] mt-2 bg-red-600 w-0 ml-auto mr-auto group-hover:w-full transition-all duration-300'/>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`${
          mobileMenuOpen ? 'backdrop-blur-sm h-screen w-screen bg-black/40' : ''
        } z-0 fixed px-6 bottom-0 right-0 py-8 flex bg-blue- h- w- md:hidden`}
      >
        <div className='flex justify-end items-end flex-col gap-y-4 w-full text-xl'>
          <div className={`${mobileMenuOpen ? '' : 'hidden'}`}>
            <div className=''>
              <ul className='rounded-2xl p- uppercase flex flex-col text-right gap-y-8 [&>*]:py-4 [&>*]:pl-4 [&>*]:bg-'>
                <li
                  onClick={handleMenuItemClick}
                  className='hover:text-red-600 list-none uppercase'
                >
                  <Link href={'/'}>home</Link>
                </li>
                <li
                  onClick={handleMenuItemClick}
                  className='hover:text-red-600'
                >
                  <Link href={'/about'}>about</Link>
                </li>
                <li
                  onClick={handleMenuItemClick}
                  className=' hover:text-red-600'
                >
                  <Link href={'/blog'}>blog</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Hamburger icon */}
          <div
            onClick={handleMobileTap}
            className={`${
              mobileMenuOpen
                ? 'border-red-600 bg-black border-2'
                : 'border-white/80'
            }
          w-fit h-fit self-end ml-auto rounded-full border-2 transition-all duration-1000  backdrop-blur p-3`}
          >
            <HiMenu className='text-3xl text-white' />
          </div>
        </div>

        {/* </div> */}
      </nav>
    </>
  );
}
