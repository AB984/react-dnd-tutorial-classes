const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'MoonRise Farms'},
        'task-2': { id: 'task-2', content: 'Becker Farms'},
        'task-3': { id: 'task-3', content: '3 Flock Farm'},
        'task-4': { id: 'task-4', content: 'Moon Valley'},
        'task-5': { id: 'task-5', content: `People's Market`},
        'task-6': { id: 'task-6', content: 'Barnhouse Farm'},
        'task-7': { id: 'task-7', content: 'Quarter Moon'},

    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: `Market Booths`,
            taskIds:['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Favorites',
            taskIds:[],
        },
        'column-3': {
            id: 'column-3',
            title: 'Need to Visit',
            taskIds:[],
        },
    },
    // Facilitate reordering of the columns
        // columnOrder: ['column-1', 'column-2'],
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;