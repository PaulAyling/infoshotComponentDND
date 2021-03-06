// files in context/dnd editor are placeholders
import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import 'materialize-css/dist/css/materialize.min.css';
import '../../index.css'

import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './column';


//      CURRENT CLASS COMPONENT
//  1.IMPORTS
//  2.DEFINE CLASS
//  3.DEFINE STATE 
//  4.onDragEnd
//  5. render output


//      FUNCTIONAL COMPONENT
//  1. IMPORTS
//  2. DEFINE FUNCTION
//  3. useContext
//  4. ...


const Container = styled.div`
  display: flex;
`;

export default class dndEditor extends React.Component {
  state = initialData;

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };
      this.setState(newState);
      return;
    }
    //Start and finnish columns are different
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(source.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
    return;
  };

  render() {
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const cards = column.taskIds.map(
              taskId => this.state.cards[taskId]
            );

            return <Column key={column.id} column={column} tasks={cards} />;
          })}
        </DragDropContext>

      </Container>
    );
  }
}


