
import './Spinner.css';

interface SpinnerProps {
  mensagem?: string;
}

export function Spinner({
  mensagem = 'Carregando...'
}: SpinnerProps) {
  return (
    <div
      className="biblioteca-loading"
      role="status"
      aria-live="polite"
    >
      <div
        className="biblioteca-loading-anel"
        aria-hidden="true"
      />

      <p className="biblioteca-loading-texto">
        {mensagem}
      </p>
    </div>
  );
}
