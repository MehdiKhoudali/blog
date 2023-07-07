import Image from "next/image";

import JoinWaitlist from '../components/JoinWaitlist'

import { FaAngleRight, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="text-center px-4 py-24 flex flex-col justify-center gap-5 md:gap-8">
            <h1 id="hero_h1" className="font-bold text-4xl text-center md:text-7xl text-gray-800">Track <span className="text-[#8357C6]">performances of your <br /> software team</span></h1>
            <p className="text-gray-500 font-medium text-lg text-center">Visualize your software development teams performances and actions just by linkeding your Github account.</p>
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center">
                <JoinWaitlist />
                <button className="bg-transparent border border-[#8357C6] md:px-12 py-4 rounded-full text-[#8357C6] flex justify-center gap-2 hover:scale-[0.9] items-center duration-100"><a className="font-bold text-md">Contact sales</a><FaAngleRight /></button>
            </div>
        </section>
    )
}