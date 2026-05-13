import { artigosJson } from "@/lib/artigos";

export default async function ArtigoPage({ params }: { params: Promise<{ id: number } >}) {
    const { id } = await params;
    const details = artigosJson.find(artigo => artigo.id == id);

    if (!details) {
        return <p>Artigo não encontrado</p>
    } return (
        <>
            <h1 className="text-3xl font-bold mb-4">{details.titulo}</h1>
            <p>{details.autor}</p>
            <p>{details.dataPublicacao}</p>
            <p>{details.conteudo}</p>
            <ul className="flex flex-wrap gap-2">
                {details.palavrasChave.map((palavra: string) => (
                    <li key={palavra} className="bg-blue-500 text-white px-3 py-1 rounded-full">
                        {palavra}
                    </li>
                ))}
            </ul>
        </>
    )
}