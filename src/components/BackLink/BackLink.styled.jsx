import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 8px 16px;

  font-weight: 500;
  text-decoration: none;

  border-radius: 4px;
  color: black;

  transition: background-color 250ms linear, color 250ms linear;

  &:hover {
    color: white;
    background-color: #b18742;
  }
`;
