import PropTypes from 'prop-types';

const Checkbox = ({
  id,
  classCheckbox,
  label,
  classLabel,
  check,
  onChange,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={check}
        onChange={onChange}
        className={classCheckbox}
      />
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  classCheckbox: PropTypes.string,
  label: PropTypes.string,
  classLabel: PropTypes.string,
  check: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  classCheckbox: '',
  label: '',
  classLabel: '',
  check: false,
  onChange: () => {},
};

export default Checkbox;
