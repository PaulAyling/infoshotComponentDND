import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
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
