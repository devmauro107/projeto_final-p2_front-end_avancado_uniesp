import {useEffect, useState} from 'react'
import type { Livro } from '../../types/Livro/Livro'
import { LivroService } from '../../services/LivroService'

interface DetailsProps {
    idLivro?: string;
}

export function Details({idLivro = 'zyTCAlFPjgYC'}: DetailsProps) {

    const [carregando, setCarregando] = useState<boolean>(true);
    const [livro, setLivro] = useState<Livro | null>(null)
    const [erro, setErro] = useState<string | null>(null)

    async function carregarLivro(id : string) {
        try {
            setCarregando(true);
            setErro(null);

            const dadosDoLivro = await LivroService.obterPorId(id);
            setLivro(dadosDoLivro);

        } catch (e) {
            if (e instanceof Error) {
                setErro(e.message);
            } else {
                setErro('Falha ao carregar as informaçãos do livro');
            }

        } finally {
            setCarregando(false);
        }
    }

    useEffect(() =>{
        carregarLivro(idLivro);
    }, [idLivro]);

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
                <h2> Não foi possível carregar os detalhes do livro.</h2>
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