import React from 'react';

class Tasks extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => this.setState({tasks: res}))
  }

  render() {
    return (
      <>
        <p>Tareas: {this.state.tasks.length}</p>
        {this.state.tasks.map((task) => <p>Tarea: {task.title} {task.completed ? 'Completada' : 'No completada'}</p>)}
      </>
    )
  }
}

export default Tasks