import { Link, useLocation } from 'react-router-dom';
import { List } from './FoundMovies.styled';

const FoundMovies = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default FoundMovies;
