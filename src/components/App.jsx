import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieInfo from 'pages/MovieInfo';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import menuItems from '../data/menuItems.json'
export const App = () => {
  
  return (
    <div
      // style={{
      //   height: '100vh',
      //   // display: 'flex',
      //   // justifyContent: 'center',
      //   // alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Header>
        <Navigation items={menuItems} />
      {/* <nav>
        <div>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/movies">MOVIES</NavLink>
        </div>
      </nav> */}
      </Header>
      
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
