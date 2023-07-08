import Image from "next/image";

import JoinWaitlist from '../components/JoinWaitlist';

import { FaAngleRight, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="h-[100vh] text-center px-4 bg-gradient-to-br from-transparent via-purple-300 to-transparent py-24 flex flex-col justify-center gap-5 md:gap-8">
            <h1 id="hero_h1" className="font-bold text-4xl text-center md:text-7xl text-gray-800">Your <span className="text-[#8357C6]">content creator landing <br /> page</span> in second</h1>
            <p className="text-gray-500 font-medium text-lg text-center">Create your own landing page faster than the light, with drag & drop, collect emails from your visitors, and share it.</p>
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center">
                <JoinWaitlist />
            </div>
        </section>
    )
}