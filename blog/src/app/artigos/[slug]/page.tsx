import { artigosJson } from "@/lib/artigos";
import { Metadata } from "next";

export async function generateStaticParams() {
    return artigosJson.map((artigo) => ({
        slug: artigo.slug,
    }));
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { slug } = await params;
    const artigo = artigosJson.find(artigo => artigo.slug === slug);
    
    return {
        title: artigo ? `${artigo?.titulo} - Tecnologias modernas` : 'Artigo não encontrado',
        description: `${artigo?.conteudo?.slice(0, 150)}...`,
    }
}

type Props = {
    params: Promise<{ slug: string }>
};

export default async function ArtigoPage({ params }: Props) {
    const { slug } = await params;
    const details = artigosJson.find(artigo => artigo.slug === slug);

    if (!details) {
        return <p>Artigo não encontrado</p>
    } return (
        <div key={details.id} className="container mx-auto px-4 py-8">
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