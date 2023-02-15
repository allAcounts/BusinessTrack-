import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

const AppRouter = () =>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route/>
    <Route/>
  </Routes>

export default AppRouter;