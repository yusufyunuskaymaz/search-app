import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from '../pages/Home';
import { Results } from '../pages/Results';

 type SearchInputProps = {
  setSearchInput(val:string):void;
  searchInput: string
}


const AppRouter = (props:SearchInputProps) => {
  const {searchInput,setSearchInput} = props
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<Results searchInput={searchInput} setSearchInput={setSearchInput}  />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter