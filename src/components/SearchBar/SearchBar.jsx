import { Form, Button, Input } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="query"
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
