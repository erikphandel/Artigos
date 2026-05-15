import { artigosJson } from "@/lib/artigos";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `{$artigosJson.find(artigo => artigo.id == id)?.titulo} - Tecnologias modernas`,
    description: `{artigosJson.find(artigo => artigo.id == id)?.conteudo.slice(0, 150)}...`,
}

export default async function ArtigoPage({ params }: { params: Promise<{ id: number } >}) {
    const { id } = await params;
    const details = artigosJson.find(artigo => artigo.id == id);

    if (!details) {
        return <p>Artigo não encontrado</p>
    } return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-gray-600 text-4xl">{details.titulo}</h1>
            <p className="text-gray-600">{details.autor}</p>
            <p className="text-gray-500">{details.dataPublicacao}</p>
            <p className="text-gray-700">{details.conteudo}</p>
            <ul className="flex flex-wrap gap-2">
                {details.palavrasChave.map((palavra: string) => (
                    <li key={palavra} className="text-blue-500 cursor-pointer underline">
                        {palavra}
                    </li>
                ))}
            </ul>
        </div>
    )
}