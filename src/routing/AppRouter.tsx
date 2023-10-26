import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Results } from "../pages/Results";
import { AddNew } from "../pages/AddNew";

type SearchInputProps = {
  setSearchInput(val: string): void;
  searchInput: string;
};

const AppRouter = (props: SearchInputProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/add-new" element={<AddNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
