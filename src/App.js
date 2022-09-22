// import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import { Routes,Route} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/' element={  <Home/>}/>
    <Route path='/login' element={  <Login/>}/>
    <Route path='/details' element={  <Details/>}/>
   
    </Routes>
    </div>
  );
}

export default App;
