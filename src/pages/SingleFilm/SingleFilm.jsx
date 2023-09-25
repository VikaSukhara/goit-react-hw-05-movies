import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchFilm } from '../../components/api';
import {
  Wrapper,
  SingleFilmPhoto,
  TextWrapper,
  StyledLink,
  StyledHeading,
  StyledP,
  StyledGenres,
} from './SingleFilm.styled';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';

function SingleFilm() {
  const params = useParams();
  const [singleFilm, setSingleFilm] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSingleFilm() {
      try {
        setLoading(true);
        const fetchedSingleFilm = await fetchFilm(params.movieId);
        setSingleFilm(fetchedSingleFilm);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSingleFilm();
  }, [params.movieId]);

  return (
    <div>
      {loading && <Loader />}
      {singleFilm && (
        <div>
          <StyledLink to={backLink.current}>&#8592; Go back</StyledLink>
          <Wrapper>
            <SingleFilmPhoto
              src={`https://image.tmdb.org/t/p/original${singleFilm.poster_path}`}
              alt={singleFilm.original_title}
            />
            <TextWrapper>
              <h2>{singleFilm.original_title || singleFilm.name}</h2>
              <StyledP>User Scores: {singleFilm.vote_average} %</StyledP>
              <StyledHeading>Overview</StyledHeading>
              <p>{singleFilm.overview}</p>
              <StyledGenres>
                {singleFilm.genres && (
                  <div>
                    <h3 style={{ marginBottom: '20px' }}>Genres:</h3>
                    {singleFilm.genres.map(genre => genre.name).join(', ')}
                  </div>
                )}
              </StyledGenres>
            </TextWrapper>
          </Wrapper>

          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: '40px',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <li>
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="review">Review</StyledLink>
            </li>
          </ul>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
export default SingleFilm;
