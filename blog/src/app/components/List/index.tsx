import { Artigo } from "@/types/types"
import ListElement from "./ListElement"

type Props = {
    artigos: Artigo[]
}

export default function List({artigos}: Props) {
    return (
        <section className="container mx-auto px-4 py-8">
            {artigos.map(artigo => (
                <ListElement key={artigo.id} artigo={artigo} />
            ))}
        </section>
    )
}