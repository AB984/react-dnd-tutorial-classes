// onDragStart
const start = {
    draggableId: 'task-1',
    type: 'TYPE',
    source: {
        droppableId: 'column-1',
        index:0,
    },
};

// onDragUpdate
const update = {
    ...start,
    destination: {
        //current location of draggable
        droppableId: 'column-1',
        index: 1,
    },
};

// onDragEnd
const result = {
    ...update,
    reason: 'DROP',
};