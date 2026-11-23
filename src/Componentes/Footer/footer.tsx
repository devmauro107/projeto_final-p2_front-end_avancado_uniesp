
import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="biblioteca-footer">

      <div className="footer-conteudo">

        {/* IDENTIDADE DA BIBLIOTECA */}
        <div className="footer-marca">
          <h2>
            📚 Biblioteca <span>Virtual</span>
          </h2>

          <p>
            Um espaço para descobrir, explorar
            e se conectar com novas histórias.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="footer-links">
          <h3>Navegação</h3>

          <Link to="/">Detalhes</Link>
          <Link to="/sobre">Sobre o projeto</Link>
        </div>

        {/* INFORMAÇÕES */}
        <div className="footer-informacoes">
          <h3>Informações</h3>

          <p>UNIESP</p>
          <p>Front-End Avançado</p>
          <p>Projeto acadêmico - 2026.2</p>
        </div>

        {/* REPOSITÓRIO */}
        <div className="footer-repositorio">
          <h3>Nosso projeto</h3>

          <a
            href="https://github.com/devmauro107/projeto_final-p2_front-end_avancado_uniesp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
        </div>

      </div>

      <div className="footer-rodape">
        <p>
          © 2026 Biblioteca Virtual. Desenvolvido
          para fins acadêmicos.
        </p>

        <span>Feito com dedicação 💜</span>
      </div>

    </footer>
  );
}
