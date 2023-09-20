import { Link } from 'react-router-dom';
import {
  FilmsList,
  FilmItem,
  FilmPhoto,
  FilmTitle,
  FilmButton,
} from './Homemarkup.styled';
// import { fetchFilm } from '../components/api';

// import { useNavigate } from "react-router-dom";

// export const ChoosedFilm = () => {
//     const navigate = useNavigate();

//     const handleChooseFilm = async data => {
//       const response = await fetchFilm();
//       if (response.success) {
//         navigate("/movie", { replace: true });
//       }
//     };

//     return (
//       <div>
//         <h1>Login page</h1>
//         <LoginForm onSubmit={handleChooseFilm} />
//       </div>
//     );
//   };

export const Homemarkup = ({ films }) => {
  return (
    <FilmsList>
      {films.map(film => {
        return (
          <FilmItem key={film.id}>
            <Link to={`/movies/${film.id}`}>
              <FilmPhoto
                src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
                alt={film.original_title}
              />
              <FilmTitle>{film.original_title || film.name}</FilmTitle>
              <FilmButton type="button">Read More</FilmButton>
            </Link>
          </FilmItem>
        );
      })}
    </FilmsList>
  );
};
