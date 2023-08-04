import { useEffect, useState } from 'react';
import { MovieInfo, MovieDetailedInfo, MovieTitle, List } from './Movie.styled';

export const Movie = ({
  title,
  overview,
  poster,
  released = '',
  genres = [],
  rating,
}) => {
  const [releaseDate, setRealeaseDate] = useState('999 BC');
  const defaultMoviePoster =
    'https://m.media-amazon.com/images/M/MV5BMDFiMzFiNTYtNDY2Yy00ZjhhLWIyZGMtNmM4ZDA4YjJlNjA0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg';

  useEffect(() => {
    const year = released.split('-');
    setRealeaseDate(year[0]);
  }, [released]);

  return (
    <MovieInfo>
      <img
        src={
          poster !== undefined
            ? 'https://image.tmdb.org/t/p/w500' + poster
            : defaultMoviePoster
        }
        alt="Movie poster"
        width="300"
      />
      <MovieDetailedInfo>
        <MovieTitle>
          {title} ({releaseDate})
        </MovieTitle>

        <p>
          <b>User score: </b>
          {Math.floor(rating * 10)}%
        </p>

        <b>Overview: </b>
        <p>{overview}</p>

        <b>Genres: </b>
        <List>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </List>
      </MovieDetailedInfo>
    </MovieInfo>
  );
};
