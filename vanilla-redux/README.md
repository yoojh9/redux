# Vanilla Redux

Learning Vanilla-Redux

<br>

## 1) Vanilla Counter without Redux

-   https://github.com/yoojh9/redux/commit/84c2e240251cb36ecd7d587de9fab820e08b3e44

<br><br>

## 2) Vanilla Counter with Redux

<br>

```
$ npm install redux
```

<br>

### (1) Store

-   **Store**는 data(state)를 넣는 곳. state는 application에서 바뀌는 data를 의미한다.

-   Redux에는 createStore()라는 함수가 있는데 store가 하는 일은 기본적으로 data를 넣을 수 있는 장소를 생성한다.
-   Redux는 data를 관리하는 역할을 하기 위해 만들어졌다. 이를 위해 data를 어딘가에 넣어줘야 하고, 그 데이터는 store에 저장되어야 한다.

<br>

### (2) Reducer

-   **Reducer**는 data를 수정하는 함수이다.
-   Redux는 reducer 함수에서 return 하는 값으로 데이터를 변경한다.
-   Reducer가 리턴하는 것은 무엇이든지 application의 state가 된다.

```javascript
import { createStore } from "redux";

const countModifier = () => {
    return "hello";
};
const countStore = createStore(countModifier);

console.log(countStore); // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
console.log(countStore.getState()); // hello
```

<br>

-   redux는 결국 데이터를 한 곳으로 모아 관리해준다.

<br>

### (3) Action

-   Action은 Redux에서 function을 부를 때 쓰는 두번째 parameter, 혹은 argument다.
-   action을 통해 Reducer에서 state를 변경할 수 있다.

<br>

```javascript
const countModifier = (count = 0, action) => {
    console.log(action);
    return count;
};
const countStore = createStore(countModifier);

countStore.dispatch({ type: "HELLO" });
```

<br>

-   위 예제처럼 countStore.dispatch({type: "HELLO"}) 를 하게되면 Redux는 countModifier(currentState = 0, {type: "HELLO"})와 같이 호출한다.
-   reducer에 dispatch를 사용해서 action을 보낼 수 있다. dispatch가 reducer를 불러서 current state와 action로 state를 변경할 수 있다.

-   https://github.com/yoojh9/redux/commit/4fc65dabd19c4342de130c7e01a134b347066510

<br>

### (4) Subscribe

-   subscribe는 우리에게 store 안에 있는 변화들을 알 수 있게 해준다.

<br>

```javascript
const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
```

<br>

-   state에 변화가 있으면 subscribe가 onChange()를 실행함.
-   change를 store에서 감지하고 싶다면 그 change를 subscribe(구독)하면 된다.
-   https://github.com/yoojh9/redux/commit/9aa4694e36c018f63c9dfd8b4f0cf249269d1918
