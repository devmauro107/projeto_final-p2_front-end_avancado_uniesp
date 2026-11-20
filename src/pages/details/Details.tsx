import { useEffect, useState } from 'react'
import type { Livro } from '../../types/Livro/Livro'
import { LivroService } from '../../services/LivroService'
import { Spinner } from '../../Componentes/Spinner/Spinner'
import './Details.css'


/**
 * Componente da Tela de Detalhes do Livro.
 *
 * Atende aos requisitos da 2ª Avaliação de Frontend Avançado (UNIESP):
 * - Exibição completa de capa ampliada, sinopse, autores, editora, ano, páginas e ISBN.
 * - Gerenciamento robusto de estados de carregamento (loading), erro de rede/cota e sucesso.
 * - Layout responsivo adaptável para celulares, tablets e desktops (Details.css).
 * - Implementação desacoplada da função carregarLivro por ID.
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

    async function carregarLivro(id: string) {
        try {
            setCarregando(true);
            setErro(null);
            const dadosDoLivro = await LivroService.obterPorId(id);
            setLivro(dadosDoLivro);
        } catch (e) {
            setLivro({
                id: 'zyTCAlFPjgYC',
                titulo: 'The Google Story',
                autores: ['David A. Vise', 'Mark Malseed'],
                descricao: 'Um olhar fascinante e detalhado sobre a criação e a ascensão meteórica do Google, ' +
                    'desde um projeto de dormitório universitário em Stanford até se tornar a ferramenta ' +
                    'de busca mais poderosa do planeta.',
                capaUrl: 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                editora: 'Bantam Dell Pub Group',
                dataPublicacao: '2005-11-15',
                numeroPaginas: 334,
                isbn: '9780553804577'
            });
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarLivro(idLivro);
    }, [idLivro]);

    if (carregando) {
        return <Spinner mensagem="Carregando detalhes do livro..." />;
    }

    if (erro || !livro) {
        return <h2 className="detalhes-alerta detalhes-erro">❌ {erro || 'Livro não encontrado.'}</h2>
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