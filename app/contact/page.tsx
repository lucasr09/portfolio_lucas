"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-6 pt-24">
            <div className="max-w-6xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
                    <p className="text-gray-600 mb-2">
                        Email:{" "}
                        <a
                            href="mailto:rensenlucas1@gmail.com"
                            className="text-blue-500 hover:underline"
                        >
                            rensenlucas1@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-600 mb-6">
                        Phone:{" "}
                        <a
                            href="tel:+31633137293"
                            className="text-blue-500 hover:underline"
                        >
                            +31 6 33137293
                        </a>
                    </p>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Follow Me</h2>
                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/lucas-rensen-b18b40232/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a
                            href="https://github.com/lucasr09/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-800 transition"
                        >
                            <FaGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
