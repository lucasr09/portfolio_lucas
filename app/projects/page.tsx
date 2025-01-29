import React from "react";

export default function Projects() {
    const projects = [
    {
        title: "Smart Web App",
        description: "A simple app that uses smart technology to make your life easier.",
        image: "/smartweb.jpg", // Correct path
        link: "/projects/smart-web-app",
    },
    {
        title: "Online Shopping Platform",
        description: "A fast and modern website to shop for your favorite products.",
        image: "/ecommerce-platform.jpg",
        link: "/projects/online-shopping",
    },
    {
        title: "Creative Portfolio",
        description: "A place to show and discover amazing creative projects.",
        image: "/creative-portfolio.jpg",
        link: "/projects/creative-portfolio",
    },
];


    return (
        <section id="projects" className="min-h-screen bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 mt-6 text-center">My Projects</h2>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="project-tile bg-gray-700 p-4 rounded shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded"
                            />
                            <h3 className="text-2xl mt-4 font-bold">{project.title}</h3>
                            <p className="mt-2 text-gray-400">{project.description}</p>
                            <a
                                href={project.link}
                                className="text-yellow-500 mt-4 inline-block hover:underline"
                            >
                                See more →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Upcoming Projects Section */}
                <div className="mt-12 text-center">
                    <h3 className="text-3xl font-bold mb-4 text-yellow-400">Coming Soon!</h3>
                    <p className="text-gray-400">
                        i am working on fun and useful projects that will help you in everyday life. Stay tuned for updates!
                    </p>
                </div>
            </div>
        </section>
    );
}
