import { configureStore, createSlice } from "@reduxjs/toolkit";


// action creator
/*
const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE");
console.log(addToDo()); // {type: 'ADD', payload: undefined}
*/

/*
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() })
    },
    [deleteToDo]: (state, action) => 
        state.filter(todo => todo.id !== action.payload)
})
*/

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) => state.filter(todo => todo.id !== action.payload)
    }
})

const store = configureStore({reducer: toDos.reducer});

console.log(toDos); // {name: 'toDosRedcuer', actions: actions : {add: ƒ, remove: ƒ}} ... }
export const {
    add,
    remove
} = toDos.actions

export default store;