import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '@/components/Input';

const FormGroup = ({
  customClass,
  controlId,
  labelText,
  inputType,
  inputName,
  onChange,
}) => {
  const [text, setText] = useState();

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    setText(value);
    onChange({ name, value });
  };

  return (
    <div className={customClass}>
      <label htmlFor={controlId} className="Form-label">
        {labelText}
      </label>
      <Input
        inputId={controlId}
        inputName={inputName}
        customClass="Form-input form-control"
        inputType={inputType}
        placeholder={labelText}
        value={text}
        onChange={handlerChange}
      />
    </div>
  );
};

FormGroup.propTypes = {
  customClass: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

FormGroup.defaultProps = {
  customClass: '',
  onChange: () => {},
};

export default FormGroup;
