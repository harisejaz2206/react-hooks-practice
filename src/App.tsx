import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <NavBar></NavBar>
      <HomePage></HomePage>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
