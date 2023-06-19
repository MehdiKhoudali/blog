import Image from "next/image";

import Banner from '../assets/banner.png';

export default function Hero() {
    return (
        <section className="text-center p-8 flex flex-col gap-12">
            <h1 className="font-bold text-5xl text-center md:text-7xl text-gra-800">Notion to blog in seconds</h1>
            <p className="text-gray-500 font-medium text-lg text-center">Create SEO-friendly blog websites for your content using Notion as a CMS,<br />focus on writing, we handle everything, from design to code.</p>
            <div className="flex flex-col gap-8 md:gap-4 md:flex-row justify-center">
                <button className="bg-gray-800 hover:bg-gray-700 md:px-12 py-4 rounded-lg text-white"><a className="font-bold text-md">Join the waitlist</a></button>
                <button className="bg-transparent border border-gray-700 md:px-12 py-4 rounded-lg text-gray-700"><a className="font-bold text-md">Book a call with us</a></button>
            </div>
            <Image className="p-0 md:p-24 rounded-md" src={Banner} />
        </section>
    )
}