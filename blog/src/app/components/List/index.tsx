import { Artigo } from "@/types/types"
import ListElement from "./ListElement"

type Props = {
    artigos: Artigo[]
}

export default function List({artigos}: Props) {
    return (
        <section>
            {artigos.map(artigo => (
                <ListElement key={artigo.id} artigo={artigo} />
            ))}
        </section>
    )
}