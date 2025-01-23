"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 text-white z-10 backdrop-blur-md">
            <div className="w-full max-w-6xl mx-auto px-4 py-2">
                {/* Logo */}
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold hover:text-yellow-500">
                        LR
                    </Link>

                    {}
                    <div className="flex space-x-8">
                        <Link href="/projects" className="hover:underline text-lg">
                            Projects
                        </Link>
                        <Link href="/over-mij" className="hover:underline text-lg">
                            About me
                        </Link>
                        <Link href="/contact" className="hover:underline text-lg">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
