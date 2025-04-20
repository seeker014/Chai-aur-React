import {createSlice, nanoid } from '@reduxjs/toolkit'; 

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({         // name,initialState,reducers are all built-in keys
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {           // it always has state(current value of variable) and action(parameters required for function)
            const todo = {                            
                id: nanoid(),    // nano id provides unique ids
                text: action.payload  // payload is an object
            }  // todo created , now add in list todos
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) // it will compare id automatically
            // (action.payload apne aap samaj jata hai konse key ko compare karna hai)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions   // need to export functions seperately

export default todoSlice.reducer  // need to export all reducers individually 