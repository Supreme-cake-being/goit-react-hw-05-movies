import { Input } from './SearchBar.styled';

const SearchBar = ({ onChange, inputValue }) => {
  return (
    <Input
      name="query"
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search movies"
      value={inputValue}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
