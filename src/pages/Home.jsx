import { Homemarkup } from 'components/Homemarkup/Homemarkup';
import { fetchFilms } from '../components/api';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';

 const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFilms() {
      try {
        setLoading(true)
        const filmsData = await fetchFilms();

        setFilms(filmsData.results);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }

    getFilms();
  }, []);

  return (
    <main>
      <h1 style={{ paddingLeft: '50px', margin: '40px 0' }}>
        Trending today
      </h1>
      {loading && <Loader />}
      <Homemarkup films={films} />
    </main>
  );
};

export default Home;