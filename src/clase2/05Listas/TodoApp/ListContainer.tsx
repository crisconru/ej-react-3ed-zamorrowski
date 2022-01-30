import { useState } from "react"
import AddTaskButton from "./AddTaskButton"
import InputText from "./InputText"
import List from "./List"

const initialState = {
  todos: ['Aprender React'],
  todo: ''
}

const ListContainer = () => {
  const [state, setState] = useState(initialState)
  const handleTodo = ({target}) => setState({
    ...state,
    todo: target.value
  })
  const addTodo = () => setState({
    todos: [...state.todos, state.todo],
    todo: ''
  })
  const removeTodo = (removableTodo) => {
    setState({
      ...state,
      todos: state.todos.filter(todo => todo !== removableTodo)
    })
  }
  return <>
    <InputText onChange={handleTodo} value={state.todo}/>
    <AddTaskButton onClick={addTodo} />
    <br />
    <List items={state.todos} onClick={removeTodo}/>
  </>
}

export default ListContainer
