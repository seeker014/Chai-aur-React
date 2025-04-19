import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])  // todos is an array of objects where each object is a different task in the todo list

  const addTodo = (todo) => {    // spreading the todo and prev (both are objects)
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )   // we want to add value with existing values (lec-8 interview ques)
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))  
    // prevTodo is every single object in prev (map() helps in looping on prev array)   // prev denotes existing todos array
    // checking id of every object , if id matches - change with new todo else let existing todo remain
    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((individualtodo) => individualtodo.id !== id))  
    // filtering existing array by removing objects whose id matches with given id
    // the ids that don't match with given id are filtered into the new array
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo,
        completed: !prevTodo.completed } : prevTodo))   
        // if id of prevTodo(individual todo object from given 'prev' array of objects) matches with given id , then open the prevTodo object
        // and over-write value of 'completed' from false to true
  }


  // now till here , basic context is done , now new topic-local storage (it has 2 functions only -> setItem and getItem)
  // this means on refreshing the items in list are still present there due to local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))  // getItem returns values in string

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))  // key and value is given
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (  //here individual todo is passed to TodoItem
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} /> 
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App