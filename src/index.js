import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DndEditor from './components/dndEditor/dndEditor';

const Container = styled.div`
  display: flex;
`;

class App extends React.Component {

  render() {
    return (
      <Container>

        <DndEditor/>
      </Container>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
