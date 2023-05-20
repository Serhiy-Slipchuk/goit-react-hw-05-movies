import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieInfo from 'pages/MovieInfo';

export const App = () => {
  
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <div>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/movies">MOVIES</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<p>Cast</p>} />
          <Route path="reviews" element={<p>Rewiews</p>} />
        </Route>
      </Routes>
    </div>
  );
};
