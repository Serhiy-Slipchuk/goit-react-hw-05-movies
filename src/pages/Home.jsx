import { useEffect, useState } from 'react';
import { getPopularMovies } from 'functions/clientAPI';
import Heading from 'components/Heading/Heading';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

const Home = function () {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies()
      .then(({ data: { results, total_results } }) => {
        if (total_results && total_results > 0) {
          setMovies(prev => [...prev, ...results]);
        } else {
          window.alert('There is no films is database');
        }
      })
      .catch(error => window.alert(error))
      .finally(() => setIsLoading(false));
  }, []);

  const locationHomePage = useLocation();

  return (
    <>
      <Heading text="Trending today"/>
      <MoviesList>
        {movies.map(({ poster_path, original_title, id }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              posterPath={poster_path}
              title={original_title}
              location={locationHomePage}
            />
          );
        })}
      </MoviesList>
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
