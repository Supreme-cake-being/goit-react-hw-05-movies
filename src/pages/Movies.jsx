import { useEffect, useState } from 'react';
import { fetchMovies } from '../service/api';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import FoundMovies from 'components/FoundMovies/FoundMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    fetchMovies(query).then(response => {
      const { results } = response;
      setMovies(results);
    });
  }, [query]);

  return (
    <>
      <SearchBar onChange={updateQueryString} inputValue={query} />
      <FoundMovies films={movies} />
    </>
  );
};

export default Movies;
