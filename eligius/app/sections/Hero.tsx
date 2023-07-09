import Image from 'next/image';
import JoinWaitlist from '../components/JoinWaitlist'

export default function Hero() {
  return (
    <section className='min-h-[70vh] md:min-h-[100vh] flex flex-col items-center justify-center w-full px-8 py-12 text-center text-white lg:px-20 lg:py-4'>
      <div className='flex flex-col items-center justify-between w-full h-full text-center lg:flex-row lg:text-left'>
        <div
          className='mb-4 w-full lg:w-[50%] lg:h-[70vh] justify-center flex flex-col gap-4 lg:gap-8 font-bold'
          id='hero_big_text'
        >
          <h3 className='leading-[3.5rem] text-gray-700 text-transparent text-[#14b8a6] text-4xl md:text-[50px]'>
            Your content creator
          </h3>
          <h3 className='text-4xl md:text-[50px] text-black'>
            landing page 
          </h3>
          <h3 className='leading-[3.5rem] text-gray-700 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#5E63DE] to-[#8357C6] md:text-[50px]'>
            in seconds
          </h3>
          <p className="text-gray-500 font-normal">A no-code tool for all content creators to<br />help them set up their landing pages and blogs in seconds.</p>
          <JoinWaitlist />
        </div>
        <iframe className='w-full lg:w-[50%] h-full aspect-video rounded-md' src="https://www.youtube.com/embed/Pg9VlCi_XHc" title="Tagu video demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </section>
  );
}