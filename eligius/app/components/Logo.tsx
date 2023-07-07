import Image from 'next/image'

import logo_eligius from '../assets/eligius_logo.png'

export default function Logo() {
	return (
		<Image 
			alt="Track the performances of your software team with leaderboards." 
			className="w-[120px] md:w-[175px]" 
			src={logo_eligius} 
		/>
	)
}