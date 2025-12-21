import { RevealOnScroll } from "../RevealOnScroll"

export const Home=()=>{
    return(
        <section id="home" className="min-h-screen flex justify-center items-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
                        Hi there, I'm <span className="text-white">Dinesh</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I’m a Computer Science student and aspiring software developer with a strong interest in 
                        full-stack development and Web3 technologies. I enjoy building clean, interactive user 
                        interfaces and exploring how blockchain can shape the future of decentralized applications. 
                        Every day, I focus on learning, experimenting, and turning ideas into real projects.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-blue-500 text-white py-2 px-4 mt-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View projects</a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-2 px-4 mt-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact me</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}