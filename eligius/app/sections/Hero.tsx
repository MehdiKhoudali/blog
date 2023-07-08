import Image from "next/image";

import JoinWaitlist from '../components/JoinWaitlist';

import { FaAngleRight, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="md:min-h-[100vh] text-center px-4 bg-gradient-to-br from-transparent via-purple-300 to-transparent py-24 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
            <div className="h-full my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="h-full md:w-[50%] flex text-center md:text-left flex-col gap-10 md:px-8">
                    <h1 className="sm:leading-[1.5rem] text-gray-800 font-bold text-[3rem] md:text-6xl">Your content creator's landing page in seconds</h1>
                    <p className="text-gray-600 font-regular text-lg">A no-code tool for content creators, build your landing page faster than the light, get analytics and collect emails and get in touch with your audience.</p>
                    <JoinWaitlist />
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
        </section>
    )
}