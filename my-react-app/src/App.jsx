import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profil';
import ErrorPageNotFound from './pages/ErrorPageNotFound';
import './assets/styles/main.scss';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='*' element={<ErrorPageNotFound />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route
              path='/profil'
              element={
                <ProtectedRoute>
                  <Profil />
                </ProtectedRoute>
              }
          />
          </Routes>
      </BrowserRouter>
    </div>
  )
}
