/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-14 16:29:49
 * @LastEditors: 杨自强
 */


import React from "react";
interface isState {
  date: Date,
  tiem: string

}

export default class Clock extends React.Component<any, isState> {
  constructor (props: any) {
    super(props);
    this.state = {
      date: new Date(),
      tiem: ''
    };
  }

  handleGetTime() {
    return this.state.date.getSeconds()
  }

  componentDidMount() {
    setInterval(()=>{
      const date  = new Date()
      const time = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
      this.setState({
        tiem:  time
      })
    },100)
  }

  render () {
    return (
      <div>
        <h1>现在时间!</h1>
        <h2> {this.state.tiem} </h2>
      </div>
    );
  }
}

