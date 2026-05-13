import { Artigo } from '@/types/types'
import Link from 'next/link'

export default function ListElement({artigo}: { artigo: Artigo }) {
    const {id, titulo, autor, dataPublicacao, palavrasChave} = artigo
    return (
        <div key={id}>
            <Link href={`/artigos/${id}`}>{titulo}</Link>
            <p>{autor}</p>
            <p>{dataPublicacao}</p>
            <ul className="flex flex-wrap gap-2">
                {palavrasChave.map((palavra: string) => (
                    <li key={palavra} className="bg-blue-500 text-white px-3 py-1 rounded-full">
                        {palavra}
                    </li>
                ))}
            </ul>
        </div>
    )
}