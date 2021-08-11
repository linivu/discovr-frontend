// STYLES //
import './HamburgerMenu.scss';

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`hamburger-menu ${isOpen ? 'open' : ''}`}
      title="mobile navigation"
      onClick={onClickHandler}
    >
      <div className="hamburger-menu__bg"></div>
      <span className="bar"></span>
    </button>
  );
};

export default HamburgerMenu;
