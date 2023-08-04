import styled from '@emotion/styled';

const CastContainer = styled.div`
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
  flex-wrap: wrap;

  margin-left: -50px;
  margin-top: -50px;
`;

const Item = styled.li`
  flex-basis: calc(100% / 4 - 50px);
  margin-left: 50px;
  margin-top: 50px;
`;

export { CastContainer, Title, List, Item };
