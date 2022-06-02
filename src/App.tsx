import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import useOthers from './hooks/useOthers';
import Other from './entities/Other';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';
import Search from './components/Search';

function App() {
  const [ , , , , , filtered, onChangeQuery, search ] = useOthers();
  return (
    <Container>
      <Wrapper>
        Hola mundo!
        <Search value={search} onChangeValue={onChangeQuery} count={filtered.length} />
        <ContainerBlog>
          {filtered.length && filtered.map((other: Other) => <Card key={other.id} other={other} />)}
        </ContainerBlog>
      </Wrapper>
    </Container>
  );
}

export default App;
