import Link from 'next/link';
import PropTypes from 'prop-types';

const FormLink = ({ linkDescription, href, linkText }) => {
  return (
    <span className="Form-link">
      {linkDescription}
      <Link className="Form-link" href={href}>
        {linkText}
      </Link>
    </span>
  );
};

FormLink.propTypes = {
  linkDescription: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default FormLink;
