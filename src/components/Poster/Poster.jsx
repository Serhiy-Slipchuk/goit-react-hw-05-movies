import css from './Poster.module.css';
import PropTypes from 'prop-types';

const Poster = function ({ heading, text }) {
  return (
    <div className={css.poster}>
      <h2 className={css.heading}>{heading}</h2>
      <p className={css.text}>{text}</p>
    </div>
  );
};

Poster.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Poster;
