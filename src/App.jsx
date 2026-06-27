import { useState } from 'react'
import "./CSS/App.css"

import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import NavBr from './components/NavBar';
import { MovieProvider } from './context/MovieContext';
import Contact from './pages/Contact';

function App() {


  return (
   
   <>
   <div>
    <MovieProvider>
    <NavBr  />
<main className='main-content'>
  <Routes>
    <Route path="/"  element={<Home />} />
     <Route path="/Favorite" element={<Favorite />} />
     <Route path="/Contact" element={<Contact />} />
  </Routes>
</main>
</MovieProvider>
   </div>

    </>

 
  )
}


export default App
