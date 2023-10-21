import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from '../pages/Home';
import { Results } from '../pages/Results';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<Results />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter