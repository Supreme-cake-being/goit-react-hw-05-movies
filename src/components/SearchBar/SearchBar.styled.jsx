import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 8px 4px;
  border: 0;
  cursor: pointer;
  outline: none;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 8px 4px;

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export { Form, Button, Input };
