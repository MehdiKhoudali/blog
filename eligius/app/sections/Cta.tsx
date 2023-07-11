import JoinWaitlist from '../components/JoinWaitlist'

export default function Cta() {
	return (
		<section className="mx-4 dark:bg-white rounded-md md:h-[70vh] text-center px-2 bg-white py-24 flex flex-col justify-center gap-5 md:gap-8 md:px-4">
            <h2 id="hero_h1" className="text-center text-gray-800 font-bold text-4xl md:text-[50px] leading-[3.5rem] mx-8">Grow your branding & scale your audience !</h2>  
            <p>Join our waitlist, you will be invited to a private chatroom</p>    
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center">
                <JoinWaitlist />
            </div>
        </section>
	)
}