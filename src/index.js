import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Pasabocas from './pages/panaderia/Pasabocas';
import Especial from './pages/panaderia/Especial';
import Integral from './pages/panaderia/Integral';
import Galletas from './pages/pasteleria/Galletas';
import Postres from './pages/pasteleria/Postres';
import Tortas from './pages/pasteleria/Tortas';
import Acercade from './pages/Acercade';
import Personalizados from './pages/Personalizados';
import Contacto from './pages/Contacto';
import Compras from './pages/Compras';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FormCatalogo from './pages/Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
      <Route path='/especial' element={<Especial />}></Route>
      <Route path='/integral' element={<Integral />}></Route>
      <Route path='/pasabocas' element={<Pasabocas />}></Route>
      <Route path='/galletas' element={<Galletas />}></Route>
      <Route path='/postres' element={<Postres />}></Route>
      <Route path='/tortas' element={<Tortas />}></Route>
      <Route path='/acercade' element={<Acercade />}></Route>
      <Route path='/personalizados' element={<Personalizados />}></Route>
      <Route path='/contacto' element={<Contacto />}></Route>
      <Route path='/compras' element={<Compras />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/login/dashboard' element={<Dashboard />}></Route>
      <Route path='/login/form' element={<FormCatalogo/>}></Route>
    </Routes>
  </BrowserRouter>
);

