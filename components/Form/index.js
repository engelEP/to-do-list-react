import Image from 'next/image';
import PropTypes from 'prop-types';

const Form = ({ customClass, title, subTitle, onSubmit, children }) => {
  return (
    <form className={customClass} onSubmit={onSubmit}>
      <Image
        className="Form-logo"
        width={100}
        height={100}
        src="/logo-smbs.png"
        alt="logo-smbs"
      />
      <div className="Form-wrapper">
        <h2 className="Form-title">{title}</h2>
        <span className="Form-subTitle">{subTitle}</span>
      </div>
      <div className="Form-container">{children}</div>
    </form>
  );
};

Form.propTypes = {
  customClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  customClass: '',
  subTitle: '',
  children: <></>,
  onSubmit: () => {},
};

export default Form;
