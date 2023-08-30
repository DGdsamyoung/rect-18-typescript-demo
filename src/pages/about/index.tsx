/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-14 16:29:49
 * @LastEditors: 杨自强
 */

import React from "react";
interface isState {
  title: string,
}

export default class About extends React.Component<any, isState> {
  constructor (props: any) {
    super(props);
    this.state = {
      title: 'about'
    };
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

