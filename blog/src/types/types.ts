export interface Artigo {
    id: number;
    titulo: string;
    slug: string;
    autor: string;
    dataPublicacao: string;
    conteudo: string;
    palavrasChave: string[];
}