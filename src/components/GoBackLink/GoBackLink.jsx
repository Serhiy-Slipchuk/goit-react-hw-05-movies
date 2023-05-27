import { Link } from 'react-router-dom';
import css from './GoBackLink.module.css';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const GoBackLink = function ({ path }) {
  return (
    <Link className={css['go-back-link']} to={path?.current?.from ?? '/'}>
      <BsFillArrowLeftSquareFill />
      <span className={css['link-anchor']}>Go Back</span>
    </Link>
  );
};

GoBackLink.propTypes = {
  path: PropTypes.shape({
    current: PropTypes.shape({
      from: PropTypes.object,
    }),
  }).isRequired,
};

export default GoBackLink;
