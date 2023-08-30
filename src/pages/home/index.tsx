/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-15 08:54:23
 * @LastEditors: 杨自强
 */


import logo from './logo.svg';
import './App.css';
import Clock from '@/pages/clock/index';

import React from "react";
interface isState {
  title: string,
  node: any

}

export default class Help extends React.Component<any, isState> {
  constructor (props: any) {
    super(props);
    this.state = {
      title: 'home',
      node: props.children
    };
    // this.setState({node: props.children})
    console.log(props)
  }

  render () {
    return (
      <div>

  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Clock/>
        {this.state.node}
      </header>
      {}
      </div>
    );
  }
}



