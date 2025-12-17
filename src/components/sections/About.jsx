export const About = () => {

    const frontendSkills = [
        "React",
        "Vue",
        "TypeScript",
        "Tailwind CSS",
        "Svelte",
    ];

    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

    return(
        <section
        id="#about"
        className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"> 
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-3">
                        I’m Dinesh, a Computer Science student passionate about building modern web experiences 
                        and solving problems through code. I enjoy working with React, Tailwind CSS, and Web3 
                        technologies to create projects that are both functional and visually appealing.
                        <br /><br />
                        Alongside development, I actively practice data structures and algorithms to sharpen 
                        my logical thinking and prepare for product-based roles. I believe in learning deeply — 
                        understanding not just <span className="text-blue-400">what works</span>, but 
                        <span className="text-blue-400"> why it works</span>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    )
} 