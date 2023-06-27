"use client"

import { useState } from "react"
import Image from "next/image"

import Logo from '../assets/eligius_logo.png';

export default function NavBar() {
    const [Open, setOpen] = useState(false)
    return (
        <section className="w-full items-center top-0 left-0">
            <nav className="flex justify-between px-4 md:px-12 py-2 md:py-4 items-center">
                <h2 className="text-[20px] text-gray-800 font-bold"><Image alt="Track the performances of your software team with leaderboards." className="w-[120px]md:w-[175px] md:h-[65px]" src={Logo} /></h2>
                <ul className='gap-4 md:gap-8 items-center hidden md:flex'>
                    <li><a href="#pricing" className="font-medium">Pricing</a></li>
                    <li><a href="#features" className="font-medium">Features</a></li>
                    <li className="bg-[#8357C6]  font-medium text-white py-2 px-4 md:px-8 rounded-full hover:bg-[#6945A0] hover:text-white"><a href="#">Join Waitlist</a></li>
                </ul>
                <button className="block md:hidden bg-cyan-100 px-8 py-2 rounded-md shadow-lg" onClick={() => setOpen(!Open)}>Menu</button>
            </nav>
            <div className= {Open ? 'flex md:hidden left-0 py-8 px-4 h-full flex-col gap-4 px-2 items-center text-center duration-300 w-full rounded-md' : 'hidden'}>
                <ul className='gap-4 md:gap-8 items-center flex flex-col w-full'>
                    <li><a href="#pricing" className="w-full py-4 font-medium">Pricing</a></li>
                    <li><a href="#features" className="w-full py-4 font-medium">Features</a></li>
                    <li className="bg-[#8357C6] w-full font-medium text-white py-4 px-4 md:px-8 rounded-full hover:bg-[#6945A0] hover:text-white"><a href="#">Join Waitlist</a></li>
                </ul>
            </div>
        </section>
    )
}