import styled from '@emotion/styled';

const MovieInfo = styled.div`
  display: flex;
  gap: 32px;

  margin-top: 32px;
  margin-bottom: 24px;

  font-size: 18px;
  line-height: 24px;
`;

const MovieDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MovieTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 42px;
`;

const List = styled.ul`
  display: flex;
  gap: 16px;

  font-size: 18px;
  line-height: 24px;
`;

export { MovieInfo, MovieDetailedInfo, MovieTitle, List };
