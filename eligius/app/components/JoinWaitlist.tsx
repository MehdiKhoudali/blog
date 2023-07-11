import { FaAngleRight, FaArrowRight } from "react-icons/fa"

export default function JoinWaitlist() {
	return (
		<a href='#pricing' className='flex text-center hover:scale-[0.9] justify-center items-center gap-2 p-4 text-[12px] md:text-[14px] font-bold bg-[#22c55e] text-white md:w-[230px] hover:gap-3 duration-200 rounded-full lg:text-[17px] z-50'
	     >
        Join the waitlist <FaArrowRight />
      </a>
	)
}