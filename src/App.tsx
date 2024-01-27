import React from 'react';
import './App.css';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./todo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="todo" element={<Todo/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;