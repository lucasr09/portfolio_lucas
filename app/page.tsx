import {Metadata} from "next";
export const metadata: Metadata = {
    title: "portfolio",
    description: "Portfolio in next.js made by Lucas Rensen",
    other: {
        author: "Lucas Rensen",
        language: "en",
    },
    keywords: "Next.js, React, Portfolio, Typescript"
}

export default function Home() {

    return (
        <div className="flex items-center justify-center min-h-screen text-center bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/path/to/your-image.jpg')]">
            <div>
                <h1 className="text-5xl font-bold text-white mb-4">Hello, I am Lucas Rensen</h1>
                <p className="text-3xl font-semibold text-yellow-500">I am a full stack Developer</p>
            </div>
        </div>
    );
}
