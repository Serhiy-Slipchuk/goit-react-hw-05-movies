import css from './Heading.module.css';
import PropTypes from 'prop-types';

const Heading = function ({ text }) {
  return <h1 className={css.heading}>{text}</h1>;
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
