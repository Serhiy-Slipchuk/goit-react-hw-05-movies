import css from './ButtonLink.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = function ({ text, path }) {
  return (
    <Link className={css['link-button']} to={path}>
      {text}
    </Link>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ButtonLink;
