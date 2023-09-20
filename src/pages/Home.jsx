import { Homemarkup } from 'components/Homemarkup';
import { fetchFilms } from '../components/api';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        const filmsData = await fetchFilms();

        setFilms(filmsData.results);
      } catch (error) {
        console.log(error);
      }
    }

    getFilms();
  }, []);

  return (
    <main>
      <h1 style={{ marginLeft: '50px', marginBottom: '40px' }}>
        Trending today
      </h1>
      <Homemarkup films={films} />
    </main>
  );
};
