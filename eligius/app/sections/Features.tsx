import { FaAngleRight } from "react-icons/fa";

export default function Features() {

    const Check = <svg className="h-8 p-2 bg-gray-300 rounded-full w-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L9 18L20 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

    return (
        <section id="features" className="flex text-center p-4 md:p-8 md:text-left items-center flex-col gap-8">
            <h2 className="font-bold text-4xl text-center md:text-6xl text-gray-800">Toolkit for data-driven software teams</h2>
            <h3 className="md:text-xl text-center text-gray-500">Supercharge your development team's performances. Gain valuable insights, foster collaboration, <br /> and drive productivity.Achieve development excellence with our all-in-one solution.</h3>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Dashboard Overview</h3>
                    <p className="text-gray-600 font-regular text-lg">Gain valuable insights into your development team's performance instantly. Stay informed about commits, pull requests, reviews, and merged code, empowering you to make informed decisions for increased productivity and collaboration.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Key Metrics</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Visual Representation</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Data Export</li>
                    </ul>
                    <button className="bg-[#8357C6] hover:bg-[#6945A0] md:px-12 py-4 rounded-full text-white flex justify-center gap-2 hover:gap-4 items-center duration-100"><a className="font-bold text-md">Join the waitlist</a><FaAngleRight /></button>
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Leaderboards</h3>
                    <p className="text-gray-600 font-regular text-lg">Ignite friendly competition and honor your high-achievers with our dynamic leaderboards. Recognize the top contributors who lead the way in commits, pull requests, reviews, and merged code. Foster a culture of excellence, collaboration, and continuous improvement within your development team.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Metric Selection</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Clear Ranking Criteria</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Graphical Representation</li>
                    </ul>
                    <button className="bg-[#8357C6] hover:bg-[#6945A0] md:px-12 py-4 rounded-full text-white flex justify-center gap-2 hover:gap-4 items-center duration-100"><a className="font-bold text-md">Join the waitlist</a><FaAngleRight /></button>
                </div>
            </div>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Collaboration Insights</h3>
                    <p className="text-gray-600 font-regular text-lg">Unlock the power of collaboration with our Collaboration Insights feature. Track and analyze your team's pull requests, contributions, and collaboration metrics to foster a productive and engaging software development environment. With our peer recognition system, inspire a culture of appreciation and motivate your software team to achieve their best</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Pull Request Analysis</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Team Contribution Tracking</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Collaboration Metrics</li>
                        <button className="bg-[#8357C6] hover:bg-[#6945A0] md:px-12 py-4 rounded-full text-white flex justify-center gap-2 hover:gap-4 items-center duration-100"><a className="font-bold text-md">Join the waitlist</a><FaAngleRight /></button>                    
                    </ul>
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
        </section>
    )
}