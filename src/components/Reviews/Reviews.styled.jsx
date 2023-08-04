import styled from '@emotion/styled';

const ReviewsContainer = styled.div`
  margin-top: 24px;
`;

const Title = styled.h2`
  margin-bottom: 24px;

  font-size: 36px;
  font-weight: 600;
  line-height: 42px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export { ReviewsContainer, Title, List, Item };
