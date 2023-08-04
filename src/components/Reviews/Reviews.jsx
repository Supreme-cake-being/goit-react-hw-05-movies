import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api';
import { ReviewsContainer, Title, List, Item } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchReviews(id).then(response => {
      const { results } = response;
      setReviews(results);
    });
  }, [id]);

  return (
    <ReviewsContainer>
      <Title>Reviews</Title>

      <List>
        {reviews.length !== 0 ? (
          reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </Item>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </List>
    </ReviewsContainer>
  );
};

export default Reviews;
