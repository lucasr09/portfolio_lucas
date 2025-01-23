/* projects\page.tsx */
import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "Project Naam 1",
            description: "Korte beschrijving van het project.",
            image: "/Schermopname(522).png",
            link: "/link-to-project1",
        },
        {
            title: "Project Naam 2",
            description: "Korte beschrijving van het project.",
            image: "/path/to/project-image2.jpg",
            link: "/link-to-project2",
        },
        {
            title: "Project Naam 3",
            description: "Korte beschrijving van het project.",
            image: "/path/to/project-image3.jpg",
            link: "/link-to-project3",
        },
    ];

    return (
        <section id="projects" className="min-h-screen bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                {/* Tekst "Mijn Projecten" iets naar beneden geplaatst */}
                <h2 className="text-4xl font-bold mb-6 mt-6 text-center">Mijn Projecten</h2>
                {/* Grid met 3 kolommen */}
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
            </div>
        </section>
    );
}
