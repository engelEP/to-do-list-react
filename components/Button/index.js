import PropTypes from 'prop-types';

const Button = ({
  text,
  typeButton,
  customClass,
  onClick,
  children,
  disabled,
}) => {
  return (
    <button
      type={typeButton}
      className={`Button ${customClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  typeButton: PropTypes.oneOf(['button', 'submit']).isRequired,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: '',
  customClass: '',
  onClick: () => {},
  children: <></>,
  disabled: false,
};

export default Button;
