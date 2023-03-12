import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import React from 'react';
import HomePage from './pages/Home';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    </Routes>
  )
}

export default App
