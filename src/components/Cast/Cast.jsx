import { useParams } from 'react-router-dom';
import { fetchCast } from '../api';
import { useEffect, useState } from 'react';
import { ImgCast, CastList, CastLi } from './Cast.styled';
import { Loader } from 'components/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const param = useParams();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    const controller = new AbortController();
    async function getCast() {
      try {
        setLoading(true);
        const func = await fetchCast(param.movieId, {
          signal: controller.signal,
        });

        setCast(func.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCast();
    return () => controller.abort();
  }, [param.movieId]);

  return (
    <div>
      {loading && <Loader />}
      {cast.length > 0 && (
        <CastList>
          {cast.map(actor => {
            return (
              <CastLi key={actor.id}>
                <ImgCast
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                      : defaultImg
                  }
                  alt="actor"
                />
                <h2 style={{ textAlign: 'center' }}>{actor.name}</h2>
              </CastLi>
            );
          })}
        </CastList>
      )}
    </div>
  );
};

export default Cast;
