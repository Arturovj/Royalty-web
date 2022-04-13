import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Login from './components/pages/Login/Login';


function App() {
  return (
    
   <>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/services' element={<Services/>} />
     <Route path='/products' element={<Products/>} />
     <Route path='/sign-up' element={<SignUp/>} />
     <Route path='/login' element ={<Login/>} />
   </Routes>
   </>
  );
}

export default App;
