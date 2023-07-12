
import JoinWaitlist from '../components/JoinWaitlist'

export default function Features() {
    const Check = <svg className="h-8 p-2 bg-gray-300 rounded-full w-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L9 18L20 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    return (
        <section id="features" className="dark:bg-white flex text-center p-4 md:p-8 md:text-left items-center flex-col gap-8">
            <h2 className="font-bold text-4xl text-center md:text-6xl text-gray-800">An easy tool for all <span className='text-[#22c55e]'>indie hackers</span></h2>
            <h3 className="md:text-xl text-center text-gray-500">Validate your idea with a proven framework. This tool guides you through network, waitlist and pre-sales validation with ease.</h3>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Drag & Drop interface</h3>
                    <p className="text-gray-600 font-regular text-lg">Create stunning websites with pre-made sections. Showcase your product, idea, solutions and problem in a modern drag and drop interface with sleek templates.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Drag & drop</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Pre-made sections & templates</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Connect with your visitors</li>
                    </ul>
                    <JoinWaitlist />
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Get in touch with your visitors</h3>
                    <p className="text-gray-600 font-regular text-lg">Collect emails from your visitors, get them direclty on a dashboard, perfect for idea validation with a waitlist for indiehacker.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Email form integration</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Dashboard overview</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Graphical Representation</li>
                    </ul>
                    <JoinWaitlist />
                </div>
            </div>
        </section>
    )
}