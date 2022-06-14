/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-14 16:24:04
 * @LastEditors: 杨自强
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Clock/>
      </header>
    </div>
  );
}


export default App;
