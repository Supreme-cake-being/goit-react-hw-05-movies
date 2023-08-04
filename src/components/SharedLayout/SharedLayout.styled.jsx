import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;

  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 8px 0;
  margin-bottom: 16px;

  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;

  font-weight: 500;
  text-decoration: none;

  border-radius: 4px;
  color: black;

  transition: background-color 250ms linear, color 250ms linear;

  &.active {
    color: #ffffff;
    background-color: #b18742;
  }
`;
