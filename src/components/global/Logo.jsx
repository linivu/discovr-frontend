// STYLES //
import './Logo.scss';

const Logo = ({ isOpen }) => {
  return (
    <a href="/" className={`logo ${isOpen ? 'open' : ''}`}>
      DISCO<span>V</span>R<span>.</span>
    </a>
  );
};

export default Logo;
