import React from 'react';
import {
  Container,
  Wrapper,
  SearchBox,
} from './styled';
import SearchIcon from '../../assets/search.svg';

export interface ISearchBarProps {
  count: number;
  value: string;
  onChangeValue: (value: any) => void;
};

const SearchBar: React.FC<ISearchBarProps> = ({ count, value, onChangeValue }) => (
  <Container data-testid="searchbar-container">
    <Wrapper>
      <SearchBox>
        <img
          src={SearchIcon}
          alt='Search...'
        />
        <input type="text" value={value} onChange={e => onChangeValue(e.target.value)} />
        <div>
          <span>{count} results</span>
        </div>
      </SearchBox>
    </Wrapper>
  </Container>
)

export default SearchBar;