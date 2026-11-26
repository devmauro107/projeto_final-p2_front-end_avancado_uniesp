import { useEffect, useState } from 'react'
import type { Livro } from '../../types/Livro/Livro'
import { LivroService } from '../../services/LivroService'

/**
 * Hook para obter os detalhes de um livro.
 */
export function useLivro(idLivro?: string) {
    const [livro, setLivro] = useState<Livro | null>(null)
    const [carregando, setCarregando] = useState<boolean>(true)
    const [erro, setErro] = useState<string | null>(null)
    const [tentativa, setTentativa] = useState<number>(0)

    useEffect(() => {
        if (!idLivro) {
            setCarregando(false)
            setErro('Nenhum identificador de livro foi informado.')
            return
        }

        const id = idLivro
        let cancelado = false

        async function carregar() {
            try {
                setCarregando(true)
                setErro(null)
                const dados = await LivroService.obterPorId(id)
                if (!cancelado) setLivro(dados)
            } catch (e: unknown) {
                if (cancelado) return
                console.error('Erro ao carregar livro:', e)
                setErro(
                    e instanceof Error
                        ? e.message
                        : 'Não foi possível carregar os detalhes do livro.'
                )
            } finally {
                if (!cancelado) setCarregando(false)
            }
        }

        carregar()

        return () => {
            cancelado = true
        }
    }, [idLivro, tentativa])

    function tentarNovamente() {
        setTentativa((t) => t + 1)
    }

    /**
     * Retorna os dados do livro e as funções para manipulação do estado.
     */
    return { livro, carregando, erro, tentarNovamente }
}