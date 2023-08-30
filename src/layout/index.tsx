/*
 * @Description: 布局
 * @Author: 杨自强
 * @Date: 2023-08-29 11:14:05
 * @LastEditors: 杨自强
 */
import React from "react";
import NavBar from "./nav-bar";
interface isState {
  title: string,
  node: any

}

export default class Layout extends React.Component<any, isState> {
  constructor (props: any) {
    super(props);
    this.state = {
      title: 'about',
      node: props.children
    };
  }

  render () {
    return (
      <div>
        <NavBar/>
        {this.state.node}
      </div>
    );
  }
}
