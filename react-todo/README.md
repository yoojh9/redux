# React-todo

### 1) Set up

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

### 2)
