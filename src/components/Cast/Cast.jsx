import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/api';
import { CastContainer, Title, List, Item } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const defaultActorPicture =
    'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-High-Quality-Image.png';

  useEffect(() => {
    fetchCast(id).then(response => {
      const { cast } = response;
      setCast(cast);
    });
  }, [id]);

  return (
    <CastContainer>
      <Title>Cast</Title>

      {cast !== [] ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <img
                src={
                  profile_path !== null
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : defaultActorPicture
                }
                alt={'Photo of ' + name}
                width="200"
                height="272.25"
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </Item>
          ))}
        </List>
      ) : (
        <p>We don't have any info about the cast</p>
      )}
    </CastContainer>
  );
};

export default Cast;
