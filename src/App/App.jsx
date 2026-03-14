import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Main/Navbar'
import Home from '../Pages/Home'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
