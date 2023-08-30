/*
 * @Description: 布局
 * @Author: 杨自强
 * @Date: 2023-08-29 11:14:05
 * @LastEditors: 杨自强
 */
import React from "react";
import styles from  './css.module.scss'


export default class NavBar extends React.Component<any, any> {
  constructor (props: any) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className={styles['m-nav-bar']}>
        <div className={styles['content']}>
          内容
        </div>
      </div>
    );
  }
}
