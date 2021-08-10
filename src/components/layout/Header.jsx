// STYLES //
import Logo from '../global/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className=" grid container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
