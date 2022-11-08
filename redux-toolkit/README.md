# Redux Toolkit

-   redux toolkit을 사용하면 react-redux의 boilerplate 코드를 많이 줄여 줌
-   https://redux-toolkit.js.org/

<br>

```
$ npm install @reduxjs/toolkit
```

<br><br>

## 1) createAction

-   https://redux-toolkit.js.org/api/createAction
-   https://github.com/yoojh9/redux/commit/c092a91c45d45ff3e87d61818650d2c854763c29

<br><br>

## 2) createReducer

-   createReducer를 사용하면 state를 mutate 하기 쉽다.
-   기존에 작업 했던 건 새로운 state를 만들어서 리턴했지, state를 mutate 하지 않았다.
-   createReducer를 사용할 때는 2가지 선택지가 있다. 새로운 state를 리턴하거나 state를 mutate 할 수 있다.
-   즉 createReducer는 switch case를 하지 않아도 되게 만들어주고, state를 mutate 할 수 있게 해준다.

-   아래 예제에서 push는 state를 mutate하고, filter는 새로운 state를 리턴한다.

<br>

```javascript
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) =>
        state.filter((todo) => todo.id !== action.payload),
});
```

<br>

-   https://redux-toolkit.js.org/api/createReducer
-   https://github.com/yoojh9/redux/commit/a90c6ece22fda273eb6f5b14ae77ecc6f53dda18

<br><br>

## 3) configureStore

-   https://redux-toolkit.js.org/api/configureStore
-   chrome extension의 Redux Developer Tool을 설치하면 action 정보와 state를 확인할 수 있다.

<br><br>

## 4) createSlice

-   모든 것을 캡슐화 하여, 결론적으로 코드가 아래와 같이 바뀜.
-   https://redux-toolkit.js.org/api/createSlice
-   https://github.com/yoojh9/redux/commit/b1c2b95e38a7b09c0558b8a0407e79be07f6cb20

<br>

```javascript
// store.js
const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) =>
            state.filter((todo) => todo.id !== action.payload),
    },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
```
