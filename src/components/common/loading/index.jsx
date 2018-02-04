/**
 * @name: 主组件
 * @description : 加载中状态组件
 */

import React, { Component } from 'react';
import { Toast } from 'antd-mobile';

export default class extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    Toast.loading('加载中', 0);
  }
  componentWillReceiveProps(props) {
    Toast.hide();
    if (props.loading) {
      Toast.loading('加载中', 0);
    }
  }
  render() {
    // console.log('1', this.props.children);
    const { loading, children, className = '' } = this.props;
    return (
      <div className={className}>
        {!loading && children}
      </div>
    );
  }
}
