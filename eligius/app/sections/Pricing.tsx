export default function Pricing() {

    const Check = <svg className="h-8 p-2 bg-gray-300 rounded-full w-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L9 18L20 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

    return (
        <section className="text-center p-8 flex flex-col gap-8">
            <h2 className="font-bold text-5xl text-center p-4 md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#06b6d4]">Simple pricing, simple decision.</h2>
            <p className="text-gray-500 text-xl">Lifetime deal for joining while the product is being built</p>
            <div className="flex flex-col md:flex-row justify-center px-0 md:px-16 gap-4">
                <div className="border text-left border-gray-400 p-8 flex flex-col gap-5 rounded-md w-full md:w-50">
                    <h3 className="font-bold text-2xl">Premium plan</h3>
                    <p className="text-gray-600">Perfect for entrepreneurs and content creators</p>
                    <p className="text-gray-600 font-bold text-xl">59$/lifetime</p>
                    <ul className="flex flex-col text-left gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}All features</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Lifetime pricing</li>
                    </ul>
                    <button className="p-4 w-full bg-gray-800 rounded-md text-white">Join the deal</button>
                </div>
                <div className="border text-left border-gray-400 p-8 flex flex-col gap-5 rounded-md w-full md:w-50">
                    <h3 className="font-bold text-2xl">Entreprise plan</h3>
                    <p className="text-gray-600">Perfect for entreprises and agencies</p>
                    <p className="text-gray-600 font-bold text-xl">Custom/lifetime</p>
                    <ul className="flex flex-col text-left gap-4">
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Custom support</li>
                        <li className="flex gap-2 items-center font-medium text-gray-700">{Check}Custom pricing</li>
                    </ul>
                    <button className="p-4 w-full bg-gray-800 rounded-md text-white">Join the deal</button>
                </div>
            </div>
        </section>
    )
}