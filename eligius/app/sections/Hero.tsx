import Image from 'next/image';
import JoinWaitlist from '../components/JoinWaitlist'

export default function Hero() {
  return (
    <section className='dark:bg-white min-h-[70vh] md:min-h-[100vh] flex flex-col items-center justify-center w-full px-4 py-12 text-center text-white lg:px-20 lg:py-4'>
      <div className='flex flex-col gap-8 items-center justify-between w-full h-full text-center'>
        <div
          className='mb-4 w-full lg:h-[70vh] justify-center flex flex-col gap-4 lg:gap-8 font-bold'
          id='hero_big_text'
        >
          <h2 className='leading-[4rem] md:leading-[5.5rem] text-gray-700 text-4xl md:text-[50px]'>
           The tool for innovators to validate and scale their SaaS <span className='text-[#22c55e]'>as fast as possible</span>
          </h2>
          <p className="text-gray-500 font-normal">A no-code tool for all indie-hacker to<br />present their product in a modern landing page and validate it.</p>
          <div className="md:flex flex-col justify-center mx-auto hidden"><JoinWaitlist /></div>
          <div className="md:hidden block"><JoinWaitlist /></div>
        </div>
        <iframe className='w-full h-full aspect-video rounded-md' src="https://www.youtube.com/embed/Pg9VlCi_XHc" title="Tagu video demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </section>
  );
}