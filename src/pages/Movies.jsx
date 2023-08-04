import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchMovies } from '../service/api';
import { useSearchParams } from 'react-router-dom';
import FoundMovies from 'components/FoundMovies/FoundMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: e.target.query.value });
  };

  useEffect(() => {
    fetchMovies(query).then(response => {
      const { results } = response;
      setMovies(results);
    });
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <FoundMovies films={movies} />
    </>
  );
};

export default Movies;
