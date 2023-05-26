import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { getMovieCast } from 'functions/clientAPI';
import { CiImageOff } from 'react-icons/ci';
import Loader from 'components/Loader/Loader';
import Poster from 'components/Poster/Poster';

const Cast = function () {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCast(movieId)
      .then(({ data }) => setCast(data.cast))
      .catch(error => window.alert(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.cast}>
      {cast && (
        <ul className={css['cast-list']}>
          {cast.map(({ character, id, name, profile_path }) => {
            return (
              <li key={id} className={css['cast-item']}>
                {profile_path ? (
                  <img
                    className={css['cast-image']}
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <CiImageOff className={css['image-off']} />
                )}
                <Poster heading={name} text={`Character: ${character}`} />
              </li>
            );
          })}
        </ul>
      )}

      {isLoading && <Loader />}
    </div>
  );
};

Cast.propTypes = {};

export default Cast;
