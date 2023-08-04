import { useState, useEffect } from 'react';
import Trending from '../components/Trending/Trending';
import { fetchTrending } from '../service/api';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrends);
  }, [trends]);

  return (
    <>
      <Trending films={trends} />
    </>
  );
};

export default Home;
