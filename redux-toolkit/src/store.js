import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit"

// action creator
const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE");

console.log(addToDo()); // {type: 'ADD', payload: undefined}

/* @reduxjs/toolkit createReducer() 사용 전
const reducer = (state = [], action) => {
    console.log(action); // ex. {type: 'ADD', payload: 'Hello'}
    switch (action.type) {
        case addToDo.type: return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type: return state.filter(todo => todo.id !== action.payload);
        default: return state;
    }
}
*/

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() })
    },
    [deleteToDo]: (state, action) => 
        state.filter(todo => todo.id !== action.payload)
})

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;