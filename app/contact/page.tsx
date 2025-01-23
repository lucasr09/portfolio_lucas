'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('Email sent successfully!');
            } else {
                setStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-6 pt-24">
            <div className="max-w-6xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Form Section */}
                    <div className="p-8 bg-gray-50">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Get in Touch</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-3 block w-full border border-gray-300 rounded-lg text-black focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-3 block w-full border border-gray-300 rounded-lg text-black focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 p-3 block w-full border border-gray-300 rounded-lg text-black focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {status && <p className="text-center mt-4 text-gray-800">{status}</p>}
                    </div>
                    {/* Contact Info Section */}
                    <div className="p-8 bg-white flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
                        <p className="text-gray-600 mb-2">
                            Email:{" "}
                            <a href="mailto:lucasrensen@outlook.com" className="text-blue-500 hover:underline">
                                lucasrensen@outlook.com
                            </a>
                        </p>
                        <p className="text-gray-600 mb-6">
                            Phone:{" "}
                            <a href="tel:+31633137293" className="text-blue-500 hover:underline">
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
        </div>
    );
};

export default Contact;
