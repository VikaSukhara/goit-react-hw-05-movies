import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movie } from '../pages/Movie';
import { SingleFilm } from 'pages/SingleFilm';
import { Cast } from './Cast';

export const App = () => {
  return (
    <div>
      <nav>
        <li>
          <Link to="/trending/get-trending">Home</Link>
        </li>
        <li>
          <Link to="/trending/movies">Movie</Link>
        </li>
      </nav>

      <Routes>
        <Route path="/trending/get-trending" element={<Home />}></Route>
        <Route path="/trending/movies" element={<Movie />}></Route>
        <Route path="/movies/:movieId" element={<SingleFilm />}>
        <Route path="movies/:movieId/cast" element={<Cast />}></Route>
        </Route>
        
      </Routes>
    </div>
  );
};
