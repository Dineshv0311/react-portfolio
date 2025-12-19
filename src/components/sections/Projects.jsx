import { RevealOnScroll } from "../RevealOnScroll"

export const Projects=()=>{
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold">
                            CryptoTransfer
                        </h3>
                        <p className="mt-2 mb-4 text-gray-400">
                            A decentralized application (dApp) that enables users to send and receive cryptocurrency
                        </p>
                        <div>
                            {["React", "Solidity", "Web3.js", "Tailwind CSS"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items=center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pl-1">View Projects →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold">
                            FastApi-ToDo
                        </h3>
                        <p className="mt-2 mb-4 text-gray-400">
                            A task management application built with FastAPI and React for efficient to-do list handling.
                        </p>
                        <div>
                            {["React", "Solidity", "Web3.js", "Tailwind CSS"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items=center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pl-1">View Projects →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold">
                            ChatBot using Ollama
                        </h3>
                        <p className="mt-2 mb-4 text-gray-400">
                            An AI-powered chatbot application leveraging Ollama's language models for natural conversations.
                        </p>
                        <div>
                            {["React", "Solidity", "Web3.js", "Tailwind CSS"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items=center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pl-1">View Projects →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold">
                            DevOps Pipeline Automation
                        </h3>
                        <p className="mt-2 mb-4 text-gray-400">
                            A DevOps pipeline automation tool for streamlining CI/CD processes.
                        </p>
                        <div>
                            {["React", "Solidity", "Web3.js", "Tailwind CSS"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items=center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pl-1">View Projects →</a>
                        </div>
                    </div>

                </div>

            </div>
            </RevealOnScroll>
        </section>
    )
}