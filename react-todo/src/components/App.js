import { HashRouter, Route, Router, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";


function App(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/:id" element={<Detail/>}></Route>
            </Routes>
        </HashRouter>
    )
}

export default App;