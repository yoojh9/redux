# React-todo

## 1) Set up

<br>

```
$ npm install react-redux react-router-dom
```

<br>

-   react-router-dom v6.4.2 버전이라 기존 라우터와 코드가 달라짐

```javascript
// App.js

import { HashRouter, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:id" element={<Detail />}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
```

<br>

```javascript
// index.js

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
```

<br><br>

## 2) Connecting the Store

-   store의 변경사항에 대해 subscribe 하기 위해 react-redux가 필요.

-   index.js에 <Provider/> 와 store를 추가한다.

<br>

```javascript
// index.js

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
```

<br>

-   https://github.com/yoojh9/redux/commit/5720cc897fa9b0a46e577118176784d8b1a9ea6b

<br><br>

## 3) react-redux

### (1)connect()

-   component들을 store에 연결시켜준다.

<br>

### (2) mapStateToProps

-   연결된 컴포넌트에서 필요로 하는 데이터를 store로 부터 가져오기 위해 사용.
-   store에서 state가 변경될 떄마다 호출된다

-   connect() 함수의 첫번째 argument로 넘겨지며, Redux Store state가 변경될 때마다 호출된다.

<br>

```javascript
    function mapStateToProps(state, ownProps?)
```

<br>

-   mapStateToProps 함수의 첫번째 argument는 Redux store state 전체이다. (Store.getState()와 같은 값)

-   mapStateToProps는 state를 가져와서 컴포넌트의 props에 전달한다.

<br>

```javascript
// Home.js

function Home(props) {
    console.log(props); // {check: true, dispatch: ƒ}

    return <></>;
}

// redux에서는 store.getState();
function mapStateToProps(state) {
    return { check: true };
}

export default connect(mapStateToProps)(Home);
```

<br>

-   https://github.com/yoojh9/redux/commit/9bd18d36e048d04ac953a99430ec17e93d59d7d5

<br>

### (3) mapDispatchToProps

-   컴포넌트가 store에 dispatch 동작을 하는 방법 (store.dispatch()와 같음)
-   connect() 함수의 두번째 argument이다.
-   https://github.com/yoojh9/redux/commit/af215ec10e561af4e1d12ddd82fb64961c82f7a7

<br><br>

## 4) Deleting to Todo
