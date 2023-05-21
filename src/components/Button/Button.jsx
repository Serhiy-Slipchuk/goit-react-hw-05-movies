import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = function ({ type, text }) {
  return (
    <button className={css.button} type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
