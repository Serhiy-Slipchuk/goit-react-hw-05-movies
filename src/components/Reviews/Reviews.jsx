import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import Poster from 'components/Poster/Poster';
import { getMovieReviews } from 'functions/clientAPI';
import Loader from 'components/Loader/Loader';

const Reviews = function () {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(({ data }) => setReviews(data.results))
      .catch(error => window.alert(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.reviews}>
      <ul className={css['reviews-list']}>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <Poster key={id} heading={`Author: ${author}`} text={content} />
              </li>
            );
          })
        ) : (
          <li>
            <Poster
              heading="Sorry..."
              text="We don't have any reviews for this movie"
            />
          </li>
        )}
      </ul>

      {isLoading && <Loader />}
    </div>
  );
};

export default Reviews;
