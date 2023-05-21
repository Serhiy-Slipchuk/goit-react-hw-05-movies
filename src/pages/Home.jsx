import { useEffect, useState } from 'react';
import { getPopularMovies } from 'functions/clientAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieCard from 'components/MovieCard/MovieCard';

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

  return (
    <>
      <h1>HomePage</h1>
      <MoviesList>
        {movies.map(({ poster_path, original_title, id }) => {
          return (
            <MovieCard
              key={id}
              posterPath={poster_path}
              title={original_title}
            />
          );
        })}
      </MoviesList>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default Home;
