
import JoinWaitlist from '../components/JoinWaitlist'

export default function Features() {
    const Check = <svg className="h-8 p-2 bg-gray-300 rounded-full w-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L9 18L20 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    return (
        <section id="features" className="flex text-center p-4 md:p-8 md:text-left items-center flex-col gap-8">
            <h2 className="font-bold text-4xl text-center md:text-6xl text-gray-800">Toolkit for data-driven software teams</h2>
            <h3 className="md:text-xl text-center text-gray-500">Supercharge your development team's performances. Gain valuable insights, foster collaboration, <br /> and drive productivity.Achieve development excellence with our all-in-one solution.</h3>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Dashboard Overview</h3>
                    <p className="text-gray-600 font-regular text-lg">Gain insights into your team's performance. Stay informed about commits, pull requests, reviews, and merged code for better decision-making, productivity, and collaboration.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Key Metrics</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Visual Representation</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Data Export</li>
                    </ul>
                    <JoinWaitlist />
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Leaderboards</h3>
                    <p className="text-gray-600 font-regular text-lg">Spark friendly competition and honor high-achievers with dynamic leaderboards. Recognize top contributors in commits, pull requests, reviews, and merged code. Foster a culture of excellence, collaboration, and improvement within your team.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Metric Selection</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Clear Ranking Criteria</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Graphical Representation</li>
                    </ul>
                    <JoinWaitlist />
                </div>
            </div>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Collaboration Insights</h3>
                    <p className="text-gray-600 font-regular text-lg">Maximize collaboration with Collaboration Insights. Track and analyze pull requests, contributions, and collaboration metrics to foster a productive development environment. Our peer recognition system inspires appreciation and motivates your team to excel.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Pull Request Analysis</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Team Contribution Tracking</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Collaboration Metrics</li>
                        <JoinWaitlist />                    
                    </ul>
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
        </section>
    )
}