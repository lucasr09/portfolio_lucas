// app/Components/Footer/page.tsx
'use client';

import React from "react";

const Footer = () => (
    <footer className="bg-black text-white text-center py-4 relative">
        <p>&copy; {new Date().getFullYear()} </p>
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute top-[-30px] right-6 bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400 transition"
        >
            ↑ Go up
        </button>
    </footer>
);

export default Footer;