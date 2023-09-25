import { Homemarkup } from 'components/Homemarkup/Homemarkup';
import { fetchFilms } from '../components/api';
import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getFilms() {
      try {
        setLoading(true);
        const filmsData = await fetchFilms({
          signal: controller.signal,
        });
        setFilms(filmsData.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getFilms();
    return () => controller.abort();
  }, []);

  return (
    <main>
      <h1 style={{ paddingLeft: '50px', margin: '40px 0' }}>Trending today</h1>
      {loading && <Loader />}
      <Homemarkup films={films} />
    </main>
  );
};

export default Home;
