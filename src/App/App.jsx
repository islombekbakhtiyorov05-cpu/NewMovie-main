import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Subscription from '../Pages/Subscription'
import Support from '../Pages/Support'
import Movies from '../Pages/Movies'
import Movie_inside from "../Pages/Movie_inside"
import Sign_in from '../Pages/Sign_in'
import Actor_info from '../Pages/Actor_info'
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/subscription' element={<Subscription/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/inside' element={<Movie_inside/>}/>
    <Route path='/register' element={<Sign_in/>}/>
    <Route path='/actor_info' element={<Actor_info/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
