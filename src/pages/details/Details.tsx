import {useEffect, useState} from 'react'

interface Livro {
    id: string
    titulo: string
    autores: string[]
    descricao?: string
    capaUrl?: string
    editora?: string
    dataPublicacao?: string
    numeroPaginas?: number
    isbn?: string
}

const livroMock: Livro = {
    id: '1',
    titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
    autores: ['J.R.R. Tolkien'],
    descricao: 'Uma jornada épica pela Terra Média para destruir o Um Anel.',
    capaUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    editora: 'HarperCollins',
    dataPublicacao: '1954',
    numeroPaginas: 423,
    isbn: '978-8595084759'
}

export function Details() {
    const [carregando, setCarregando] = useState<boolean>(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (carregando) {
        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h2>⏳ Carregando detalhes do livro...</h2>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <img
                src={livroMock.capaUrl}
                alt={livroMock.titulo}
                style={{ width: '200px', borderRadius: '8px' }}
            />
            <h1>{livroMock.titulo}</h1>
            <p><strong>Autor(es):</strong> {livroMock.autores.join(', ')}</p>
            <p><strong>Editora:</strong> {livroMock.editora} ({livroMock.dataPublicacao})</p>
            <p><strong>Páginas:</strong> {livroMock.numeroPaginas} | <strong>ISBN:</strong> {livroMock.isbn}</p>
            <hr />
            <h3>Sinopse</h3>
            <p>{livroMock.descricao}</p>
        </div>
    )
}