import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px dotted lightgrey;
  border-radius: 2px;
  margin: 1px;
  padding: 2px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  display: flex;
  justify-content:space-between;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 4px;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}>
            <div className={"linkbox blue " + this.props.task.type}>
              <div className="linkbox_reorder">
                <Handle {...provided.dragHandleProps}> < i class="material-icons grey-text" >more_vert</i></Handle>  
              </div>
              <div class="linkbox_link">
                <a href="http://www.jimmyyukka.com"> 
                  <p>{this.props.task.label}  </p>
                </a>
              </div>
              <div className="linkbox_tools">
                <span><i class="material-icons grey-text" >mode_edit</i></span>
                <span><i class="material-icons grey-text" >clear</i></span>
              </div>
            </div>   
          </Container>
        )}
        
      </Draggable>
    );
  }
}
