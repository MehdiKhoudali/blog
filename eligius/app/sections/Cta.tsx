import JoinWaitlist from '../components/JoinWaitlist'

export default function Cta() {
	return (
		<section className="h-[70vh] text-center px-4 bg-gradient-to-br from-transparent via-purple-300 to-transparent py-24 flex flex-col justify-center gap-5 md:gap-8">
            <h1 id="hero_h1" className="font-bold text-2xl text-center md:text-7xl text-gray-800">Publish your website<br />in seconds !</h1>      
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center">
                <JoinWaitlist />
            </div>
        </section>
	)
}