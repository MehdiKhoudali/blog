export default function Features() {

    const Check = <svg className="h-8 p-2 bg-gray-300 rounded-full w-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L9 18L20 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

    return (
        <section className="flex text-center p-4 md:p-8 md:text-left items-center flex-col gap-8">
            <h2 className="font-bold text-5xl text-center p-4 md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#db2777] to-[#e879f9]">A no-code blog website builder</h2>
            <h3 className="text-xl text-center text-gray-500">Eligius allows you to create moderne, advanced, SEO-friendly & optimised blog websites<br />using Notion as your content management system</h3>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Unlimited blogs with Eligius</h3>
                    <p className="text-gray-600 font-regular text-lg">Create as many blogs as you'd like & get advanced analytics and moderne blog websites designs.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Modern designs</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Advanced analytics</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Unlimited blog websites</li>
                    </ul>
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Manage and contact your blog visiors.</h3>
                    <p className="text-gray-600 font-regular text-lg">Get integrated email collecting forms.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Get emails from your users</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Get your visitors emails on your dashboard</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Export different emails</li>
                    </ul>
                </div>
            </div>
            <div className="my-8 flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8">
                <div className="w-full md:w-[50%] flex text-left flex-col gap-5 md:px-8">
                    <h3 className="text-gray-800 font-bold text-4xl">Hight performances & Analytics</h3>
                    <p className="text-gray-600 font-regular text-lg">Focus on yoru imagination, writing & your content, we handle the performances and the SEO.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Articles & posts structured schemas</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Control SEO settings.</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Advanced analytics for your blogs.</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Readers informations.</li>
                    </ul>
                </div>
                <div className="w-full md:w-[50%] h-[400px] rounded-md bg-gray-700"></div>
            </div>
        </section>
    )
}