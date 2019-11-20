const initialData = {


 



  cards: {
    'task-1':
     {
      id: 'task-1',
      content: 'Take out the trash and another thing also',
      documentId:789,
      creatorId:789,
      curators:[1,4,3],
      type:'darken-1',
      label:"What is Osteopathy?",
      linkUrl:"www.jimmyyukka.com",
      summary:"lorem20",
    },
    'task-2':
     {
      id: 'task-2',
      content: 'Scratch bum',
      documentId:789,
      creatorId:789,
      curators:[1,4,3],
      type:'lighten-4',
      label:"From An Ostepoath",
      linkUrl:"www.jimmyyukka.com",
      summary:"lorem20",
    },
    'task-3':
     {
      id: 'task-3',
      content: 'Pick nose',
      documentId:789,
      creatorId:789,
      curators:[1,4,3],
      type:'lighten-4',
      label:"label field",
      linkUrl:"www.jimmyyukka.com",
      summary:"lorem20",
    },
    'task-4':
     {
      id: 'task-4',
      content: 'Eat a pie',
      documentId:789,
      creatorId:789,
      curators:[1,4,3],
      type:'lighten-4',
      label:"label field",
      linkUrl:"www.jimmyyukka.com",
      summary:"lorem20",
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'FACTS',
      taskIds: ['task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'PROS',
      taskIds: ['task-1']
    },
    'column-3': {
      id: 'column-3',
      title: 'CONS',
      taskIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};
export default initialData;
