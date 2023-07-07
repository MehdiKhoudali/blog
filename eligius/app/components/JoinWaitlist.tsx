import { FaAngleRight } from "react-icons/fa"

export default function JoinWaitlist() {
	return (
		<button className="bg-[#8357C6] hover:bg-[#6945A0] md:px-12 py-4 rounded-full text-white flex justify-center gap-2 hover:gap-4 hover:scale-[0.9] items-center duration-100"><a className="font-bold text-md">Join the waitlist</a><FaAngleRight /></button>
	)
}