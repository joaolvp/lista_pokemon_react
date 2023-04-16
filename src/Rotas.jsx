import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pokemon from "./Pokemon";

function Rotas(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemon/:index" element={<Pokemon/>}/>
        </Routes>
    </Router>
    )
}

export default Rotas;