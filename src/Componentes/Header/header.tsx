
import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="biblioteca-header">

      <NavLink to="/" className="biblioteca-logo">
        <span className="biblioteca-logo-icone">📚</span>
        <span>
          Biblioteca <strong>Virtual</strong>
        </span>
      </NavLink>

      <nav
        className="biblioteca-navegacao"
        aria-label="Navegação principal"
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'biblioteca-link ativo' : 'biblioteca-link'
          }
        >
          Detalhes
        </NavLink>

        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive ? 'biblioteca-link ativo' : 'biblioteca-link'
          }
        >
          Sobre
        </NavLink>
      </nav>

    </header>
  );
}
