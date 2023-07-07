import JoinWaitlist from '../components/JoinWaitlist'

export default function Cta() {
	return (
		<section className="w-full flex flex-col gap-8 justify-center text-center py-8 px-4 md:px-32">
			<h2 className="text-4xl font-bold">Ready to scale with us ?</h2>
			<p className="text-gray-600">Join the waitlist, we will reach you with a special lifetime deal pricing offer.</p>
			<JoinWaitlist />
		</section>
	)
}