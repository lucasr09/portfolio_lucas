export default function OverMij() {
    const skills = [
        "Testing",
        "Data Structures",
        "Java",
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
    ];

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-6 text-center">Meet Lucas</h1>

            {/* Description */}
            <p className="text-lg text-center leading-relaxed max-w-2xl">
                Hey there 👋, thank you for visiting my page. My name is Lucas, and I enjoy solving problems by writing
                code. Development has been a passion of mine ever since I was young, influenced by my surroundings and
                the love for technology. I continue to challenge myself, learn, and grow while building solutions that
                inspire and help others.
            </p>

            {/* Resume Download Button */}
            <a
                href="/Nederlands%20CV.docx"
                download="CV"
                className="mt-6 inline-block text-lg font-semibold text-gray-800 underline hover:text-yellow-500"
            >
                RESUME
            </a>

            {/* Skills Marquee */}
            <div className="mt-12 w-full overflow-hidden">
                <div className="flex items-center justify-center animate-marquee whitespace-nowrap">
                    {skills.concat(skills).map((skill, index) => (
                        <span
                            key={index}
                            className="mx-8 px-4 py-2 bg-gray-800 text-white rounded-full shadow-md"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
