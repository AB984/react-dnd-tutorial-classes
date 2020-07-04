import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
// import App from './App';
// import AppDragDropDemo from './AppDragDropDemo'
import Column from './column';

const Body = styled.div`
padding:.5em;
margin: 1.5em;
box-shadow: -9px 9px 25px 9px rgba(128,128,128,0.95);
background: linear-gradient(70deg, lightyellow, lightgreen);
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  padding-top: 1em;
  color: darkgreen;
  text-align: center;
  `;
const Subtitle = styled.h2`
text-align: center;
`;

class App extends React.Component {
  state = initialData;

  // CONTRIVED! usually just rely on snapshot values & only onDragEnd is required
  // onDragStart = () => {
  //   document.body.style.color = 'orange';
  //   document.body.style.transition = 'background-color 0.2s ease';
  // };

  // onDragUpdate = update => {
  //   const { destination } = update;
  //   const opacity = destination
  //   ? destination.index / Object.keys(this.state.tasks).length : 0;
    // document.body.style.backgroundColor = `rbga(153, 141, 217, ${opacity})`;
  // }

  onDragEnd = result => {
    // document.body.style.color = 'inherit';
    // document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId ===source.droppableId && destination.index === source.index
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
        taskIds: newTaskIds,
      };
  
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]:newColumn,
        },
      };
  
      this.setState(newState);
      return;
    }

    // moving from on list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState)
  };

  render() {
    return (
      <Body>
        <Title>React Beautiful Drag and Drop:</Title>
        <Subtitle>Use your cursor to move items, or with your keyboard, tab through the options and de/select with the spacebar.</Subtitle>
        <hr />
        <br />
        <br />

        <DragDropContext 
        onDragEnd={this.onDragEnd}
        // onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
      >
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      
            return <Column key={column.id} column={column} tasks={tasks} />;
        
          })}
        </Container>
      </DragDropContext>
          <footer> <a href="https://ab984.github.io/" target="blank">AB Scherschel 2020</a></footer>
      </Body>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
