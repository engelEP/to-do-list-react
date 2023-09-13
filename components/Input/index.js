import PropTypes from 'prop-types';

const Input = ({
  inputId,
  inputName,
  placeholder,
  inputType,
  customClass,
  onChange,
  onKeyDownCapture,
  value,
}) => {
  return (
    <input
      id={inputId}
      name={inputName}
      placeholder={placeholder}
      type={inputType}
      className={customClass}
      onChange={onChange}
      onKeyDownCapture={onKeyDownCapture}
      value={value}
    />
  );
};

Input.propType = {
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.oneOf(['password', 'text', 'email']).isRequired,
  customClass: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDownCapture: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  input: '',
  inputName: '',
  placeholder: '',
  customClass: '',
  onChange: () => {},
  onKeyDownCapture: () => {},
  value: '',
};

export default Input;
