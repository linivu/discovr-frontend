import { useState } from 'react';

// COMPONENTS //
import Logo from '../global/Logo';
import HamburgerMenu from './HamburgerMenu';

// STYLES //
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className=" grid container">
        <Logo isOpen={isOpen} />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
