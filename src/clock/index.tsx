/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-14 16:29:49
 * @LastEditors: 杨自强
 */

import React from "react";
interface isState {
  date: Date,

}

export default class Clock extends React.Component<any, isState> {
  constructor (props: any) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render () {
    return (
      <div>
        <h1>现在时间!</h1>
        <h2> {this.state.date.toDateString()} </h2>
      </div>
    );
  }
}

