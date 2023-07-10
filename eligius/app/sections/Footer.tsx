import Link from 'next/link';

import JoinWaitlist from '../components/JoinWaitlist'

export default function Footer() {
  return (
    <footer className='flex dark:bg-white flex-col justify-center w-full gap-4 px-4 py-4 pt-24 pb-8 text-center bg-white md:px-16 lg:py-16 md:justify-between xl:flex-row'>
      <div className='flex flex-col gap-8 text-left top-2'>
        <h2 className='text-2xl text-black font-bold'>ELIGIUS</h2>
        <p className='text-gray-500'>
          Your content creator's landing page
          <br />
          in seconds
        </p>
      </div>
      <div className='flex flex-col gap-8 text-left top-2'>
        <h3 className='font-bold text-2xl text-black'>
          Solution
        </h3>
        <Link
          href='#'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Drag & Drop interface
        </Link>
        <Link
          href='#'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Data forms
        </Link>
        <Link
          href='#'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Notion as CMS
        </Link>
      </div>
      <div className='flex flex-col gap-8 text-left top-2'>
        <h3 className='font-bold text-2xl text-black'>
          Enterprise
        </h3>
        <Link
          href='/Terms'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Terms of usage
        </Link>
        <Link
          href='/Privacy'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Privacy policy
        </Link>
        <Link
          href='mailto: mehdikhoudalpro@gmail.com?subject=Contact Us'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Contact
        </Link>
      </div>
      <div className='flex flex-col gap-8 text-left'>
        <h3 className='text-2xl text-black font-bold'>Ready to scale?</h3>
        <p className='text-gray-500'>
          Join ELIGIUS, Build & scale your <br /> content creator's
          landing page <br />
        </p>
        <JoinWaitlist />
      </div>
    </footer>
  );
}
