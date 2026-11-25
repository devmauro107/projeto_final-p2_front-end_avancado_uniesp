import { useEffect, useState } from 'react'
import type { Livro } from '../../types/Livro/Livro'
import { LivroService } from '../../services/LivroService'
import './Details.css'

/**
 * Componente da Tela de Detalhes do Livro.
 *
 * - Atende aos requisitos:
 * - Exibição completa de capa ampliada, sinopse, autores, editora, ano, páginas e ISBN.
 * - Gerenciamento robusto de estados de carregamento (loading), erro de rede/cota e sucesso.
 * - Layout responsivo adaptável para celulares, tablets e desktops (Details.css).
 * - Implementação desacoplada da função carregarLivro por ID.
 *
 * @param {DetailsProps} props - Propriedades da tela, incluindo o idLivro opcional.
 * @returns {JSX.Element} Interface estruturada com os detalhes da obra literária.
 */
interface DetailsProps {
    idLivro?: string;
}

export function Details({ idLivro = 'zyTCAlFPjgYC' }: DetailsProps) {
    const [carregando, setCarregando] = useState<boolean>(true);
    const [livro, setLivro] = useState<Livro | null>(null);
    const [erro, setErro] = useState<string | null>(null);

    async function carregarLivro(id: string) {
        try {
            setCarregando(true);
            setErro(null);
            const dadosDoLivro = await LivroService.obterPorId(id);
            setLivro(dadosDoLivro);
        } catch (e: unknown) {
            console.error("Erro ao carregar livro:", e);
            if (e instanceof Error) {
                setErro(e.message);
            } else {
                setErro("Não foi possível carregar os detalhes do livro.");
            }

        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarLivro(idLivro);
    }, [idLivro]);

    if (carregando) {
        return <h2 className="detalhes-alerta">⏳ Carregando detalhes do livro...</h2>
    }

    if (erro || !livro) {
        return <h2 className="detalhes-alerta detalhes-erro">{erro || 'Livro não encontrado.'}</h2>
    }

    return (
        <div className="detalhes-container">
            <div className="detalhes-header">
                <img src={livro.capaUrl} alt={livro.titulo} className="detalhes-capa" />

                <div className="detalhes-info">
                    <h1 className="detalhes-titulo">{livro.titulo}</h1>
                    <p className="detalhes-autores"><strong>Autor(es):</strong> {livro.autores.join(', ')}</p>
                    <p><strong>Editora:</strong> {livro.editora} ({livro.dataPublicacao})</p>
                    <p><strong>Páginas:</strong> {livro.numeroPaginas} | <strong>ISBN:</strong> {livro.isbn}</p>
                </div>
            </div>

            <hr />

            <h3>Sinopse</h3>
            <p className="detalhes-sinopse-texto">{livro.descricao}</p>
        </div>
    )
}