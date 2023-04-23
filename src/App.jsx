import React from "react";
import Navbar from "./Pages/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
      <BrowserRouter> 
      <Navbar />
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
