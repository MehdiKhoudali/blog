import { FaAngleRight } from "react-icons/fa";

export default function Pricing() {

    const Check = <svg className="h-8 p-2 bg-gray-300 rounded-full w-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L9 18L20 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

    return (
        <section id="pricing" className="text-center p-8 flex flex-col gap-4 md:gap-8">
            <h2 className="font-bold text-3xl text-center md:text-6xl text-gray-800">Simple pricing, simple decision.</h2>
            <p className="text-gray-500 text-xl">Lifetime deal for joining while the product is being built</p>
            <div className="flex flex-col md:flex-row justify-center px-0 md:px-16 gap-4">
                <div className="text-left p-0 m-4 md:p-8 flex flex-col gap-5 rounded-md w-full md:w-50 hover:scale-[0.9] duration-200">
                    <h3 className="font-bold text-2xl">Basic plan</h3>
                    <p className="text-gray-600">Perfect for small startups and individuals</p>
                    <p className="text-gray-600 font-bold text-xl">49.99$/lifetime</p>
                    <button className="bg-[#8357C6] w-full hover:bg-gray-700 md:px-12 py-4 rounded-full text-white flex justify-center gap-1 hover:gap-2 items-center duration-100"><a className="font-bold text-md">Join the lifetime deal</a><FaAngleRight /></button>
                    <hr className="bg-gray-700 h-[2px]" />
                    <ul className="flex flex-col text-left gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}1 github account</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Dashboard Overview</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Leaderboards</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Collaboration Insights</li>
                    </ul>
                </div>
                <div className="text-left p-0 m-4 md:p-8 flex flex-col gap-5 rounded-md w-full md:w-50 hover:scale-[0.9] duration-200">
                    <h3 className="font-bold text-2xl">startup plan</h3>
                    <p className="text-gray-600">Perfect for big startups and enterprises</p>
                    <p className="text-gray-600 font-bold text-xl">Cutom/lifetime</p>
                    <button className="bg-[#8357C6] w-full hover:bg-gray-700 md:px-12 py-4 rounded-full text-white flex justify-center gap-1 hover:gap-2 items-center duration-100"><a className="font-bold text-md">Join the lifetime deal</a><FaAngleRight /></button>
                    <hr className="bg-gray-700 h-[2px]" />
                    <ul className="flex flex-col text-left gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Custom account num</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Custom pricing</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Custom support</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}