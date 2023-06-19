import Image from "next/image"

import Logo from '../assets/logo.png';

export default function NavBar() {
    return (
        <nav className="flex justify-between px-4 md:px-12 py-2 md:py-4 items-center">
            <h1 className="text-[20px] text-gray-800 font-bold"><Image alt="Turn notion content to blogs" className="h-[6rem] w-[11rem]" src={Logo} /></h1>
            <ul className="flex gap-4 md:gap-8 items-center">
                <li><a href="#" className="font-medium">Pricing</a></li>
                <li className="bg-gray-800 font-medium text-white py-2 px-4 md:px-8 rounded-lg hover:bg-gray-700 hover:text-white"><a href="#">Join Waitlist</a></li>
            </ul>
        </nav>

    )
}