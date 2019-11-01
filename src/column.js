import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  margin: 2px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 220px;
  background: #e3f2fd;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 2px;
  color: red;
`;
const TaskList = styled.div`
padding 2px;
tansition: background-color 0.5s ease;
flex-grow:1;
min-height: 100px;
background-color:${props => (props.isDraggingOver ? 'skyblue' : 'white')}

`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
