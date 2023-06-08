export default function Features() {

    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for people like you :)</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Supercharge your productivity with EligiusAI. Effortlessly organize projects with boards, lists, and cards, and enjoy the convenience of our intuitive drag-and-drop interface.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Boards, Lists, and Cards</h3>
                        <p className="text-gray-500 dark:text-gray-400">Create customizable boards to represent projects, lists to organize tasks, and cards to represent individual tasks or items. Easily track and manage the progress of each task within your projects.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Drag-and-Drop Interface</h3>
                        <p className="text-gray-500 dark:text-gray-400">Effortlessly move cards between lists or boards using a simple drag-and-drop interface. This intuitive feature allows for seamless task organization and prioritization.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Smart Task Recommendations</h3>
                        <p className="text-gray-500 dark:text-gray-400">EligiusAI analyzes your project requirements and suggests relevant tasks based on your project goals, team capacity, and deadlines. Say goodbye to the hassle of manually creating tasks - EligiusAI helps you get started with intelligent recommendations.</p>
                    </div>
                </div>
            </div>
        </section>

    )

}