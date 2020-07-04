import React from 'react';
// import { render } from '@testing-library/react';
import styled from 'styled-components';
import { Droppable} from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
    margin: 15px;
    border: 10px solid lightgrey:
    border-radius: 2px;
    width: fit;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
    text-align: center;
    color: darkgreen;
`;
const TaskList = styled.div`
    padding: 4px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue': 'lightgray')};
    flex-grow: 1;
    min-height: 200px;
    width: 9em;

    // display: flex;
`;

export default class Column extends React.Component {
    render() {
     return (
         <Container>
             <Title>{this.props.column.title}</Title>
             <Droppable droppableId={this.props.column.id} 
                // type={this.props.column.id === 'column-3' ? 'done' : 'active'}
                // isDropDisabled={this.props.isDropDisabled}
             >
                 {(provided, snapshot)=> (
             <TaskList
                    ref={provided.innerRef}
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
             >
                 {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                 {provided.placeholder}
             </TaskList>
                 )}
             </Droppable>
         </Container>
        );
    }
}