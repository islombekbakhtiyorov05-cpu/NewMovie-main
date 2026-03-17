import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Main/Navbar'
import Home from '../Pages/Home'
import Subscription from '../Pages/Subscription'
import Support from '../Pages/Support'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/subscription' element={<Subscription/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
