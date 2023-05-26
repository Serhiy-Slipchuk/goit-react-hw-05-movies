import css from './MovieDetails.module.css';
import { CiImageOff } from 'react-icons/ci';
import Poster from 'components/Poster/Poster';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import PropTypes from 'prop-types';

const MovieDetails = function ({ imagePath, title, score, overview, genres }) {
  return (
    <div className={css['movie-info']}>
      {imagePath ? (
        <img src={`https://image.tmdb.org/t/p/w500${imagePath}`} alt={title} />
      ) : (
        <CiImageOff className={css['no-image']} />
      )}
      <div className={css.info}>
        <div>
          <Poster heading={`Original title`} text={title} />
          <Poster heading={`User's score`} text={`${score} %`} />
          <Poster heading={`Overview`} text={overview} />
          <Poster heading={`Genres`} text={genres.join(', ')} />
        </div>
        <div className={css['additional-info']}>
          <h2>Additional information</h2>
          <div className={css['buttons-thumb']}>
            <ButtonLink text="Cast" path="cast" />
            <ButtonLink text="Rewiews" path="reviews" />
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MovieDetails;
