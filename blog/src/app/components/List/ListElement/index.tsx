import { Artigo } from '@/types/types'
import Link from 'next/link'

export default function ListElement({artigo}: { artigo: Artigo }) {
    const {id, titulo, autor, dataPublicacao, palavrasChave} = artigo
    return (
        <div key={id}>
            <Link className="text-gray-600 text-4xl hover:text-blue-500" href={`/artigos/${id}`}>{titulo}</Link>
            <p className="text-gray-600">{autor}</p>
            <p className="text-gray-500">{dataPublicacao}</p>
            <ul className="flex flex-wrap gap-2">
                {palavrasChave.map((palavra: string) => (
                    <li key={palavra} className="text-blue-500 cursor-pointer underline">
                        {palavra}
                    </li>
                ))}
            </ul>
        </div>
    )
}