import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFilm } from '../components/api';
import { Wrapper, SingleFilmPhoto, TextWrapper } from './SingleFilm.styled';

export function SingleFilm() {
  const params = useParams();
  const [singleFilm, setSingleFilm] = useState(null);

  useEffect(() => {
    async function fetchSingleFilm() {
      try {
        const fetchedSingleFilm = await fetchFilm(params.movieId);
        setSingleFilm(fetchedSingleFilm);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSingleFilm();
  }, [params]);

  return (
    <div>
      {singleFilm && (
       <div>
         <Wrapper>
          <SingleFilmPhoto
            src={`https://image.tmdb.org/t/p/original${singleFilm.poster_path}`}
            alt={singleFilm.original_title}
          />
          <TextWrapper>
            <h2>{singleFilm.original_title || singleFilm.name}</h2>
            <p>Rating</p>
            <p>{singleFilm.vote_average}</p>
            <h3>Overview</h3>
            <p>{singleFilm.overview}</p>
            <p>
              {singleFilm.genres &&
                singleFilm.genres.map(genre => genre.name).join(', ')}
            </p>
          </TextWrapper>
        </Wrapper>

        <Link to='cast'>Cast</Link>
       </div>
      )}
    </div>
  );
}
