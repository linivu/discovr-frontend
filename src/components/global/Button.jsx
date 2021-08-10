// STYLES //
import './Button.scss';

const Button = ({ type, href, className, children }) => {
  if (type === 'button' || type === 'submit') {
    return (
      <button type={type} className={className}>
        {children}
      </button>
    );
  } else {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
};

export default Button;
