import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'To-do',
      tasks: [
        {
          description: '',
          name: 'Third task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Fourth task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Fifth task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'In-progress',
      tasks: [
        {
          description: '',
          name: 'Second task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
