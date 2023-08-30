/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-14 16:29:49
 * @LastEditors: 杨自强
 */

import {push} from 'react-router-redux'
import React from "react";
interface isState {
  title: string,

}

export default class Help extends React.Component<any, isState> {
  constructor (props: any) {
    super(props);
    this.state = {
      title: 'help'
    };
  }

  handleAbout () {
    push("/about'", '123');
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1 onClick={this.handleAbout}>to About</h1>
      </div>
    );
  }
}

