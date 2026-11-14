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
    const [livro, setLivro] = useState<Livro | null>(null)
    const [erro, setErro] = useState<string | null>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                setLivro(livroMock);
            } catch (e) {
                setErro('Falha ao carregar as informações do livro.');
            } finally {
                setCarregando(false);
            }
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

    if (erro || !livro) {
        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif', color: '#c00' }}>
                <h2>❌ Não foi possível carregar os detalhes do livro.</h2>
                <p>{erro || 'Livro não encontrado ou indisponível no momento.'}</p>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <img
                src={livro.capaUrl}
                alt={livro.titulo}
                style={{ width: '200px', borderRadius: '8px' }}
            />
            <h1>{livro.titulo}</h1>
            <p><strong>Autor(es):</strong> {livro.autores.join(', ')}</p>
            <p><strong>Editora:</strong> {livro.editora} ({livro.dataPublicacao})</p>
            <p><strong>Páginas:</strong> {livro.numeroPaginas} | <strong>ISBN:</strong> {livro.isbn}</p>
            <hr />
            <h3>Sinopse</h3>
            <p>{livro.descricao}</p>
        </div>
    )
}