
import './Sobre.css';

const integrantes = [
  {
    nome: 'Letícia Santos',
    funcao: 'Desenvolvimento do projeto'
  },
  {
    nome: 'Mauro',
    funcao: 'Desenvolvimento do projeto'
  },
  {
    nome: 'Samanta',
    funcao: 'Desenvolvimento do projeto'
  },
  {
    nome: 'joão Lucas',
    funcao: 'Desenvolvimento do projeto'
  },
  {
    nome: 'Marcelo',
    funcao: 'Desenvolvimento do projeto'
  }
];

export function Sobre() {
  return (
    <main className="sobre-pagina">

      {/* APRESENTAÇÃO */}
      <section className="sobre-hero">
        <span className="sobre-selo">
          NOSSO PROJETO
        </span>

        <h1>Sobre a Biblioteca Virtual</h1>

        <p>
          Um espaço desenvolvido para facilitar a
          descoberta e a consulta de livros de forma
          simples, organizada e acessível.
        </p>
      </section>

      {/* INFORMAÇÕES DO PROJETO */}
      <section className="sobre-informacoes">

        <div className="sobre-card">
          <h2>📖 O Projeto</h2>

          <p>
            A Biblioteca Virtual é um projeto acadêmico
            desenvolvido com o objetivo de proporcionar
            uma experiência intuitiva na busca e
            visualização de informações sobre livros balblablabla.
          </p>

          <p>
            A aplicação busca unir tecnologia, organização
            e facilidade de navegação em uma interface
            moderna e funcional.
          </p>
        </div>

        <div className="sobre-card">
          <h2>Nosso Objetivo</h2>

          <p>
            Criar uma plataforma digital que permita
            aos usuários visualizar obras literárias,
            consultar detalhes dos livros e navegar
            pelo catálogo com praticidade.
          </p>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="sobre-tecnologias-secao">
        <h2>Tecnologias utilizadas</h2>

        <p>
          Tecnologias utilizadas na construção
          da interface do projeto.
        </p>

        <div className="sobre-tecnologias">
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>CSS</span>
        </div>
      </section>

      {/* INTEGRANTES */}
      <section className="sobre-equipe">

        <div className="sobre-titulo-secao">
          <span>NOSSA EQUIPE</span>

          <h2>Conheça os desenvolvedores</h2>

          <p>
            Integrantes responsáveis pela criação
            e desenvolvimento da Biblioteca Virtual.
          </p>
        </div>

        <div className="sobre-integrantes">
          {integrantes.map((integrante, index) => (
            <article
              className="sobre-integrante"
              key={index}
            >
              <div className="sobre-avatar">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3>{integrante.nome}</h3>
              <p>{integrante.funcao}</p>
            </article>
          ))}
        </div>
      </section>

      {/* INFORMAÇÕES ACADÊMICAS */}
      <section className="sobre-academico">

        <div>
          <h2>Informações acadêmicas</h2>

          <p>
            <strong>Instituição:</strong> UNIESP
          </p>

          <p>
            <strong>Disciplina:</strong> Front-End Avançado
          </p>

          <p>
            <strong>Professor:</strong> Álekiss Manço de Mélo
          </p>

          <p>
            <strong>Semestre:</strong> 2026.2
          </p>
        </div>

        <a
          href="https://github.com/devmauro107/projeto_final-p2_front-end_avancado_uniesp"
          target="_blank"
          rel="noopener noreferrer"
          className="sobre-github"
        >
          Se interessou? Confira o repositório do projeto no GitHub!
        </a>

      </section>

    </main>
  );
}
