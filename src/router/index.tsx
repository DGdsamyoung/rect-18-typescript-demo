/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-14 17:09:28
 * @LastEditors: 杨自强
 */

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from '@/pages/about';
import Home from '@/pages/home';
import Help from '@/pages/help';
// const root = ReactDOM.createRoot(document.getElementById('root'));

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home" element={
          <Home>
            <About/>
          </Home>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default Router;
