// COMPONENTS //
import Button from '../global/Button';

// STYLES //
import './Navigation.scss';

const Navigation = ({ isOpen }) => {
  const navLinks = ['home', 'about', 'features', 'tours', 'contact'];

  return (
    <nav className={`nav ${isOpen ? 'open' : ''}`}>
      <ul className="nav__list">
        {navLinks.map((link, i) => (
          <li className="nav__item" key={i}>
            <a href="#home" className="nav__link">
              {link.toUpperCase()}
            </a>
          </li>
        ))}
        <Button href="/login" className="btn btn--white">
          Login
        </Button>
      </ul>
    </nav>
  );
};

export default Navigation;
