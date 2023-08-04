import { Link, useLocation } from 'react-router-dom';
import { Title, List } from './Trending.styled';

const Trending = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <Title>Trending movies</Title>
      <List>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default Trending;
