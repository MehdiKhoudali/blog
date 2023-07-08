import Link from 'next/link';

import JoinWaitlist from '../components/JoinWaitlist'
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center w-full gap-4 px-4 py-4 pt-24 pb-8 text-center bg-white md:px-16 lg:py-16 md:justify-between xl:flex-row'>
      <div className='flex flex-col gap-8 text-left top-2'>
        <Logo />
        <p className='text-gray-500'>
          Create comments on any website and boost
          <br />
          productivity and communication.
        </p>
      </div>
      <div className='flex flex-col gap-8 text-left top-2'>
        <h3 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#5E63DE] to-[#A22CFF]'>
          Solution
        </h3>
        <Link
          href='#'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Comments feature
        </Link>
        <Link
          href='#'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Team board feature
        </Link>
        <Link
          href='#'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Discussions & messages
        </Link>
      </div>
      <div className='flex flex-col gap-8 text-left top-2'>
        <h3 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#5E63DE] to-[#A22CFF]'>
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
          href='mailto: tagucontact@gmail.com?subject=Contact Us'
          className='text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5E63DE] hover:to-[#A22CFF]'
        >
          Contact
        </Link>
      </div>
      <div className='flex flex-col gap-8 text-left'>
        <h3 className='text-2xl text-black'>Ready to scale?</h3>
        <p className='text-gray-500'>
          Join TagU, create comments on any website <br /> and tag your team to
          boost productivity and <br /> communication.
        </p>
        <JoinWaitlist />
      </div>
    </footer>
  );
}
