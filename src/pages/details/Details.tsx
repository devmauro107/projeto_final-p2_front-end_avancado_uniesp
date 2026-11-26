
import { useEffect, useState } from 'react'
import type { Livro } from '../../types/Livro/Livro'
import { LivroService } from '../../services/LivroService'
import './Details.css'

/**
 * Componente da Tela de Detalhes do Livro.
 *
 * Atende aos requisitos da 2ª Avaliação de Frontend Avançado (UNIESP):
 * - Exibição completa de capa ampliada, sinopse, autores, editora, ano, páginas e ISBN.
 * - Gerenciamento de estados de carregamento (loading), erro de rede/cota e sucesso.
 * - Layout responsivo adaptável para celulares, tablets e desktops (Details.css).
 * - Carregamento dos dados do livro por ID.
 *
 * @author Mauro Sérgio
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

    useEffect(() => {
        let ativo = true;

        async function carregarLivro() {
            try {
                const dadosDoLivro = await LivroService.obterPorId(idLivro);

                if (ativo) {
                    setLivro(dadosDoLivro);
                    setErro(null);
                }
            } catch {
                if (ativo) {
                    setLivro(null);
                    setErro('Não foi possível carregar os detalhes do livro.');
                }
            } finally {
                if (ativo) {
                    setCarregando(false);
                }
            }
        }

        carregarLivro();

        return () => {
            ativo = false;
        };
    }, [idLivro]);

    if (carregando) {
        return (
            <h2 className="detalhes-alerta">
                ⏳ Carregando detalhes do livro...
            </h2>
        );
    }

    if (erro || !livro) {
        return (
            <h2 className="detalhes-alerta detalhes-erro">
                ❌ {erro || 'Livro não encontrado.'}
            </h2>
        );
    }

    return (
        <div className="detalhes-container">
            <div className="detalhes-header">
                <img
                    src={livro.capaUrl}
                    alt={livro.titulo}
                    className="detalhes-capa"
                />

                <div className="detalhes-info">
                    <h1 className="detalhes-titulo">
                        {livro.titulo}
                    </h1>

                    <p className="detalhes-autores">
                        <strong>Autor(es):</strong> {livro.autores.join(', ')}
                    </p>

                    <p>
                        <strong>Editora:</strong> {livro.editora} ({livro.dataPublicacao})
                    </p>

                    <p>
                        <strong>Páginas:</strong> {livro.numeroPaginas} | <strong>ISBN:</strong> {livro.isbn}
                    </p>
                </div>
            </div>

            <hr />

            <h3>Sinopse</h3>

            <p className="detalhes-sinopse-texto">
                {livro.descricao}
            </p>
        </div>
    );
}
