import { useLivro } from './useLivro'
import './Details.css'

interface DetailsProps {
    idLivro?: string
}

/**
 * Extrai só o ano de datas como "2019-05-14" ou "2019".
 */
function extrairAno(data?: string): string {
    return data?.slice(0, 4) || 'Ano não informado'
}

/**
 * Remove tags HTML da sinopse. O DOMParser extrai só o texto, sem executar scripts.
 */
function removerTags(html: string): string {
    return new DOMParser().parseFromString(html, 'text/html').body.textContent ?? ''
}

/**
 * Tela de detalhes do livro.
 * Exibe capa, autores, editora, ano, páginas, ISBN e sinopse,
 * tratando os estados de carregamento, erro e sucesso.
 * A busca dos dados fica no hook useLivro.
 */
export function Details({ idLivro }: DetailsProps) {
    const { livro, carregando, erro, tentarNovamente } = useLivro(idLivro)

    if (carregando) {
        return (
            <p className="detalhes-alerta" role="status">
                ⏳ Carregando detalhes do livro...
            </p>
        )
    }

    if (erro || !livro) {
        return (
            <div className="detalhes-alerta detalhes-erro" role="alert">
                <p>{erro || 'Livro não encontrado.'}</p>
                {idLivro && (
                    <div className="detalhes-acoes">
                        <button type="button" onClick={tentarNovamente}>
                            Tentar novamente
                        </button>
                    </div>
                )}
            </div>
        )
    }

    /**
     * Exibe os detalhes do livro.
     */
    return (
        <div className="detalhes-container">
            <div className="detalhes-header">
                {livro.capaUrl ? (
                    <img
                        src={livro.capaUrl}
                        alt={`Capa do livro ${livro.titulo}`}
                        className="detalhes-capa"
                    />
                ) : (
                    <div
                        className="detalhes-capa detalhes-capa-vazia"
                        role="img"
                        aria-label="Capa indisponível"
                    >
                        Sem capa
                    </div>
                )}

                <div className="detalhes-info">
                    <h1 className="detalhes-titulo">{livro.titulo}</h1>
                    <p className="detalhes-autores">
                        {livro.autores?.length
                            ? livro.autores.join(', ')
                            : 'Autor não informado'}
                    </p>

                    <div className="detalhes-metadados">
                        <span className="badge">Editora: {livro.editora || 'Não informada'}</span>
                        <span className="badge">Ano: {extrairAno(livro.dataPublicacao)}</span>
                        <span className="badge">Páginas: {livro.numeroPaginas ?? '—'}</span>
                        <span className="badge">ISBN: {livro.isbn || '—'}</span>
                    </div>
                </div>
            </div>

            <section className="detalhes-sinopse-secao">
                <h2 className="detalhes-sinopse-titulo">Sinopse</h2>
                <p className="detalhes-sinopse-texto">
                    {livro.descricao
                        ? removerTags(livro.descricao)
                        : 'Sinopse não disponível.'}
                </p>
            </section>
        </div>
    )
}