import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profil';
import './assets/styles/main.scss';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='*' element={<Home />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/profil' element={<Profil />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
