import JoinWaitlist from '../components/JoinWaitlist'

export default function Cta() {
	return (
		<section className="md:h-[70vh] text-center px-4 bg-gradient-to-br from-transparent via-purple-300 to-transparent py-24 flex flex-col justify-center gap-5 md:gap-8">
            <h2 id="hero_h1" className="sm:leading-[1.5rem] text-gray-800 font-bold text-[3rem] md:text-6xl">Start and share your landing page now !</h2>      
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center">
                <JoinWaitlist />
            </div>
        </section>
	)
}