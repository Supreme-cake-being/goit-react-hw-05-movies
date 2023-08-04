import { useState, useEffect, Suspense, useRef } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';
import { BackLink } from '../components/BackLink/BackLink';
import { Movie } from '../components/Movie/Movie';

const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  const { title, overview, poster_path, release_date, genres, vote_average } =
    movie;

  return (
    <>
      <BackLink to={backLinkRef.current}>Go Back</BackLink>
      <Movie
        title={title}
        overview={overview}
        poster={poster_path}
        released={release_date}
        genres={genres}
        rating={vote_average}
      />

      <b>Additional information: </b>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
