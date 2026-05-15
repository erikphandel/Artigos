import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-gradient-to-br from-gray-400 to-white py-8 border-solid border-gray-400 border-b-10 shadow-xl px-50">
            <Link href="/" className="text-6xl font-bold mb-4 text-gray-800">
                Tecnologias modernas
            </Link>
            <p className="text-lg text-gray-800">
                O seu lugar para aprender sobre as tecnologias mais modernas.
            </p>
        </header>
    )
}
